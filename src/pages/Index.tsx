
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import QuickStats from '@/components/QuickStats';
import WhyHarvest from '@/components/WhyHarvest';
import ProcessSteps from '@/components/ProcessSteps';
import TestimonialSlider from '@/components/TestimonialSlider';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <QuickStats />
      <WhyHarvest />
      <ProcessSteps />
      <TestimonialSlider />
      
      {/* Call to Action Section */}
      <div className="py-16 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Water Conservation Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of Bangalore residents who are already saving water and money with rainwater harvesting
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              <ArrowRight className="w-5 h-5 mr-2" />
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              <Phone className="w-5 h-5 mr-2" />
              Talk to Expert
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
