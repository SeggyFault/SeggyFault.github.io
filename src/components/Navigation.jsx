import { useState } from "react";
import { Link } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";
import Button from "./Button";
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between w-full max-w-[1140px] my-0 mx-auto px-5 py-5 z-10 relative">
      <a href="/">
        <img 
        src="/assets/images/Logo_Mavych_White.png" 
        alt="mavych logo" 
        className="w-24"/>
      </a>

      <button className="text-5xl text-white md:hidden z-[999]" onClick={toggleMenu}>
        { isMenuOpen ? <MdClose className="fixed right-5 top-5" /> : <MdMenu /> }
      </button>

      {/* Desktop Menu */}
      <ul className="hidden w-1/2 md:flex md:items-center md:justify-between">
        <li className="text-base text-white uppercase font-lato hover:underline">
          <a href="#works">Works</a>
        </li>
        <li className="text-base text-white uppercase font-lato hover:underline">
          <a href="#skills">Skills</a>
        </li>
        <li className="text-base text-white uppercase font-lato hover:underline"><Link to="/blog">Blog</Link></li>
        <li className="text-base text-white uppercase font-lato hover:underline">
          <a href="#contact">Contact</a>
        </li>
        <li>
          <ul className="flex gap-2 mx-2">
            <li>
            <Button 
              href="https://github.com/SeggyFault" 
              icon={FaGithub} className="text-white border border-white hover:bg-red-600 hover:text-white hover:border-red-600" 
            />
            </li>
            <li>
            <Button 
              href="https://www.linkedin.com/in/omasiukevych/" 
              icon={FaLinkedin} 
              className="text-white border border-white hover:bg-red-600 hover:text-white hover:border-red-600" 
            />
            </li>
          </ul>
        </li>
      </ul>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="fixed top-0 left-0 w-full h-full z-[10] bg-[#161616] flex flex-col items-center gap-16 py-16 md:hidden">
          <li className="text-5xl text-white uppercase font-lato hover:underline">
            <a href="#works" onClick={toggleMenu}>Works</a>
          </li>
          <li className="text-5xl text-white uppercase font-lato hover:underline">
            <a href="#skills" onClick={toggleMenu}>Skills</a>
          </li>
          <li className="text-5xl text-white uppercase font-lato hover:underline">
            <Link to="/blog" onClick={toggleMenu}>Blog</Link>
          </li>
          <li className="text-5xl text-white uppercase font-lato hover:underline">
            <a href="#contact" onClick={toggleMenu}>Contact</a>
          </li>
          <li>
            <ul className="flex gap-2 mx-2">
              <li>
              <Button 
                href="https://github.com/SeggyFault" 
                icon={FaGithub} className="text-white border border-white hover:bg-red-600 hover:text-white hover:border-red-600" 
              />
              </li>
              <li>
              <Button 
                href="https://www.linkedin.com/in/omasiukevych/" 
                icon={FaLinkedin} 
                className="text-white border border-white hover:bg-red-600 hover:text-white hover:border-red-600" 
              />
              </li>
            </ul>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;