
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import QuickStats from '@/components/QuickStats';
import WhyHarvest from '@/components/WhyHarvest';
import ProcessSteps from '@/components/ProcessSteps';
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

      {/* Footer with Credits */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">RainHarvest BLR</h3>
              <p className="text-gray-400">Every Drop Counts – Let's Reclaim Our Rain</p>
            </div>
            
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400 mb-2">
                Built with ❤️ for a sustainable Bangalore
              </p>
              <p className="text-sm text-gray-500">
                Designed & Developed by <span className="text-blue-400 font-semibold">Nasir Azam</span>
              </p>
              <p className="text-sm text-gray-500">
                Contact: <a href="mailto:nasirazam044@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">nasirazam044@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
