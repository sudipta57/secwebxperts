import { useState, useEffect } from "react";

const Herosection = () => {
  const outerOrbitLogos = [
    {
      src: "https://cdn-icons-png.flaticon.com/512/6119/6119533.png",
      alt: "IOT",
      shadowColor: "#4285F4",
    },
    {
      src: "https://cdn-icons-png.flaticon.com/512/919/919851.png",
      alt: "React",
      shadowColor: "#61DAFB",
    },
    {
      src: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
      alt: "Node",
      shadowColor: "#8CC84B",
    },
    {
      src: "https://e7.pngegg.com/pngimages/620/322/png-clipart-angularjs-ruby-on-rails-typescript-web-application-icon-hacker-angle-triangle.png",
      alt: "Angular",
      shadowColor: "#DD0031",
    },
    {
      src: "https://cdn-icons-png.flaticon.com/512/2091/2091665.png",
      alt: "Blockchain",
      shadowColor: "#F7931A",
    },
  ];

  const innerOrbitLogo = {
    src: "https://cdn-icons-png.flaticon.com/512/1051/1051277.png",
    alt: "JavaScript",
  };

  const centerImages = [
    {
      src: "https://static-00.iconduck.com/assets.00/php-icon-2048x2048-zjxns1zh.png",
      alt: "PHP Icon",
    },
    {
      src: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
      alt: "HTML Icon",
    },
    {
      src: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
      alt: "CSS Icon",
    },
    {
      src: "https://cdn-icons-png.flaticon.com/512/919/919828.png",
      alt: "Java Icon",
    },
  ];

  const [currentCenterImage, setCurrentCenterImage] = useState(0);
  const [fadeClass, setFadeClass] = useState("fade-in");

  useEffect(() => {
    const imageChangeInterval = setInterval(() => {
      setFadeClass("fade-out");

      setTimeout(() => {
        setCurrentCenterImage(
          (prevIndex) => (prevIndex + 1) % centerImages.length
        );
        setFadeClass("fade-in");
      }, 500);
    }, 3000);

    return () => clearInterval(imageChangeInterval);
  }, [centerImages.length]);

  useEffect(() => {
    const animateLogos = setInterval(() => {
      const outerLogos = document.querySelectorAll(".outer-orbit-logo");
      outerLogos.forEach((logo, index) => {
        const angle =
          ((index / outerLogos.length) * 360 + Date.now() / 50) % 360;
        const outerRadius = 192;
        const x = outerRadius * Math.cos((angle * Math.PI) / 180);
        const y = outerRadius * Math.sin((angle * Math.PI) / 180);
        logo.style.transform = `translate(${y}px, ${x}px)`;
      });

      const innerLogo = document.querySelector(".inner-orbit-logo");
      const angleInner = (Date.now() / 70) % 360;
      const innerRadius = 120;
      const xInner = innerRadius * Math.cos((angleInner * Math.PI) / 180);
      const yInner = innerRadius * Math.sin((angleInner * Math.PI) / 180);
      innerLogo.style.transform = `translate(${yInner}px, ${xInner}px)`;
    }, 16);

    return () => clearInterval(animateLogos);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 space-y-40 md:space-y-0 mx-auto w-[1350px]">
        {/* Added space-y-10 for vertical gap on mobile */}
        <div className="mb-8 md:mb-0">
          <h1 className="text-5xl font-bold text-orange-500 leading-[70px]">
            Making Service Simple and Excellent
          </h1>
          <p className="text-gray-800 mt-4 max-w-lg font-bold  leading-[30px]">
            Our goal is to make service simple without compromising on quality,
            offering a hassle-free experience that consistently meets your
            expectations and needs.
          </p>
          <button className="mt-8 bg-black text-white py-3 px-6 rounded-full hover:bg-gray-700 transition">
            Book an Appointment
          </button>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="absolute w-96 h-96 border-2 border-gray-300 rounded-full p-[49px]">
            <div className="absolute w-72 h-72 border-2 border-gray-300 rounded-full"></div>
          </div>

          <div className="relative w-28 h-28 rounded-full bg-white shadow-lg z-10">
            <img
              src={centerImages[currentCenterImage].src}
              alt={centerImages[currentCenterImage].alt}
              className={`w-full h-full object-cover rounded-full transition-all duration-500 ease-in-out ${fadeClass}`}
            />
          </div>

          <div className="absolute w-full h-full flex items-center justify-center">
            {outerOrbitLogos.map((logo, index) => (
              <div
                key={index}
                className="outer-orbit-logo absolute w-12 h-12 transform"
                style={{ filter: `drop-shadow(0 0 28px ${logo.shadowColor})` }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>

          <div className="absolute w-full h-full flex items-center justify-center">
            <div className="inner-orbit-logo absolute w-12 h-12 transform">
              <div className="h-20 w-20 bg-white rounded-full flex justify-center items-center">
                <h3 className="text-blue-500 font-bold">
                  Clients <br />
                  20+
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
