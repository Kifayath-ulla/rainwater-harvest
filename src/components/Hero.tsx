
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-green-700 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-white rounded-full animate-ping"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-green-300 rounded-full animate-bounce"></div>
      </div>

      <div className="relative container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Every Drop Counts
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-green-300">
              Let's Reclaim Our Rain
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Join Bangalore's water revolution. Harvest rainwater, save money, and secure our city's future - one rooftop at a time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/learn">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                <ArrowRight className="w-5 h-5 mr-2" />
                Learn More
              </Button>
            </Link>
            <Link to="/get-involved">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                <Droplets className="w-5 h-5 mr-2" />
                Get Involved
              </Button>
            </Link>
          </div>

          {/* Crisis Stats */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-3xl font-bold text-blue-300">60%</h3>
              <p className="text-blue-100">Groundwater Depletion</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-3xl font-bold text-green-300">1.3 Cr</h3>
              <p className="text-blue-100">Population Dependent</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-3xl font-bold text-yellow-300">900mm</h3>
              <p className="text-blue-100">Annual Rainfall Wasted</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
