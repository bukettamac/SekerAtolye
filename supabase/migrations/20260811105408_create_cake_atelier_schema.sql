/*
# Cake Atelier — Orders & Catalog Schema (single-tenant, no auth)

1. New Tables
- `cake_categories`: catalog categories (e.g. Doğum Günü, Düğün, Macaron).
  - id (uuid, PK), name (text), slug (text, unique), sort_order (int)
- `cakes`: individual cake products shown in the catalog/gallery.
  - id (uuid, PK), category_id (FK -> cake_categories), name, description,
    price (numeric), image_url (text), servings (text), featured (bool default false),
    sort_order (int), created_at
- `orders`: custom cake order requests submitted by visitors via the order form.
  - id (uuid, PK), full_name, email, phone, event_date, occasion, servings,
    budget, message, status (text default 'yeni'), created_at

2. Security
- Enable RLS on all three tables.
- This is a no-auth public storefront, so all policies use `TO anon, authenticated`.
- cakes & cake_categories: public read, no public write (managed via dashboard).
- orders: public insert (visitors submit orders), public read (so the storefront
  can show a confirmation), no update/delete from the anon key.

3. Notes
- Prices are stored in TRY (Turkish Lira) as numeric(10,2).
- Order status is a free text field with a default of 'yeni' (new).
*/

CREATE TABLE IF NOT EXISTS cake_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text NOT NULL UNIQUE,
  sort_order int NOT NULL DEFAULT 0
);

ALTER TABLE cake_categories ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_categories" ON cake_categories;
CREATE POLICY "anon_select_categories" ON cake_categories FOR SELECT
  TO anon, authenticated USING (true);

CREATE TABLE IF NOT EXISTS cakes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id uuid REFERENCES cake_categories(id) ON DELETE SET NULL,
  name text NOT NULL,
  description text,
  price numeric(10,2),
  image_url text NOT NULL,
  servings text,
  featured boolean NOT NULL DEFAULT false,
  sort_order int NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE cakes ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_cakes" ON cakes;
CREATE POLICY "anon_select_cakes" ON cakes FOR SELECT
  TO anon, authenticated USING (true);

CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  event_date date,
  occasion text,
  servings text,
  budget text,
  message text,
  status text NOT NULL DEFAULT 'yeni',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_orders" ON orders;
CREATE POLICY "anon_insert_orders" ON orders FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_select_orders" ON orders;
CREATE POLICY "anon_select_orders" ON orders FOR SELECT
  TO anon, authenticated USING (true);