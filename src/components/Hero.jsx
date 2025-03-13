import Button from "./Button";
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="flex flex-col gap-4 sm:items-start justify-start w-full max-w-[1140px] my-6 md:my-24 mx-auto px-5 relative">
      
      <h1 className="md:leading-[80px] text-white uppercase leading-[50px] text-6xl md:text-8xl font-russo">Because the hard reality was <span className="text-red-600">I gotta get a job*</span><p className="text-xs italic text-white font-extralight font-lato">Quote from Major Payne (1995), Universal Pictures</p></h1>
      <p className="text-xl text-white md:text-2xl font-extralight font-lato">Portfolio of a <span className="font-bold">Dev Cadet Sasha</span>, the kind of genius who can code a missile’s trajectory and design the explosion to look like modern art!</p>

      <div className="flex flex-col gap-2 mt-4 sm:flex-row">
        <Button label="GitHub" href="https://github.com/SeggyFault" icon={FaGithub} className="text-white border border-white hover:bg-red-600 hover:text-white hover:border-red-600" />
        <Button label="Linkedin" href="https://www.linkedin.com/in/omasiukevych/" icon={FaLinkedin} className="text-white border border-white hover:bg-red-600 hover:text-white hover:border-red-600" />
      </div>
      
    </div>
  );
};

export default Hero;