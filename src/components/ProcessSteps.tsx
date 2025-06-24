
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Droplets, Filter, Container, ArrowDown } from 'lucide-react';

const ProcessSteps = () => {
  const steps = [
    {
      icon: Droplets,
      title: "Collection",
      description: "Rainwater is collected from rooftops through gutters and downpipes",
      color: "text-blue-600"
    },
    {
      icon: Filter,
      title: "Filtration",
      description: "First flush diverter removes initial dirty water, then multi-stage filtration",
      color: "text-green-600"
    },
    {
      icon: Container,
      title: "Storage",
      description: "Clean water is stored in tanks or directed to recharge pits",
      color: "text-orange-600"
    },
    {
      icon: ArrowDown,
      title: "Recharge",
      description: "Water replenishes groundwater or is used for household purposes",
      color: "text-purple-600"
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            How Rainwater Harvesting Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A simple 4-step process to turn your rooftop into a water conservation system
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="relative group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className={`w-8 h-8 ${step.color}`} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
                <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center">
                  {index + 1}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessSteps;
