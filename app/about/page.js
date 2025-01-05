export default function About() {
    return (
      <div className="about-page bg-greenish text-white">
        {/* Hero Section */}
        <section className="hero py-6 sm:py-16 lg:py-24 text-left px-4 sm:px-8 lg:px-20">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-secondary">About Us</h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-xl lg:text-2xl">
            We transform spaces into captivating environments that elevate your everyday experience, merging functionality with aesthetics in perfect harmony.
          </p>
        </section>
  
        {/* Our Story */}
        <section className="our-story px-4 sm:px-8 lg:px-20 py-8 lg:py-12 text-left">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-secondary">Our Story</h2>
          <p className="mt-4 sm:mt-6 text-sm sm:text-lg lg:text-xl leading-relaxed">
            Since our inception, we have been driven by a deep passion for interior design and a vision to make luxury, comfort, and style accessible to everyone. Each project reflects the personality and preferences of our clients.
          </p>
        </section>
  
        {/* Our Team */}
        <section className="our-team p-6 sm:p-8 lg:p-16 text-left">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-secondary">Meet Our Team</h2>
          <p className="mt-4 text-sm sm:text-lg lg:text-xl">
            Our talented team of designers, architects, and craftsmen bring your vision to life with meticulous attention to detail and a commitment to excellence.
          </p>
          <div className="team-grid mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {["Faisal Fayaz Parray", "John Smith", "Lisa Brown", "Tom White"].map((name, index) => (
              <div key={index} className="team-member bg-greenish text-gray-800 p-6 lg:p-8 rounded-lg shadow-lg text-left">
                <img src={`/path-to-image-${index}.jpg`} alt={name} className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mx-auto rounded-full shadow-md" />
                <h3 className="mt-4 text-lg lg:text-xl font-semibold text-secondary">{name}</h3>
                <p className="text-primary">Interior Designer</p>
                <p className="mt-2 text-white text-sm lg:text-base">
                  {name} brings a wealth of expertise and a unique perspective to each project, enhancing spaces with a blend of creativity and precision.
                </p>
              </div>
            ))}
          </div>
        </section>
  
        {/* Our Values */}
        <section className="our-values p-6 sm:p-8 lg:p-16  text-left">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-secondary">Our Values</h2>
          <p className="mt-4 text-sm sm:text-lg lg:text-xl">
            Our values shape every aspect of our work, ensuring each project is a masterpiece of quality, creativity, and care.
          </p>
          <ul className="values-list mt-6 space-y-4 text-sm sm:text-lg lg:text-xl">
            <li>
              <span className="font-bold text-secondary">Quality:</span> Rigorous standards in every detail, from material selection to final touches, ensuring lasting beauty and durability.
            </li>
            <li>
              <span className="font-bold text-secondary">Creativity:</span> Our team constantly explores innovative ideas to deliver designs as unique as our clients.
            </li>
            <li>
              <span className="font-bold text-secondary">Customer Focus:</span> We place our clients at the center of everything we do, listening to your needs and bringing your vision to life.
            </li>
          </ul>
        </section>
  
        {/* Testimonials */}
        <section className="testimonials p-6 sm:p-8 lg:p-16 text-left">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-secondary">What Our Clients Say</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <blockquote className="text-sm sm:text-lg lg:text-xl italic text-white">
              “Working with this team was a dream come true. They transformed my home into a sanctuary, and I couldn’t be happier with the results!”
              <span className="block mt-2 font-bold text-secondary">— Sarah J.</span>
            </blockquote>
            <blockquote className="text-sm sm:text-lg lg:text-xl italic text-white">
              “Their attention to detail and commitment to excellence is unmatched. Our office space is now a perfect blend of style and functionality.”
              <span className="block mt-2 font-bold text-secondary">— Mark L.</span>
            </blockquote>
            <blockquote className="text-sm sm:text-lg lg:text-xl italic text-white">
              “The team went above and beyond to capture our vision, and the result exceeded our expectations!”
              <span className="block mt-2 font-bold text-secondary">— Emily R.</span>
            </blockquote>
          </div>
        </section>
  
        {/* Call to Action */}
        <section className="cta py-8 sm:py-10 lg:py-12 bg-greenish text-white text-center">
          <p className="text-base sm:text-xl lg:text-2xl mb-4 sm:mb-6">Ready to create your dream space?</p>
          <button className="px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 bg-secondary text-white font-semibold rounded-md shadow-lg hover:bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary">
            Contact Us
          </button>
        </section>
      </div>
    );
  }
  