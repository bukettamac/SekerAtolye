export type CakeCategory = {
  id: string;
  name: string;
  slug: string;
  sort_order: number;
};

export type Cake = {
  id: string;
  category_id: string | null;
  name: string;
  description: string | null;
  price: number | null;
  image_url: string;
  servings: string | null;
  featured: boolean;
  sort_order: number;
  created_at: string;
};

export type OrderInput = {
  full_name: string;
  email: string;
  phone: string;
  event_date?: string | null;
  occasion?: string | null;
  servings?: string | null;
  budget?: string | null;
  message?: string | null;
};
