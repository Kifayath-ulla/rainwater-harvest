
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, GraduationCap, MessageCircle, Clock } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">About This Initiative</h3>
            <p className="text-lg text-gray-600">
              This website is a personal project created to raise awareness about rainwater harvesting in Bangalore
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <GraduationCap className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Student Initiative</h4>
                      <p className="text-gray-600 mb-2">
                        <strong>Nasir Azam</strong><br />
                        Engineering Student<br />
                        Nitte Meenakshi Institute of Technology<br />
                        Bangalore, Karnataka
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Email Contact</h4>
                      <p className="text-gray-600">
                        <a href="mailto:nasirazam044@gmail.com" className="text-blue-600 hover:text-blue-800 transition-colors">
                          nasirazam044@gmail.com
                        </a>
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Feel free to reach out for collaboration, questions, or discussions about rainwater harvesting
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <MessageCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Project Goals</h4>
                      <ul className="text-gray-600 space-y-1 text-sm">
                        <li>• Raise awareness about water conservation</li>
                        <li>• Educate about rainwater harvesting benefits</li>
                        <li>• Connect like-minded individuals</li>
                        <li>• Promote sustainable practices in Bangalore</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Response Time</h4>
                      <p className="text-gray-600 text-sm">
                        I typically respond to emails within 24-48 hours.<br />
                        Please be patient as I balance this initiative with my studies.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-6">Why This Matters</h3>
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="space-y-4 text-gray-600">
                    <p>
                      As an engineering student in Bangalore, I've witnessed firsthand the water challenges our city faces. 
                      This website is my contribution to raising awareness about rainwater harvesting as a sustainable solution.
                    </p>
                    <p>
                      Every year, Bangalore receives adequate rainfall, but most of it goes to waste due to lack of proper 
                      harvesting systems. Through this initiative, I hope to:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span>Educate citizens about simple rainwater harvesting techniques</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">•</span>
                        <span>Show the economic and environmental benefits</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600">•</span>
                        <span>Build a community of water-conscious individuals</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600">•</span>
                        <span>Inspire action for a water-secure Bangalore</span>
                      </li>
                    </ul>
                    <p className="pt-4 border-t border-gray-200 text-sm">
                      <strong>Join me in this mission!</strong> Together, we can make Bangalore a model city for water conservation.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
