export default function About() {
  return (
    <section id="about" className="py-20" style={{ background: 'linear-gradient(to bottom right, var(--cream), var(--purple-light))' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="font-playfair text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: 'var(--purple-primary)' }}
          >
            About Us
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the talented artists behind Sanchitha Makeovers, dedicated to making your special day absolutely perfect
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Founders Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-6 mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150" 
                  alt="Savitha Rao - Lead Makeup Artist" 
                  className="w-20 h-20 rounded-full object-cover" 
                />
                <div>
                  <h3 
                    className="font-playfair text-2xl font-semibold"
                    style={{ color: 'var(--purple-primary)' }}
                  >
                    Savitha Rao
                  </h3>
                  <p style={{ color: 'var(--purple-accent)' }}>
                    Lead Makeup Artist & Founder
                  </p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                With over 8 years of experience in bridal makeup, Savitha specializes in enhancing natural beauty while creating stunning transformations. Her expertise in both traditional and contemporary styles has made her a sought-after artist in the industry.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-6 mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150" 
                  alt="Chethana - Hair Styling Expert" 
                  className="w-20 h-20 rounded-full object-cover" 
                />
                <div>
                  <h3 
                    className="font-playfair text-2xl font-semibold"
                    style={{ color: 'var(--purple-primary)' }}
                  >
                    Chethana
                  </h3>
                  <p style={{ color: 'var(--purple-accent)' }}>
                    Hair Styling Expert & Co-Founder
                  </p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Chethana brings her artistic flair and technical expertise to create breathtaking hairstyles. Her passion for innovation combined with respect for traditional techniques results in perfect styles for every bride's unique personality.
              </p>
            </div>
          </div>

          {/* Studio Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Luxurious makeup studio with professional lighting and equipment" 
              className="rounded-2xl shadow-2xl w-full h-96 object-cover" 
            />
            <div 
              className="absolute inset-0 rounded-2xl"
              style={{ background: 'linear-gradient(to top, hsla(320, 91%, 22%, 0.2), transparent)' }}
            ></div>
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl">
              <h4 
                className="font-playfair text-lg font-semibold"
                style={{ color: 'var(--purple-primary)' }}
              >
                Our Studio
              </h4>
              <p className="text-sm text-gray-600">
                Fully equipped with professional lighting and premium products
              </p>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-16 text-center">
          <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg max-w-4xl mx-auto">
            <h3 
              className="font-playfair text-3xl font-semibold mb-6"
              style={{ color: 'var(--purple-primary)' }}
            >
              Our Mission
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Sanchitha Makeovers, we believe every bride deserves to feel like royalty on her special day. Our mission is to enhance your natural beauty while honoring traditional aesthetics, creating a perfect balance that reflects your unique personality and makes your wedding day truly unforgettable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
