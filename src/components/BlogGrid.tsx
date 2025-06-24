
import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, ArrowRight, Filter } from 'lucide-react';

const BlogGrid = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Articles' },
    { id: 'diy', label: 'DIY Guides' },
    { id: 'policy', label: 'Government Schemes' },
    { id: 'stories', label: 'Success Stories' },
    { id: 'technical', label: 'Technical' }
  ];

  const articles = [
    {
      id: 1,
      title: "Complete DIY Guide: Installing Rainwater Harvesting at Home",
      excerpt: "Step-by-step instructions for setting up your own rainwater harvesting system with minimal budget.",
      category: "diy",
      date: "2024-01-15",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=200&fit=crop"
    },
    {
      id: 2,
      title: "Karnataka Government's New RWH Subsidies for 2024",
      excerpt: "Learn about the latest government incentives and how to apply for rainwater harvesting subsidies.",
      category: "policy",
      date: "2024-01-10",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=200&fit=crop"
    },
    {
      id: 3,
      title: "How One Bangalore Apartment Saves 5 Lakh Litres Annually",
      excerpt: "A detailed case study of successful rainwater harvesting implementation in a 100-unit complex.",
      category: "stories",
      date: "2024-01-05",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=200&fit=crop"
    },
    {
      id: 4,
      title: "Understanding Filtration Systems for Harvested Rainwater",
      excerpt: "Technical deep-dive into different filtration options and their effectiveness for various use cases.",
      category: "technical",
      date: "2023-12-28",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=200&fit=crop"
    }
  ];

  const filteredArticles = activeFilter === 'all' 
    ? articles 
    : articles.filter(article => article.category === activeFilter);

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Learn & Explore
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expert guides, success stories, and the latest updates on rainwater harvesting
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? "default" : "outline"}
              onClick={() => setActiveFilter(category.id)}
              className="flex items-center gap-2"
            >
              <Filter className="w-4 h-4" />
              {category.label}
            </Button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <Card key={article.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">{categories.find(c => c.id === article.category)?.label}</Badge>
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(article.date).toLocaleDateString()}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{article.readTime}</span>
                  <Button variant="ghost" size="sm" className="group-hover:text-blue-600">
                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View All Articles
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogGrid;
