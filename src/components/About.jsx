const About = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 md:flex-row">
       <img 
        src="/assets/images/userpic.png" 
        alt=""
        className="w-[300px]"
      />
      <div className="text-lg">
        <p>Web Dev with a designer’s eye, coming from the heroic lands of Ukraine. In my downtime, I wield fire and keep the beat as part of the Colla de les Diables, proving I can handle the heat both on-screen and off.</p> 
        <p>And guess what? This soldier’s taking on a new mission: learning Catalan to master the local terrain. Ready to deploy creativity, precision, and a fiery spark wherever duty calls!</p>
      </div>
     
    </div>
  );
};

export default About;