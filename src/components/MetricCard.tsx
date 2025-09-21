import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { MetricCard as MetricCardType } from '../types';

interface MetricCardProps {
  metric: MetricCardType;
}

const MetricCard: React.FC<MetricCardProps> = ({ metric }) => {
  return (
    <div className={`metric-card ${metric.highlight ? 'bg-pink-50 border-pink-200' : ''}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-600">{metric.title}</h3>
        {metric.changeType === 'positive' ? (
          <TrendingUp className="w-4 h-4 text-green-500" />
        ) : (
          <TrendingDown className="w-4 h-4 text-red-500" />
        )}
      </div>
      
      <div className="space-y-2">
        {metric.highlightedText && (
          <p className="text-sm font-medium text-yellow-600 bg-yellow-100 px-2 py-1 rounded">
            {metric.highlightedText}
          </p>
        )}
        
        <div className="flex items-baseline space-x-2">
          <span className="text-2xl font-bold text-gray-900">{metric.value}</span>
          <span className={`text-sm font-medium ${
            metric.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
          }`}>
            {metric.change}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MetricCard;
