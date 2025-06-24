
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Calculator, Download, Droplets, IndianRupee } from 'lucide-react';

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
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Rainwater Harvesting Calculator
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how much water you can harvest and money you can save
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-5 h-5" />
                Enter Your Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="roofArea">Roof Area (sq. meters)</Label>
                <Input
                  id="roofArea"
                  type="number"
                  placeholder="e.g., 150"
                  value={inputs.roofArea}
                  onChange={(e) => setInputs({...inputs, roofArea: e.target.value})}
                />
              </div>

              <div>
                <Label htmlFor="rainfall">Annual Rainfall (mm)</Label>
                <Input
                  id="rainfall"
                  type="number"
                  value={inputs.rainfall}
                  onChange={(e) => setInputs({...inputs, rainfall: e.target.value})}
                />
                <p className="text-sm text-gray-500 mt-1">Bangalore average: 970mm</p>
              </div>

              <div>
                <Label htmlFor="users">Number of Users</Label>
                <Input
                  id="users"
                  type="number"
                  placeholder="e.g., 4"
                  value={inputs.users}
                  onChange={(e) => setInputs({...inputs, users: e.target.value})}
                />
              </div>

              <div>
                <Label htmlFor="waterCost">Water Cost (₹ per 1000L)</Label>
                <Input
                  id="waterCost"
                  type="number"
                  value={inputs.waterCost}
                  onChange={(e) => setInputs({...inputs, waterCost: e.target.value})}
                />
              </div>

              <Button onClick={calculateHarvest} className="w-full">
                Calculate Water Harvest
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Droplets className="w-5 h-5" />
                Your Water Harvest Potential
              </CardTitle>
            </CardHeader>
            <CardContent>
              {results ? (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">
                        {results.litresPerYear.toLocaleString()}L
                      </div>
                      <div className="text-sm text-gray-600">Per Year</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">
                        ₹{results.costSavings.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-600">Annual Savings</div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Daily Water Harvest:</span>
                      <span className="font-medium">{results.dailyLitres}L</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Per Person Daily:</span>
                      <span className="font-medium">{results.perPersonLitres}L</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Cubic Meters:</span>
                      <span className="font-medium">{results.harvestableWater}m³</span>
                    </div>
                  </div>

                  <Button onClick={downloadReport} variant="outline" className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Download Detailed Report
                  </Button>
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <Calculator className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Enter your details to see results</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RainwaterCalculator;
