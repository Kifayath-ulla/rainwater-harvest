
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Droplets, DollarSign, Leaf } from 'lucide-react';

const QuickStats = () => {
  const stats = [
    {
      icon: Droplets,
      value: "40%",
      label: "Water Bill Reduction",
      color: "text-blue-600"
    },
    {
      icon: DollarSign,
      value: "₹25,000",
      label: "Average Annual Savings",
      color: "text-green-600"
    },
    {
      icon: TrendingUp,
      value: "2 Years",
      label: "System Payback Period",
      color: "text-orange-600"
    },
    {
      icon: Leaf,
      value: "50,000L",
      label: "Average Annual Collection",
      color: "text-emerald-600"
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Bangalore Chooses Rainwater Harvesting
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real benefits experienced by thousands of Bangalore residents and businesses
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickStats;
