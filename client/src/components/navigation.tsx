import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About Us" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="font-playfair text-2xl font-bold" style={{ color: 'var(--purple-primary)' }}>
              Sanchitha Makeovers
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`font-medium transition duration-300 ${
                    link.href === "#home"
                      ? "border-b-2"
                      : "text-gray-700 hover:text-[hsl(286,39%,49%)]"
                  }`}
                  style={link.href === "#home" ? { 
                    color: 'var(--purple-primary)', 
                    borderColor: 'var(--purple-primary)' 
                  } : {}}
                >
                  {link.label}
                </a>
              ))}
              <Button 
                className="rounded-full transition duration-300"
                style={{ 
                  backgroundColor: 'var(--purple-primary)',
                  borderColor: 'var(--purple-primary)'
                }}
                onClick={() => document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book Now
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{ color: 'var(--purple-primary)' }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-gray-700 hover:text-[hsl(286,39%,49%)] transition duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button 
                className="w-full mt-2 rounded-full"
                style={{ backgroundColor: 'var(--purple-primary)' }}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
