import React from 'react';
import { Search, Grid3X3, Sun, History, Bell, User, Menu } from 'lucide-react';

interface HeaderProps {
  title: string;
  breadcrumbs: string[];
  onNotificationClick?: () => void;
  onMobileMenuClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, breadcrumbs, onNotificationClick, onMobileMenuClick }) => {
  console.log(title)
  return (
    <header className="bg-white border-b border-gray-200 px-3 sm:px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left side - Mobile Menu, Logo and Breadcrumbs */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Mobile Menu Button */}
          <button
            onClick={onMobileMenuClick}
            className="lg:hidden p-2 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Open mobile menu"
          >
            <Menu className="w-5 h-5" />
          </button>
          
          <h1 className="text-lg sm:text-2xl font-bold text-gray-900">ByeWind</h1>
          <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-500">
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                <span>{crumb}</span>
                {index < breadcrumbs.length - 1 && (
                  <span className="text-gray-300">/</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Right side - Search and Controls */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Search Bar - Hidden on mobile */}
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent w-48 lg:w-64"
            />
          </div>

          {/* Control Icons */}
          <div className="flex items-center space-x-1 sm:space-x-3">
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors hidden sm:block">
              <Grid3X3 className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors hidden sm:block">
              <Sun className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors hidden sm:block">
              <History className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button 
              onClick={onNotificationClick}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors relative"
              aria-label="Open notifications"
            >
              <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></span>
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <User className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
