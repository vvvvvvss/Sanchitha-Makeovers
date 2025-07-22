import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

export default function Portfolio() {
  const portfolioItems = [
    {
      image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
      title: "Traditional Elegance",
      description: "Complete bridal transformation for a South Indian wedding",
      url: "https://www.instagram.com/savitharao_designs/p/DK_flQTTdzj/"
    },
    {
      image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
      title: "Modern Glam",
      description: "Contemporary makeup with subtle highlighting",
      url: "https://www.instagram.com/savitharao_designs/p/DLse1O6T8MH/"
    },
    {
      image: "https://images.unsplash.com/photo-1571769267292-e24b1f56c7a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
      title: "Henna Artistry",
      description: "Intricate traditional mehndi designs",
      url: "https://www.instagram.com/savitharao_designs/p/DLbryKKTcLy/"
    },
    {
      image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
      title: "Floral Hair Art",
      description: "Traditional updo with fresh jasmine flowers",
      url: "https://www.instagram.com/savitharao_designs/p/DKyZePUT94G/"
    },
    {
      image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
      title: "Royal Jewelry",
      description: "Traditional gold jewelry styling and coordination",
      url: "https://www.instagram.com/savitharao_designs/p/DJ3L6vcyeGv/"
    },
    {
      image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
      title: "Transformation",
      description: "Complete makeover process documentation",
      url: "https://www.instagram.com/savitharao_designs/p/DJniprMSm9f/"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="font-playfair text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: 'var(--purple-primary)' }}
          >
            Our Portfolio
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the magic of transformation through our carefully curated collection of bridal makeovers
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition duration-300"
              style={{ minHeight: 400 }}
            >
              <iframe
                src={`https://www.instagram.com/p/${item.url.split("/p/")[1].split("/")[0]}/embed`}
                width="100%"
                height="400"
                frameBorder="0"
                scrolling="no"
                allowTransparency={true}
                allow="encrypted-media"
                className="w-full rounded-2xl"
              ></iframe>
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition duration-300 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100">
                <h4 className="text-white text-xl font-bold mb-2 text-center px-4">{item.title}</h4>
                <p className="text-white text-base text-center px-4">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Integration */}
        <div className="text-center">
          <div 
            className="p-8 rounded-2xl"
            style={{ background: 'linear-gradient(to right, var(--purple-light), hsla(298, 50%, 70%, 0.3))' }}
          >
            <h3 
              className="font-playfair text-2xl font-semibold mb-4"
              style={{ color: 'var(--purple-primary)' }}
            >
              Follow Our Journey
            </h3>
            <p className="text-gray-600 mb-6">
              Stay updated with our latest work and behind-the-scenes content on Instagram
            </p>
            <Button 
              className="inline-flex items-center space-x-2 rounded-full transition duration-300"
              style={{ backgroundColor: 'var(--purple-primary)' }}
            >
              <Instagram size={20} />
              <span>@sanchithamakeovers</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
