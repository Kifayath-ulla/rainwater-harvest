
import Navbar from '@/components/Navbar';
import VolunteerForm from '@/components/VolunteerForm';
import NGOPartners from '@/components/NGOPartners';
import Footer from '@/components/Footer';

const GetInvolved = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <VolunteerForm />
        <NGOPartners />
      </div>
      <Footer />
    </div>
  );
};

export default GetInvolved;
