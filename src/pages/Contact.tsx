
import Navbar from '@/components/Navbar';
import ContactForm from '@/components/ContactForm';
import ContactInfo from '@/components/ContactInfo';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  );
};

export default Contact;
