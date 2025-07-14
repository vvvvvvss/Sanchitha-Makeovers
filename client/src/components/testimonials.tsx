import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Bride, December 2023",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      text: "Savitha and Chethana made my wedding day absolutely perfect! The makeup was flawless and lasted throughout the entire ceremony. I felt like a princess. Highly recommend their complete package!"
    },
    {
      name: "Anjali Reddy",
      role: "Bride, November 2023",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      text: "The attention to detail was incredible! They understood exactly what I wanted and delivered beyond my expectations. The saree draping was absolutely stunning. Thank you for making my day special!"
    },
    {
      name: "Meera Krishnan",
      role: "Bride, October 2023",
      image: "https://images.unsplash.com/photo-1530785602389-07594beb8b73?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      text: "Professional, punctual, and absolutely talented! The team made me feel comfortable throughout the process. The final look was exactly what I had dreamed of. Definitely booking them again for reception!"
    }
  ];

  const stats = [
    { value: "200+", label: "Happy Brides" },
    { value: "5.0", label: "Average Rating" },
    { value: "3+", label: "Years Experience" }
  ];

  return (
    <section id="testimonials" className="py-20" style={{ background: 'linear-gradient(to bottom right, var(--purple-light), var(--cream))' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="font-playfair text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: 'var(--purple-primary)' }}
          >
            What Our Brides Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Read the experiences of our happy brides who trusted us with their special day
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4" 
                />
                <div>
                  <h4 
                    className="font-semibold"
                    style={{ color: 'var(--purple-primary)' }}
                  >
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div 
                className="text-4xl font-bold mb-2"
                style={{ color: 'var(--purple-primary)' }}
              >
                {stat.value}
              </div>
              <p className="text-gray-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
