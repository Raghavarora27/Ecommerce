import React from 'react';
import { 
  Home, 
  Folder, 
  BarChart3, 
  Layout, 
  ShoppingCart, 
  BookOpen, 
  User, 
  Settings, 
  Building, 
  FileText, 
  Users 
} from 'lucide-react';
import { NavigationItem } from '../types';

interface SidebarProps {
  isCollapsed?: boolean;
  onToggle?: () => void;
}

const iconMap = {
  Home,
  Folder,
  BarChart3,
  Layout,
  ShoppingCart,
  BookOpen,
  User,
  Settings,
  Building,
  FileText,
  Users
};

const navigationItems: NavigationItem[] = [
  { id: 'overview', label: 'Overview', icon: 'Home' },
  { id: 'projects', label: 'Projects', icon: 'Folder' },
  { id: 'dashboards', label: 'Dashboards', icon: 'BarChart3' },
  { id: 'default', label: 'Default', icon: 'Layout', active: true },
  { id: 'ecommerce', label: 'eCommerce', icon: 'ShoppingCart', active: true },
  { id: 'projects-dash', label: 'Projects', icon: 'Folder' },
  { id: 'courses', label: 'Online Courses', icon: 'BookOpen' },
  { id: 'user-profile', label: 'User Profile', icon: 'User' },
  { id: 'account', label: 'Account', icon: 'Settings' },
  { id: 'corporate', label: 'Corporate', icon: 'Building' },
  { id: 'blog', label: 'Blog', icon: 'FileText' },
  { id: 'social', label: 'Social', icon: 'Users' }
];

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed = false }) => {
  return (
    <div className={`bg-white border-r border-gray-200 h-screen transition-all duration-300 ${
      isCollapsed ? 'w-16' : 'w-64'
    }`}>
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <h1 className={`font-bold text-xl text-gray-900 ${isCollapsed ? 'text-center' : ''}`}>
          {isCollapsed ? 'BW' : 'ByeWind'}
        </h1>
      </div>

      {/* Navigation */}
      <nav className="mt-6">
        {/* Favorites & Recent */}
        <div className="px-6 mb-6">
          <div className="flex space-x-4 text-sm">
            <button className="text-gray-500 hover:text-gray-700 font-medium">Favorites</button>
            <button className="text-gray-500 hover:text-gray-700 font-medium">Recent</button>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="space-y-1" role="navigation" aria-label="Main navigation">
          {navigationItems.map((item) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap];
            return (
              <button
                key={item.id}
                className={`w-full sidebar-item ${item.active ? 'active' : ''}`}
                aria-label={item.label}
                aria-current={item.active ? 'page' : undefined}
                role="menuitem"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    // Handle navigation logic here
                  }
                }}
              >
                <IconComponent className="w-5 h-5 mr-3" aria-hidden="true" />
                {!isCollapsed && (
                  <span className="text-sm font-medium">{item.label}</span>
                )}
              </button>
            );
          })}
        </nav>
      </nav>
    </div>
  );
};

export default Sidebar;
