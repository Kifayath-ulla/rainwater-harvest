
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Heart, MapPin } from 'lucide-react';

const VolunteerForm = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Join the Water Conservation Movement
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Be part of the solution. Help us spread awareness and implement rainwater harvesting across Bangalore.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-6 h-6 text-red-500" />
                  Volunteer Registration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option>Select Area</option>
                    <option>Koramangala</option>
                    <option>Indiranagar</option>
                    <option>JP Nagar</option>
                    <option>HSR Layout</option>
                    <option>Other</option>
                  </select>
                </div>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option>How would you like to help?</option>
                  <option>Community Outreach</option>
                  <option>Technical Support</option>
                  <option>Event Organization</option>
                  <option>Content Creation</option>
                </select>
                <textarea
                  placeholder="Tell us about your experience or interests"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Join as Volunteer
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Users className="w-8 h-8 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Community Outreach</h3>
                    <p className="text-gray-600">Help spread awareness in your neighborhood. Organize workshops and information sessions.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-8 h-8 text-green-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Site Visits</h3>
                    <p className="text-gray-600">Assist with site assessments and help families understand their rainwater harvesting potential.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Heart className="w-8 h-8 text-red-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Impact Tracking</h3>
                    <p className="text-gray-600">Help us measure and document the positive environmental impact of our initiatives.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerForm;
