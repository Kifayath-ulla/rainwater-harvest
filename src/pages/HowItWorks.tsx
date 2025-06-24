
import Navbar from '@/components/Navbar';
import VideoSection from '@/components/VideoSection';
import ProcessSteps from '@/components/ProcessSteps';

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <VideoSection />
        <ProcessSteps />
      </div>
    </div>
  );
};

export default HowItWorks;
