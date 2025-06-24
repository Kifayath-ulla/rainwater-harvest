
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

const NGOPartners = () => {
  const partners = [
    {
      name: "Rainwater Club",
      description: "Leading rainwater harvesting advocacy group in Bangalore",
      website: "#",
      logo: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200&h=100&fit=crop"
    },
    {
      name: "BBMP Water Division",
      description: "Government partner for policy implementation",
      website: "#",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop"
    },
    {
      name: "Biome Environmental",
      description: "Technical expertise and sustainable solutions",
      website: "#",
      logo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=100&fit=crop"
    },
    {
      name: "Water Literacy Foundation",
      description: "Community education and awareness programs",
      website: "#",
      logo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=100&fit=crop"
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Partners & Collaborators
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Working together with leading organizations to create a water-secure Bangalore
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="aspect-video mb-4 overflow-hidden rounded-lg">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{partner.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{partner.description}</p>
                <a
                  href={partner.website}
                  className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  Visit Website <ExternalLink className="w-3 h-3" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NGOPartners;
