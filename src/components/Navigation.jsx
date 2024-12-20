import { MdMenu } from "react-icons/md";

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between w-full max-w-[1140px] my-0 mx-auto px-5 py-5 z-10 relative">
      <a href="/">
        <img 
        src="/assets/images/rat.png" 
        alt="rat icon" 
        className="w-12"/>
      </a>

      <button className="text-5xl text-white md:hidden"><MdMenu/></button>

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
        <li className="text-base text-white uppercase font-lato hover:underline">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;