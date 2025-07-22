import Navigation from "@/components/navigation";
import HeroCollage from "@/components/hero-collage";
import Services from "@/components/services";
import About from "@/components/about";
import Portfolio from "@/components/portfolio";
import Testimonials from "@/components/testimonials";
import BookingForm from "@/components/booking-form";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[hsl(45,33%,98%)]">
      <Navigation />
      <HeroCollage />
      <Services />
      <About />
      <Portfolio />
      <Testimonials />
      <BookingForm />
      <Contact />
      <Footer />

      <Button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 w-12 h-12 rounded-full shadow-lg transition-all duration-300 ${
          showScrollTop ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ backgroundColor: 'var(--purple-primary)' }}
      >
        <ChevronUp className="w-5 h-5" />
      </Button>
    </div>
  );
}
