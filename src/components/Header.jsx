import Navigation from "./Navigation";
import Hero from "./Hero";

const Header = ({ children }) => {
  return (
    <header className="bg-[url('./assets/images/hero-image.jpg')] bg-cover bg-center bg-no-repeat min-h-screen relative flex flex-col">
      <div className="before:absolute before:inset-0 before:bg-[#1E1E1E] before:bg-opacity-80 before:z-0"></div>
      <Navigation />
      <Hero />
    </header>
  );
};

export default Header;