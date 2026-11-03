import React from 'react';

export const MessengerIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 2C6.477 2 2 6.145 2 11.258c0 2.91 1.455 5.512 3.736 7.18V22l3.411-1.872c.905.251 1.864.386 2.853.386 5.523 0 10-4.145 10-9.256C22 6.145 17.523 2 12 2zm1.066 12.443l-2.585-2.757-5.045 2.757 5.549-5.892 2.651 2.757 4.979-2.757-5.549 5.892z" />
  </svg>
);
