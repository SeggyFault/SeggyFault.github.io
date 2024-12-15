import Navigation from "./Navigation";

const Header = ({ children }) => {
  return (
    <header className="bg-[url('./src/assets/images/hero-image.jpg')] bg-cover bg-center bg-no-repeat min-h-screen">
      <Navigation/>
    </header>
  );
};

export default Header;