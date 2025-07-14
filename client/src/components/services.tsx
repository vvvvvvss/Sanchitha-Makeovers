import { Palette, Scissors, Shirt, Crown } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Palette,
      title: "Make-up",
      description: "Professional bridal makeup using premium products for a flawless, long-lasting look",
      price: "₹15,000",
      priceNote: "Starting from"
    },
    {
      icon: Scissors,
      title: "Hairstyles",
      description: "Elegant bridal hairstyles from traditional buns to contemporary updos",
      price: "₹8,000",
      priceNote: "Starting from"
    },
    {
      icon: Shirt,
      title: "Saree Draping",
      description: "Perfect saree draping in various traditional and modern styles",
      price: "₹5,000",
      priceNote: "Starting from"
    },
    {
      icon: Crown,
      title: "Complete Package",
      description: "Complete bridal transformation including makeup, hair, and saree draping",
      price: "₹25,000",
      priceNote: "Best Value",
      isPopular: true
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="font-playfair text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: 'var(--purple-primary)' }}
          >
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transform your special day with our comprehensive bridal makeover services, tailored to enhance your natural beauty
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <div
                key={index}
                className={`p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 ${
                  service.isPopular 
                    ? 'text-white' 
                    : ''
                }`}
                style={service.isPopular ? {
                  background: 'linear-gradient(to bottom right, var(--purple-primary), var(--purple-deep))'
                } : {
                  background: 'linear-gradient(to bottom right, var(--purple-light), white)',
                  border: '1px solid hsla(298, 50%, 70%, 0.2)'
                }}
              >
                <div className="text-center">
                  <div 
                    className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${
                      service.isPopular ? 'bg-white/20' : ''
                    }`}
                    style={!service.isPopular ? { backgroundColor: 'var(--purple-primary)' } : {}}
                  >
                    <IconComponent 
                      className={`text-2xl ${service.isPopular ? 'text-white' : 'text-white'}`} 
                      size={24}
                    />
                  </div>
                  <h3 
                    className={`font-playfair text-2xl font-semibold mb-4 ${
                      service.isPopular ? 'text-white' : ''
                    }`}
                    style={!service.isPopular ? { color: 'var(--purple-primary)' } : {}}
                  >
                    {service.title}
                  </h3>
                  <p 
                    className={`mb-6 ${
                      service.isPopular ? 'text-purple-100' : 'text-gray-600'
                    }`}
                  >
                    {service.description}
                  </p>
                  <div 
                    className={`text-3xl font-bold mb-2 ${
                      service.isPopular ? 'text-white' : ''
                    }`}
                    style={!service.isPopular ? { color: 'var(--purple-deep)' } : {}}
                  >
                    {service.price}
                  </div>
                  <p 
                    className={`text-sm ${
                      service.isPopular ? 'text-purple-100' : 'text-gray-500'
                    }`}
                  >
                    {service.priceNote}
                  </p>
                  {service.isPopular && (
                    <div className="mt-6">
                      <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
                        Most Popular
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
