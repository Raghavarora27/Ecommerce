import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MetricCard from './components/MetricCard';
import BarChart from './components/Charts/BarChart';
import LineChart from './components/Charts/LineChart';
import DoughnutChart from './components/Charts/DoughnutChart';
import RevenueByLocation from './components/RevenueByLocation';
import ProductTable from './components/ProductTable';
import NotificationPanel from './components/NotificationPanel';
import {
  metricCards,
  projectionsVsActualsData,
  revenueData,
  revenueByLocation,
  topProducts,
  salesChannels,
  notifications,
  activities,
  contacts
} from './data/mockData';

function App() {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNotificationToggle = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  const handleSidebarToggle = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Sidebar - Hidden on mobile, collapsible on tablet */}
      <div className={`${isSidebarCollapsed ? 'hidden' : 'block'} lg:block ${isMobileMenuOpen ? 'block' : 'hidden lg:block'}`}>
        <Sidebar isCollapsed={isSidebarCollapsed} onToggle={handleSidebarToggle} />
      </div>
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header 
          title="eCommerce" 
          breadcrumbs={['Dashboards', 'Default']}
          onNotificationClick={handleNotificationToggle}
          onMobileMenuClick={handleMobileMenuToggle}
        />
        
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-3 sm:p-6">
          <div className="max-w-7xl mx-auto">
            {/* Page Title */}
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">eCommerce</h1>
            
            {/* Metric Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {metricCards.map((metric, index) => (
                <MetricCard key={index} metric={metric} />
              ))}
            </div>
            
            {/* Charts Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {/* Projections vs Actuals */}
              <BarChart 
                data={projectionsVsActualsData} 
                title="Projections vs Actuals" 
              />
              
              {/* Revenue Chart */}
              <LineChart 
                data={revenueData} 
                title="Revenue" 
              />
            </div>
            
            {/* Bottom Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
              {/* Revenue by Location */}
              <RevenueByLocation data={revenueByLocation} />
              
              {/* Top Selling Products */}
              <div className="xl:col-span-2">
                <ProductTable products={topProducts} />
              </div>
            </div>
            
            {/* Total Sales Chart */}
            <div className="mt-4 sm:mt-6">
              <DoughnutChart data={salesChannels} title="Total Sales" />
            </div>
          </div>
        </main>
      </div>
      
      {/* Notification Panel */}
      <NotificationPanel
        isOpen={isNotificationOpen}
        onClose={() => setIsNotificationOpen(false)}
        notifications={notifications}
        activities={activities}
        contacts={contacts}
      />
    </div>
  );
}

export default App;
