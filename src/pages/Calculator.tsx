
import Navbar from '@/components/Navbar';
import RainwaterCalculator from '@/components/RainwaterCalculator';

const Calculator = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <RainwaterCalculator />
      </div>
    </div>
  );
};

export default Calculator;
