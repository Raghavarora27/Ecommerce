import React from 'react';
import { Product } from '../types';

interface ProductTableProps {
  products: Product[];
}

const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
  return (
    <div className="chart-container">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Selling Products</h3>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Name</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Price</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Quantity</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Amount</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 text-sm text-gray-900">{product.name}</td>
                <td className="py-3 px-4 text-sm text-gray-600">{product.price}</td>
                <td className="py-3 px-4 text-sm text-gray-600">{product.quantity}</td>
                <td className="py-3 px-4 text-sm font-semibold text-gray-900">{product.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
