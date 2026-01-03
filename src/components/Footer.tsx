
import React from 'react';
import { Droplets, Mail, Github, Linkedin, GraduationCap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Droplets className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold">RainHarvest BLR</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Every Drop Counts – Let's Reclaim Our Rain. A student initiative for building a water-secure future for Bangalore.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <GraduationCap className="w-4 h-4" />
              <span>Student Initiative Project</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/how-it-works" className="hover:text-blue-400 transition-colors">How It Works</a></li>
              <li><a href="/calculator" className="hover:text-blue-400 transition-colors">Calculator</a></li>
              <li><a href="/map" className="hover:text-blue-400 transition-colors">Project Map</a></li>
              <li><a href="/get-involved" className="hover:text-blue-400 transition-colors">Get Involved</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p>📍 Bangalore, Karnataka</p>
              <p>📧 <a href="mailto:kifayathulla5884@gmail.com" className="hover:text-blue-400 transition-colors">kifayathulla5884@gmail.com</a></p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400 mb-2">
                Built with ❤️ for a sustainable Bangalore
              </p>
              <p className="text-sm text-gray-500">
                Created by <span className="text-blue-400 font-semibold">Kifayath ULla</span> - Engineering Student
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a href="mailto:kifayathulla5884@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
