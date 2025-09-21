export interface MetricCard {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative';
  highlight?: boolean;
  highlightedText?: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  icon: string;
  active?: boolean;
  children?: NavigationItem[];
}

export interface Notification {
  id: string;
  title: string;
  time: string;
  icon: string;
}

export interface Activity {
  id: string;
  title: string;
  time: string;
  icon: string;
}

export interface Contact {
  id: string;
  name: string;
  avatar: string;
}

export interface Product {
  name: string;
  price: string;
  quantity: number;
  amount: string;
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor?: string;
    backgroundColor?: string;
    fill?: boolean;
    tension?: number;
    borderWidth?: any;
    borderDash?: any;
  }[];
}

export interface LocationData {
  city: string;
  revenue: string;
}

export interface SalesChannel {
  name: string;
  value: string;
  color: string;
  percentage: string;
}
