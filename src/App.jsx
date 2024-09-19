import About from "./components/About";
import Herosection from "./components/HeroSection";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="h-auto container ">
      {/* Curved Navbar */}
      <Navbar />
      {/* Hero Section */}
      <Herosection />
      <About />
    </div>
  );
};

export default App;
