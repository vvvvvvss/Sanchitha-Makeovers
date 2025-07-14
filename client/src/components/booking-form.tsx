import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import type { InsertBooking } from "@shared/schema";

export default function BookingForm() {
  const [formData, setFormData] = useState<InsertBooking>({
    name: '',
    phone: '',
    email: '',
    weddingDate: '',
    service: '',
    venue: '',
    requirements: ''
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();

  const bookingMutation = useMutation({
    mutationFn: async (data: InsertBooking) => {
      const response = await apiRequest('POST', '/api/bookings', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Booking Request Submitted!",
        description: "We'll contact you within 24 hours to confirm your appointment.",
      });
      queryClient.invalidateQueries({ queryKey: ['/api/bookings'] });
      setFormData({
        name: '',
        phone: '',
        email: '',
        weddingDate: '',
        service: '',
        venue: '',
        requirements: ''
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit booking request. Please try again.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email || !formData.weddingDate || !formData.service) {
      toast({
        title: "Please fill in required fields",
        description: "Name, phone, email, wedding date, and service are required.",
        variant: "destructive",
      });
      return;
    }
    bookingMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof InsertBooking, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="book" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="font-playfair text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: 'var(--purple-primary)' }}
          >
            Book Your Consultation
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to transform your special day? Book a consultation with our expert team to discuss your dream bridal look
          </p>
        </div>

        <div 
          className="p-8 lg:p-12 rounded-2xl shadow-xl"
          style={{ background: 'linear-gradient(to bottom right, var(--purple-light), white)' }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="wedding-date">Wedding Date *</Label>
                <Input
                  id="wedding-date"
                  type="date"
                  value={formData.weddingDate}
                  onChange={(e) => handleInputChange('weddingDate', e.target.value)}
                  required
                  className="mt-2"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="service">Service Required *</Label>
              <Select onValueChange={(value) => handleInputChange('service', value)} value={formData.service}>
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="makeup">Make-up Only (₹15,000)</SelectItem>
                  <SelectItem value="hairstyles">Hairstyles Only (₹8,000)</SelectItem>
                  <SelectItem value="saree-draping">Saree Draping Only (₹5,000)</SelectItem>
                  <SelectItem value="complete-package">Complete Package (₹25,000)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="venue">Venue/Location</Label>
              <Input
                id="venue"
                type="text"
                placeholder="Wedding venue or home address"
                value={formData.venue}
                onChange={(e) => handleInputChange('venue', e.target.value)}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="requirements">Additional Requirements</Label>
              <Textarea
                id="requirements"
                rows={4}
                placeholder="Please describe any specific requirements, preferred styles, or questions you have..."
                value={formData.requirements}
                onChange={(e) => handleInputChange('requirements', e.target.value)}
                className="mt-2"
              />
            </div>

            <div className="text-center">
              <Button
                type="submit"
                disabled={bookingMutation.isPending}
                className="px-12 py-4 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
                style={{ backgroundColor: 'var(--purple-primary)' }}
              >
                {bookingMutation.isPending ? 'Submitting...' : 'Book Consultation'}
              </Button>
              <p className="text-sm text-gray-500 mt-4">
                We'll contact you within 24 hours to confirm your appointment
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
