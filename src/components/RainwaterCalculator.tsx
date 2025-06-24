
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Calculator, Download, Droplets, IndianRupee, Sparkles, TrendingUp } from 'lucide-react';

const RainwaterCalculator = () => {
  const [inputs, setInputs] = useState({
    roofArea: '',
    rainfall: '970', // Bangalore average
    users: '',
    waterCost: '25'
  });

  const [results, setResults] = useState(null);

  const calculateHarvest = () => {
    const area = parseFloat(inputs.roofArea);
    const rain = parseFloat(inputs.rainfall);
    const users = parseInt(inputs.users);
    const cost = parseFloat(inputs.waterCost);

    if (!area || !rain || !users) return;

    // Calculations (simplified)
    const harvestableWater = (area * rain * 0.8) / 1000; // 80% efficiency, convert to cubic meters
    const litresPerYear = harvestableWater * 1000;
    const dailyLitres = litresPerYear / 365;
    const costSavings = (litresPerYear * cost) / 1000;
    const perPersonLitres = dailyLitres / users;

    setResults({
      harvestableWater: Math.round(harvestableWater),
      litresPerYear: Math.round(litresPerYear),
      dailyLitres: Math.round(dailyLitres),
      costSavings: Math.round(costSavings),
      perPersonLitres: Math.round(perPersonLitres)
    });
  };

  const downloadReport = () => {
    // Placeholder for PDF generation
    alert('PDF report generation coming soon!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-green-200 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-teal-200 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block p-4 bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl mb-6 animate-bounce">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-green-600 to-teal-600 bg-clip-text text-transparent mb-6">
              Smart Water Calculator
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover your rainwater harvesting potential with our intelligent calculator
            </p>
          </div>

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Input Form */}
            <div className="order-2 lg:order-1">
              <Card className="backdrop-blur-xl bg-white/90 border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-green-500/5"></div>
                <CardHeader className="relative z-10 bg-gradient-to-r from-blue-600 to-green-600 text-white">
                  <CardTitle className="flex items-center gap-3 text-3xl font-bold">
                    <Calculator className="w-8 h-8" />
                    Enter Your Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 p-10 space-y-8">
                  <div className="space-y-6">
                    <div className="group">
                      <Label htmlFor="roofArea" className="text-lg font-semibold text-gray-700 mb-3 block">
                        Roof Area (sq. meters)
                      </Label>
                      <Input
                        id="roofArea"
                        type="number"
                        placeholder="e.g., 150"
                        value={inputs.roofArea}
                        onChange={(e) => setInputs({...inputs, roofArea: e.target.value})}
                        className="h-14 text-lg border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 group-hover:border-gray-300"
                      />
                    </div>

                    <div className="group">
                      <Label htmlFor="rainfall" className="text-lg font-semibold text-gray-700 mb-3 block">
                        Annual Rainfall (mm)
                      </Label>
                      <Input
                        id="rainfall"
                        type="number"
                        value={inputs.rainfall}
                        onChange={(e) => setInputs({...inputs, rainfall: e.target.value})}
                        className="h-14 text-lg border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-300 group-hover:border-gray-300"
                      />
                      <p className="text-sm text-gray-500 mt-2 ml-1">💧 Bangalore average: 970mm</p>
                    </div>

                    <div className="group">
                      <Label htmlFor="users" className="text-lg font-semibold text-gray-700 mb-3 block">
                        Number of Users
                      </Label>
                      <Input
                        id="users"
                        type="number"
                        placeholder="e.g., 4"
                        value={inputs.users}
                        onChange={(e) => setInputs({...inputs, users: e.target.value})}
                        className="h-14 text-lg border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all duration-300 group-hover:border-gray-300"
                      />
                    </div>

                    <div className="group">
                      <Label htmlFor="waterCost" className="text-lg font-semibold text-gray-700 mb-3 block">
                        Water Cost (₹ per 1000L)
                      </Label>
                      <Input
                        id="waterCost"
                        type="number"
                        value={inputs.waterCost}
                        onChange={(e) => setInputs({...inputs, waterCost: e.target.value})}
                        className="h-14 text-lg border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 group-hover:border-gray-300"
                      />
                    </div>
                  </div>

                  <Button 
                    onClick={calculateHarvest} 
                    className="w-full h-16 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <TrendingUp className="w-6 h-6 mr-3" />
                    Calculate Water Harvest
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Results */}
            <div className="order-1 lg:order-2">
              <Card className="backdrop-blur-xl bg-white/90 border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 h-full">
                <CardHeader className="bg-gradient-to-r from-teal-600 to-blue-600 text-white">
                  <CardTitle className="flex items-center gap-3 text-3xl font-bold">
                    <Droplets className="w-8 h-8" />
                    Your Impact Potential
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-10">
                  {results ? (
                    <div className="space-y-8">
                      <div className="grid grid-cols-1 gap-6">
                        <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border-2 border-blue-200 hover:scale-105 transition-transform duration-300">
                          <div className="text-4xl font-bold text-blue-600 mb-2">
                            {results.litresPerYear.toLocaleString()}L
                          </div>
                          <div className="text-lg text-gray-600 font-medium">Water Harvested Per Year</div>
                        </div>
                        
                        <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border-2 border-green-200 hover:scale-105 transition-transform duration-300">
                          <div className="text-4xl font-bold text-green-600 mb-2">
                            ₹{results.costSavings.toLocaleString()}
                          </div>
                          <div className="text-lg text-gray-600 font-medium">Annual Savings</div>
                        </div>
                      </div>

                      <Separator className="my-8" />

                      <div className="space-y-6">
                        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                          <span className="text-lg font-medium text-gray-700">Daily Water Harvest:</span>
                          <span className="text-xl font-bold text-blue-600">{results.dailyLitres}L</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                          <span className="text-lg font-medium text-gray-700">Per Person Daily:</span>
                          <span className="text-xl font-bold text-green-600">{results.perPersonLitres}L</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                          <span className="text-lg font-medium text-gray-700">Total Cubic Meters:</span>
                          <span className="text-xl font-bold text-teal-600">{results.harvestableWater}m³</span>
                        </div>
                      </div>

                      <Button 
                        onClick={downloadReport} 
                        variant="outline" 
                        className="w-full h-14 text-lg font-semibold border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300"
                      >
                        <Download className="w-5 h-5 mr-2" />
                        Download Detailed Report
                      </Button>
                    </div>
                  ) : (
                    <div className="text-center py-20 text-gray-500">
                      <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center">
                        <Calculator className="w-12 h-12 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-semibold mb-4">Ready to Calculate</h3>
                      <p className="text-lg">Enter your details to discover your rainwater harvesting potential</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RainwaterCalculator;
