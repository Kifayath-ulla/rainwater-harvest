
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Heart, MapPin, Sparkles, Target, Zap, GraduationCap } from 'lucide-react';

const VolunteerForm = () => {
  const [isHovered, setIsHovered] = useState<number | null>(null);

  return (
    <div className="py-20 bg-gradient-to-br from-blue-50 via-green-50 to-teal-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 -left-20 w-60 h-60 bg-green-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-teal-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block p-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl mb-6 animate-bounce">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-teal-600 bg-clip-text text-transparent mb-6">
            Join the Water Revolution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            This is a personal initiative by an engineering student to raise awareness about rainwater harvesting in Bangalore. 
            Together, we can make a difference in our city's water future.
          </p>
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 max-w-2xl mx-auto border border-gray-200 shadow-lg">
            <div className="flex items-center justify-center gap-3 mb-4">
              <GraduationCap className="w-6 h-6 text-blue-600" />
              <span className="text-lg font-semibold text-gray-800">Student Initiative</span>
            </div>
            <p className="text-gray-600">
              Created by Nasir Azam, Engineering Student at <span className="font-semibold text-blue-600">Nitte Meenakshi Institute of Technology</span>
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="order-2 lg:order-1">
            <Card className="backdrop-blur-lg bg-white/80 border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
              <CardHeader className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-t-xl">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Heart className="w-7 h-7 animate-pulse" />
                  Connect & Collaborate
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-300 group-hover:border-gray-300"
                    />
                  </div>
                  <div className="group">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 group-hover:border-gray-300"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all duration-300 group-hover:border-gray-300"
                    />
                  </div>
                  <div className="group">
                    <select className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 group-hover:border-gray-300">
                      <option>Select Your Area</option>
                      <option>Koramangala</option>
                      <option>Indiranagar</option>
                      <option>JP Nagar</option>
                      <option>HSR Layout</option>
                      <option>Whitefield</option>
                      <option>Electronic City</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <select className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all duration-300">
                  <option>How would you like to contribute?</option>
                  <option>🏘️ Community Outreach</option>
                  <option>🔧 Technical Support</option>
                  <option>🎉 Event Organization</option>
                  <option>📝 Content Creation</option>
                  <option>📊 Data Collection</option>
                  <option>🎨 Design & Media</option>
                  <option>🎓 Student Collaboration</option>
                </select>
                <textarea
                  placeholder="Share your ideas or how you'd like to help spread awareness about rainwater harvesting..."
                  rows={4}
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-100 transition-all duration-300 resize-none"
                />
                <Button className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <Zap className="w-5 h-5 mr-2" />
                  Let's Collaborate
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            {[
              {
                icon: Users,
                title: "Student Network",
                description: "Connect with fellow students and young professionals who are passionate about environmental conservation and water sustainability.",
                color: "from-blue-500 to-cyan-500",
                delay: "0s"
              },
              {
                icon: Target,
                title: "Awareness Campaigns",
                description: "Help create and spread educational content about rainwater harvesting through social media, blogs, and community presentations.",
                color: "from-green-500 to-emerald-500",
                delay: "0.2s"
              },
              {
                icon: Sparkles,
                title: "Research & Innovation",
                description: "Contribute to research projects, case studies, and innovative solutions for making rainwater harvesting more accessible in Bangalore.",
                color: "from-purple-500 to-pink-500",
                delay: "0.4s"
              }
            ].map((item, index) => (
              <Card 
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer border-0 overflow-hidden"
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
                style={{ animationDelay: item.delay }}
              >
                <CardContent className="p-8 relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  <div className="flex items-start gap-6 relative z-10">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${item.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-gray-800 group-hover:to-gray-600 transition-all duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerForm;
