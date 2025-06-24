
import Navbar from '@/components/Navbar';
import BlogGrid from '@/components/BlogGrid';

const LearnExplore = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <BlogGrid />
      </div>
    </div>
  );
};

export default LearnExplore;
