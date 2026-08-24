import React from 'react';
import './NexusTopbar.css';

export const NexusTopbar: React.FC = () => {
  return (
    <div className="nexus-topbar">
      <span className="nexus-topbar__text">
        Bu site, herhangi bir firmaya değildir.
      </span>
      <a
        href="https://nexusbusiness.tech"
        target="_blank"
        rel="noopener noreferrer"
        className="nexus-topbar__link"
      >
        <svg
          className="nexus-topbar__icon"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm7.94 9h-3.02c-.1-2.06-.62-3.94-1.42-5.37A8.02 8.02 0 0 1 19.94 11zM12 4.06c1.02 1.16 1.82 3.1 2.02 4.94H9.98c.2-1.84 1-3.78 2.02-4.94zM4.06 13h3.02c.1 2.06.62 3.94 1.42 5.37A8.02 8.02 0 0 1 4.06 13zm0-2a8.02 8.02 0 0 1 4.44-5.37C7.7 7.06 7.18 8.94 7.08 11H4.06zM12 19.94c-1.02-1.16-1.82-3.1-2.02-4.94h4.04c-.2 1.84-1 3.78-2.02 4.94zM9.98 13h4.04c-.1 1.94-.9 3.71-2.02 4.83A7.66 7.66 0 0 1 9.98 13zm4.56 5.37c.8-1.43 1.32-3.31 1.42-5.37h3.02a8.02 8.02 0 0 1-4.44 5.37z" />
        </svg>
        Nexus Business'a ait örnek bir web sitedir.— nexusbusiness.tech
      </a>
    </div>
  );
};