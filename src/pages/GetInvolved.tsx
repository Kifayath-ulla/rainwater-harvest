
import Navbar from '@/components/Navbar';
import VolunteerForm from '@/components/VolunteerForm';
import Footer from '@/components/Footer';

const GetInvolved = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <VolunteerForm />
      </div>
      <Footer />
    </div>
  );
};

export default GetInvolved;
