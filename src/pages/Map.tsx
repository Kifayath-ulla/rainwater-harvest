
import Navbar from '@/components/Navbar';
import InteractiveMap from '@/components/InteractiveMap';

const Map = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <InteractiveMap />
      </div>
    </div>
  );
};

export default Map;
