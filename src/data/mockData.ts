import { MetricCard, NavigationItem, Notification, Activity, Contact, Product, ChartData, LocationData, SalesChannel } from '../types';

export const metricCards: MetricCard[] = [
  {
    title: 'Customers',
    value: '3,781',
    change: '+11.01%',
    changeType: 'positive',
    highlightedText: 'Astha Singh Rana'
  },
  {
    title: 'Orders',
    value: '1,219',
    change: '-0.03%',
    changeType: 'negative'
  },
  {
    title: 'Revenue',
    value: '$695',
    change: '+15.03%',
    changeType: 'positive'
  },
  {
    title: 'Growth',
    value: '30.1%',
    change: '+6.08%',
    changeType: 'positive',
    highlight: true
  }
];

export const navigationItems: NavigationItem[] = [
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

export const notifications: Notification[] = [
  { id: '1', title: 'You have a bug that needs...', time: 'Just now', icon: 'Bug' },
  { id: '2', title: 'New user registered', time: '59 minutes ago', icon: 'UserPlus' },
  { id: '3', title: 'You have a bug that needs...', time: '12 hours ago', icon: 'Bug' },
  { id: '4', title: 'Andi Lane subscribed to you', time: 'Today, 11:59 AM', icon: 'Speaker' }
];

export const activities: Activity[] = [
  { id: '1', title: 'You have a bug that needs...', time: 'Just now', icon: 'User' },
  { id: '2', title: 'Released a new version', time: '59 minutes ago', icon: 'User' },
  { id: '3', title: 'Submitted a bug', time: '12 hours ago', icon: 'User' },
  { id: '4', title: 'Modified A data in Page X', time: 'Today, 11:59 AM', icon: 'User' },
  { id: '5', title: 'Deleted a page in Project X', time: 'Feb 2, 2023', icon: 'User' }
];

export const contacts: Contact[] = [
  { id: '1', name: 'Natali Craig', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face' },
  { id: '2', name: 'Drew Cano', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face' },
  { id: '3', name: 'Orlando Diggs', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face' },
  { id: '4', name: 'Andi Lane', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face' },
  { id: '5', name: 'Kate Morrison', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face' },
  { id: '6', name: 'Koray Okumus', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face' }
];

export const topProducts: Product[] = [
  { name: 'ASOS Ridley High Waist', price: '$79.49', quantity: 82, amount: '$6,518.18' },
  { name: 'Marco Lightweight Shirt', price: '$128.50', quantity: 37, amount: '$4,754.50' },
  { name: 'Half Sleeve Shirt', price: '$39.99', quantity: 64, amount: '$2,559.36' },
  { name: 'Lightweight Jacket', price: '$20.00', quantity: 184, amount: '$3,680.00' },
  { name: 'Marco Shoes', price: '$79.49', quantity: 64, amount: '$1,965.81' }
];

export const projectionsVsActualsData: ChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Projections vs Actuals',
      data: [12, 19, 8, 25, 18, 22],
      backgroundColor: '#8B5CF6',
      borderColor: '#8B5CF6',
      borderWidth: 0
    }
  ]
};

export const revenueData: ChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Current Week',
      data: [15, 12, 8, 18, 22, 20],
      borderColor: '#1F2937',
      backgroundColor: 'transparent',
      fill: false,
      tension: 0.4
    },
    {
      label: 'Previous Week',
      data: [18, 15, 12, 16, 20, 18],
      borderColor: '#60A5FA',
      backgroundColor: 'transparent',
      fill: false,
      tension: 0.4,
      borderDash: [5, 5]
    }
  ]
};

export const revenueByLocation: LocationData[] = [
  { city: 'San Francisco', revenue: '72K' },
  { city: 'Sydney', revenue: '39K' },
  { city: 'Singapore', revenue: '25K' },
  { city: 'New York', revenue: '61K' }
];

export const salesChannels: SalesChannel[] = [
  { name: 'Direct', value: '$300.56', color: '#1E40AF', percentage: '38.6%' },
  { name: 'Affiliate', value: '$135.18', color: '#60A5FA', percentage: '17.4%' },
  { name: 'Sponsored', value: '$154.02', color: '#8B5CF6', percentage: '19.8%' },
  { name: 'E-mail', value: '$48.96', color: '#10B981', percentage: '6.3%' }
];
