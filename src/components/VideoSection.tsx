
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Play } from 'lucide-react';

const VideoSection = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            See Rainwater Harvesting in Action
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Watch this comprehensive guide to understand how rainwater harvesting works and how you can implement it
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-2xl">
            <CardContent className="p-0">
              <div className="relative aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/2LtfEz2jimA"
                  title="Rainwater Harvesting Guide"
                  className="w-full h-full"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="text-center p-6">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2">
                <Play className="w-5 h-5 text-blue-600" />
                Collection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Learn how to effectively collect rainwater from your rooftop using gutters and pipes</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2">
                <Play className="w-5 h-5 text-green-600" />
                Filtration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Understand multi-stage filtration systems to ensure clean, usable water storage</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2">
                <Play className="w-5 h-5 text-orange-600" />
                Storage & Use
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Explore storage options and learn how to integrate harvested water into your home</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
