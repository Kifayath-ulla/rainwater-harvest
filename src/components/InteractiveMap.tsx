
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Home, School, Building, Building2 } from 'lucide-react';

const InteractiveMap = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects', icon: MapPin },
    { id: 'home', label: 'Homes', icon: Home },
    { id: 'school', label: 'Schools', icon: School },
    { id: 'apartment', label: 'Apartments', icon: Building },
    { id: 'government', label: 'Government', icon: Building2 }
  ];

  const projects = [
    {
      id: 1,
      name: "Koramangala Residential Complex",
      type: "apartment",
      capacity: "2,00,000L/year",
      location: "Koramangala 5th Block",
      status: "Active",
      savings: "₹45,000/year"
    },
    {
      id: 2,
      name: "Bangalore International School",
      type: "school",
      capacity: "5,00,000L/year",
      location: "Hennur Road",
      status: "Active",
      savings: "₹1,20,000/year"
    },
    {
      id: 3,
      name: "BBMP Ward Office",
      type: "government",
      capacity: "1,50,000L/year",
      location: "Indiranagar",
      status: "Active",
      savings: "₹35,000/year"
    },
    {
      id: 4,
      name: "Independent Villa",
      type: "home",
      capacity: "75,000L/year",
      location: "JP Nagar",
      status: "Planning",
      savings: "₹18,000/year"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Rainwater Harvesting Projects Across Bangalore
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover successful implementations and join the growing network of water-conscious citizens
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
              className="flex items-center gap-2"
            >
              <filter.icon className="w-4 h-4" />
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Map Placeholder */}
        <div className="mb-8">
          <Card className="h-96 bg-gradient-to-br from-blue-100 to-green-100">
            <CardContent className="h-full flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Interactive Map Coming Soon</h3>
                <p className="text-gray-600">
                  Explore real-time locations of rainwater harvesting projects across Bangalore
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg">{project.name}</CardTitle>
                  <Badge variant={project.status === 'Active' ? 'default' : 'secondary'}>
                    {project.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{project.location}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Capacity:</span>
                      <br />
                      <span className="text-blue-600">{project.capacity}</span>
                    </div>
                    <div>
                      <span className="font-medium">Savings:</span>
                      <br />
                      <span className="text-green-600">{project.savings}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;
