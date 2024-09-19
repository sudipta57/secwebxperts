const About = () => {
  return (
    <section className="bg-white py-16 max-w-[1350px] mx-auto">
      <div className="container mx-auto px-4 text-center">
        {/* About Section Title */}
        <h1 className="text-5xl font-bold text-orange-500 mb-6">About</h1>

        {/* Description */}
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          Secwebxperts is a team of IT professionals providing top-notch website
          and mobile app development, cybersecurity, and web design. Founded 1.2
          years ago, our expertise includes VAPT, penetration testing, and data
          leak assessments, including dark web evaluations.
        </p>

        {/* Mission and Vision Cards */}
        <div className="flex flex-col md:flex-row md:space-x-6 mx-auto justify-center items-center">
          {/* Our Mission Card */}
          <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-xs md:max-w-sm mb-6 md:mb-0">
            <img
              src="src/assets/mission.jpeg"
              alt="Mission"
              className="mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 mb-6">
              At Secwebxperts, our mission is to provide innovative, reliable,
              and comprehensive IT solutions.
            </p>
            <a
              href="#"
              className="text-orange-500 font-bold hover:underline flex items-center justify-center"
            >
              READ MORE
              <span className="ml-2">→</span>
            </a>
          </div>

          {/* Our Vision Card */}
          <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-xs md:max-w-sm">
            <img
              src="src/assets/vision.jpeg"
              alt="Vision"
              className="mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600 mb-6">
              At Secwebxperts, our vision is to become the top provider of
              comprehensive IT solutions.
            </p>
            <a
              href="#"
              className="text-orange-500 font-bold hover:underline flex items-center justify-center"
            >
              READ MORE
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
