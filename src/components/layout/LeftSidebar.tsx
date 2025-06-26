import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
  Home,
  ShoppingCart,
  Package,
  Users,
  Package2,
} from 'lucide-react';

const LeftSidebar: React.FC = () => {
  console.log('LeftSidebar loaded');

  const navItems = [
    { to: '/', icon: Home, label: 'Dashboard' },
    { to: '/orders', icon: ShoppingCart, label: 'Orders' },
    { to: '/products', icon: Package, label: 'Products' },
    { to: '/customers', icon: Users, label: 'Customers' },
  ];

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${
      isActive
        ? 'bg-muted text-primary'
        : 'text-muted-foreground'
    }`;

  return (
    <aside className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-16 items-center border-b px-6">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <Package2 className="h-6 w-6" />
            <span>ShopView</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={getNavLinkClass}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default LeftSidebar;