import Button from "./Button";

const Hero = () => {
  return (
    <div className="flex flex-col gap-4 items-start justify-start w-full max-w-[1140px] my-24 mx-auto px-5 z-10 relative">
      
      <h1 className="leading-[80px] text-white uppercase text-8xl font-russo">Because the hard reality was <span className="text-red-600">I gotta get a job*</span><p className="text-xs italic text-white font-extralight font-lato">Quote from Major Payne (1995), Universal Pictures</p></h1>
      <p className="text-2xl text-white font-extralight font-lato">Portfolio of a <span className="font-bold">Dev Cadet Sasha</span>, the kind of genius who can code a missile’s trajectory and design the explosion to look like modern art!</p>

      <div className="flex gap-2 mt-4">
        <Button label="GitHub" href="https://github.com/SeggyFault" />
        <Button label="Linkedin" href="https://www.linkedin.com/in/omasiukevych/" />
      </div>
      
    </div>
  );
};

export default Hero;