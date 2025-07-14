import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Youtube, MessageCircle } from "lucide-react";
import type { InsertContact } from "@shared/schema";

export default function Contact() {
  const [contactData, setContactData] = useState<InsertContact>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest('POST', '/api/contacts', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message! We will get back to you soon.",
      });
      queryClient.invalidateQueries({ queryKey: ['/api/contacts'] });
      setContactData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactData.name || !contactData.email || !contactData.subject || !contactData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send a message.",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(contactData);
  };

  const handleInputChange = (field: keyof InsertContact, value: string) => {
    setContactData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 98765 43210", "+91 87654 32109"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@sanchithamakeovers.com", "booking@sanchithamakeovers.com"]
    },
    {
      icon: MapPin,
      title: "Studio Address",
      details: ["123, Beauty Plaza", "MG Road, Bangalore", "Karnataka 560001"]
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sunday: By Appointment"]
    }
  ];

  return (
    <section 
      id="contact" 
      className="py-20 text-white"
      style={{ background: 'linear-gradient(to bottom right, var(--purple-deep), var(--purple-primary))' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold mb-4">
            Get In Touch
          </h2>
          <p 
            className="text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--purple-light)' }}
          >
            Have questions or want to learn more about our services? We'd love to hear from you
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <IconComponent size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                    {info.details.map((detail, detailIndex) => (
                      <p 
                        key={detailIndex} 
                        className="text-sm"
                        style={{ color: 'var(--purple-light)' }}
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <h3 className="font-playfair text-2xl font-semibold mb-6">Quick Contact</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    type="text"
                    placeholder="Your Name"
                    value={contactData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="bg-white/20 border-white/30 placeholder-white/70 text-white focus:ring-white/50"
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={contactData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="bg-white/20 border-white/30 placeholder-white/70 text-white focus:ring-white/50"
                  />
                </div>
                <Input
                  type="text"
                  placeholder="Subject"
                  value={contactData.subject}
                  onChange={(e) => handleInputChange('subject', e.target.value)}
                  className="bg-white/20 border-white/30 placeholder-white/70 text-white focus:ring-white/50"
                />
                <Textarea
                  rows={4}
                  placeholder="Your Message"
                  value={contactData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="bg-white/20 border-white/30 placeholder-white/70 text-white focus:ring-white/50"
                />
                <Button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="bg-white text-purple-primary px-8 py-3 rounded-full hover:bg-purple-light hover:text-purple-deep transition duration-300 font-medium"
                >
                  {contactMutation.isPending ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-16 text-center">
          <h3 className="font-playfair text-2xl font-semibold mb-6">Follow Us</h3>
          <div className="flex justify-center space-x-6">
            {[
              { icon: Instagram, href: "#" },
              { icon: Facebook, href: "#" },
              { icon: Youtube, href: "#" },
              { icon: MessageCircle, href: "#" }
            ].map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition duration-300"
                >
                  <IconComponent size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
