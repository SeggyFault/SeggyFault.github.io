import { useState } from "react";
import { Link } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between w-full max-w-[1140px] my-0 mx-auto px-5 py-5 z-10 relative">
      <a href="/">
        <img 
        src="/assets/images/rat.png" 
        alt="rat icon" 
        className="w-12"/>
      </a>

      <button className="text-5xl text-white md:hidden z-[999]" onClick={toggleMenu}>
        { isMenuOpen ? <MdClose className="fixed right-5 top-5" /> : <MdMenu /> }
      </button>

      {/* Desktop Menu */}
      <ul className="hidden w-1/2 md:flex md:items-center md:justify-between">
        <li className="text-base text-white uppercase font-lato hover:underline">
          <a href="#weapons">Weapons</a>
        </li>
        <li className="text-base text-white uppercase font-lato hover:underline">
          <a href="#missions">Missions</a>
        </li>
        <li className="text-base text-white uppercase font-lato hover:underline">
          <a href="#about">About</a>
        </li>
        <li className="text-base text-white uppercase font-lato hover:underline"><Link to="/blog">Blog</Link></li>
        <li className="text-base text-white uppercase font-lato hover:underline">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="fixed top-0 left-0 w-full h-full z-[10] bg-[#161616] flex flex-col items-center gap-16 py-16 md:hidden">
          <li className="text-5xl text-white uppercase font-lato hover:underline">
            <a href="#weapons" onClick={toggleMenu}>Weapons</a>
          </li>
          <li className="text-5xl text-white uppercase font-lato hover:underline">
            <a href="#missions" onClick={toggleMenu}>Missions</a>
          </li>
          <li className="text-5xl text-white uppercase font-lato hover:underline">
            <a href="#about" onClick={toggleMenu}>About</a>
          </li>
          <li className="text-5xl text-white uppercase font-lato hover:underline">
            <Link to="/blog" onClick={toggleMenu}>Blog</Link>
          </li>
          <li className="text-5xl text-white uppercase font-lato hover:underline">
            <a href="#contact" onClick={toggleMenu}>Contact</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;