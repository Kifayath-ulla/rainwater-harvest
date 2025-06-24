
import Navbar from '@/components/Navbar';
import VolunteerForm from '@/components/VolunteerForm';
import NGOPartners from '@/components/NGOPartners';

const GetInvolved = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <VolunteerForm />
        <NGOPartners />
      </div>
    </div>
  );
};

export default GetInvolved;
