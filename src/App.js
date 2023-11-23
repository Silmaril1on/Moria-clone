import "./App.scss";
import AnimatedHeader from "./components/AnimatedHeader";
import Modal from "./components/Modal";
import ParallaxLogo from "./components/ParallaxLogo";
import Navigation from "./layout/navigation/Navigation";
import Parallax from "./sections/parallax/Parallax";
import SectionFive from "./sections/sectionFive/SectionFive";
import SectionFour from "./sections/sectionFour/SectionFour";
import SectionOne from "./sections/sectionOne/SectionOne";
import SectionThree from "./sections/sectionThree/SectionThree";
import SectionTwo from "./sections/sectionTwo/SectionTwo";
import Footer from "./layout/footer/Footer";

function App() {
  return (
    <main className="h-full w-full column-c align-i-c position-r">
      <Navigation />
      <ParallaxLogo />
      <Parallax />
      <Modal />
      <SectionOne />
      <SectionTwo />
      <div className="font-f-primary color-white mt-6 mb-6">
        <AnimatedHeader
          className="responsive-h mr-2"
          text="Discover Secrets in"
        />
        <AnimatedHeader
          className="responsive-h mr-2"
          text="the Depths of Moria"
        />
      </div>
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Footer />
    </main>
  );
}

export default App;
