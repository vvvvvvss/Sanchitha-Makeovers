import { Button } from "@/components/ui/button";

export default function HeroCollage() {
  return (
    <section id="home" className="min-h-screen pt-16 overflow-hidden" style={{ background: 'linear-gradient(to bottom right, var(--purple-light), var(--cream))' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="relative">
          <div className="grid grid-cols-12 gap-4 h-screen max-h-[800px]">
            {/* Left Column - Large Image */}
            <div className="col-span-12 lg:col-span-5 relative">
              <img 
                src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000" 
                alt="Elegant Indian bride with traditional makeup" 
                className="w-full h-full object-cover rounded-2xl shadow-2xl" 
              />
              <div 
                className="absolute inset-0 rounded-2xl"
                style={{ background: 'linear-gradient(to top, hsla(320, 91%, 22%, 0.3), transparent)' }}
              ></div>
            </div>

            {/* Center Column - Text and Small Images */}
            <div className="col-span-12 lg:col-span-4 flex flex-col justify-center space-y-6">
              {/* Studio Name */}
              <div className="text-center lg:text-left">
                <h1 
                  className="font-playfair text-5xl lg:text-6xl font-bold leading-tight"
                  style={{ color: 'var(--purple-primary)' }}
                >
                  Sanchitha<br/>
                  <span style={{ color: 'var(--purple-deep)' }}>Makeovers</span>
                </h1>
                <p 
                  className="font-playfair text-xl mt-4 italic"
                  style={{ color: 'var(--purple-accent)' }}
                >
                  where every moment becomes a timeless masterpiece
                </p>
              </div>

              {/* Small Image Grid */}
              <div className="grid grid-cols-2 gap-3 mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                  alt="Intricate bridal hairstyle with flowers" 
                  className="rounded-xl shadow-lg h-32 w-full object-cover" 
                />
                <img 
                  src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                  alt="Professional makeup application" 
                  className="rounded-xl shadow-lg h-32 w-full object-cover" 
                />
              </div>

              {/* Call to Action */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button 
                  className="rounded-full font-medium transition duration-300"
                  style={{ backgroundColor: 'var(--purple-primary)' }}
                  onClick={() => document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Book Consultation
                </Button>
                <Button 
                  variant="outline"
                  className="rounded-full font-medium transition duration-300"
                  style={{ 
                    borderColor: 'var(--purple-primary)', 
                    color: 'var(--purple-primary)' 
                  }}
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Portfolio
                </Button>
              </div>
            </div>

            {/* Right Column - Stacked Images */}
            <div className="col-span-12 lg:col-span-3 space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=500" 
                alt="Elegant Indian bridal jewelry" 
                className="rounded-xl shadow-lg w-full h-48 object-cover" 
              />
              <img 
                src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=500" 
                alt="Beautiful saree draping with intricate details" 
                className="rounded-xl shadow-lg w-full h-56 object-cover" 
              />
              <img 
                src="https://images.unsplash.com/photo-1571769267292-e24b1f56c7a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Intricate henna designs on bride's hands" 
                className="rounded-xl shadow-lg w-full h-40 object-cover" 
              />
            </div>
          </div>

          {/* Floating Year Badge */}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
            <span 
              className="font-playfair text-2xl font-bold"
              style={{ color: 'var(--purple-primary)' }}
            >
              2024
            </span>
          </div>

          {/* Decorative Elements */}
          <div 
            className="absolute bottom-10 left-10 w-32 h-32 rounded-full blur-2xl"
            style={{ backgroundColor: 'hsla(298, 50%, 70%, 0.2)' }}
          ></div>
          <div 
            className="absolute top-20 right-20 w-24 h-24 rounded-full blur-xl"
            style={{ backgroundColor: 'hsla(294, 43%, 56%, 0.2)' }}
          ></div>
        </div>
      </div>
    </section>
  );
}
