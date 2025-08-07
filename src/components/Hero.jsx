import DownloadButton from "../components/DownloadButton";

const Hero = () => {
  return (
    <div className="flex flex-col gap-4 sm:items-start justify-start w-full max-w-[1140px] my-6 md:my-24 mx-auto px-5 relative">
      <h1 className="text-xl text-white md:text-4xl font-extralight font-lato">Hey! My name is Oleksandra Masiukevych  — I’m a Product Designer, Fullstack Developer, and Illustrator. For 12 years, I’ve been helping teams take ideas from sketch to shipped product.</h1>
      <h2 className="md:leading-[80px] text-white uppercase leading-[50px] text-6xl md:text-8xl font-russo">Because the hard reality was <span className="text-red-600">I gotta get a job*</span><p className="text-xs italic text-white font-extralight font-lato">Quote from Major Payne (1995), Universal Pictures</p></h2>
      <DownloadButton />  
    </div>
  );
};

export default Hero;