
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle, TrendingDown, CloudRain, Building } from 'lucide-react';

const WhyHarvest = () => {
  const challenges = [
    {
      icon: TrendingDown,
      title: "Groundwater Depletion",
      description: "Bangalore's groundwater levels have dropped by 60% in the last decade, threatening long-term water security.",
      stats: "60% depletion in 10 years"
    },
    {
      icon: CloudRain,
      title: "Monsoon Waste",
      description: "90% of rainwater flows into drains during monsoons, representing a massive missed opportunity.",
      stats: "900mm annual rainfall wasted"
    },
    {
      icon: Building,
      title: "Urban Flooding",
      description: "Poor drainage and rapid urbanization lead to flooding during heavy rains, damaging property.",
      stats: "40+ flooding incidents yearly"
    },
    {
      icon: AlertTriangle,
      title: "Water Scarcity",
      description: "Growing population and limited water sources create supply shortages across the city.",
      stats: "1.3 crore people affected"
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Bangalore's Water Crisis: The Urgent Need for Action
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our city faces unprecedented water challenges. Rainwater harvesting isn't just an option - it's essential for our survival.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {challenges.map((challenge, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-red-500">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors">
                      <challenge.icon className="w-6 h-6 text-red-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{challenge.title}</h3>
                    <p className="text-gray-600 mb-3">{challenge.description}</p>
                    <div className="bg-red-50 px-3 py-1 rounded-full inline-block">
                      <span className="text-sm font-medium text-red-700">{challenge.stats}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">The Solution: Rainwater Harvesting</h3>
            <p className="text-lg mb-6">
              Turn your rooftop into a water source. Reduce dependency, save money, and help recharge our groundwater.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold">2 Lakh L</div>
                <div className="text-blue-100">Average annual collection per home</div>
              </div>
              <div>
                <div className="text-3xl font-bold">₹30,000</div>
                <div className="text-blue-100">Annual water bill savings</div>
              </div>
              <div>
                <div className="text-3xl font-bold">18 Months</div>
                <div className="text-blue-100">System payback period</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyHarvest;
