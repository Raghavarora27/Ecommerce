import React from 'react';
import { MapPin } from 'lucide-react';
import { LocationData } from '../types';

interface RevenueByLocationProps {
  data: LocationData[];
}

const RevenueByLocation: React.FC<RevenueByLocationProps> = ({ data }) => {
  return (
    <div className="chart-container">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue by Location</h3>
      
      {/* World Map Placeholder */}
      <div className="h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
        <div className="text-center text-gray-500">
          <MapPin className="w-12 h-12 mx-auto mb-2" />
          <p className="text-sm">World Map</p>
          <p className="text-xs">Interactive map would be here</p>
        </div>
      </div>

      {/* Location List */}
      <div className="space-y-3">
        {data.map((location, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">{location.city}</span>
            </div>
            <span className="text-sm font-semibold text-gray-900">{location.revenue}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RevenueByLocation;
