const Navigation = () => {
  return (
    <nav className="flex items-center justify-between w-full max-w-[1140px] my-0 mx-auto px-5">
      <a href="/">
        <img 
        src="./src/assets/images/rat.png" 
        alt="rat icon" 
        className="w-16"/>
      </a>
      <ul className="flex items-center justify-between w-1/2">
        <li className="text-base text-white uppercase font-lato hover:underline">
          <a href="#skills">Skills</a>
        </li>
        <li className="text-base text-white uppercase font-lato hover:underline">
          <a href="#projects">Projects</a>
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