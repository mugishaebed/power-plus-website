import AboutUs from "@/components/AboutUs";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import PageLoader from "@/components/PageLoader";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WhatsAppCTA from "@/components/WhatsAppCTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] selection:bg-[#00E5FF]/30">
      <PageLoader />
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <Projects />
        <WhatsAppCTA />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}