import Header from "./components/Header";
import Skills from "./components/Skills";
import ProjectCard from "./components/ProjectCard";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  
  const projectsData = [
    {
      image: "/assets/images/quisto.svg",
      tags: ["React.js", "Tailwind.css", "Git", "Node.js", "Express", "MongoDB"],
      title: "Quisto",
      description: "Revamp of the app using React.js, transforming it into a more dynamic and user-friendly platform. By leveraging React's component-based architecture, I streamlined the user interface and enhanced its responsiveness, ensuring a seamless experience across devices.",
      className: "bg-[#190E3B]"
    },
    {
      image: "/assets/images/ertle.png",
      tags: ["Figma", "Wordpress", "Git", "PHP"],
      title: "Egis Ertle",
      description: "Redesign of the Egis Ertle Engineering website, using custom Wordpress theme and Polylang plugin",
      className: "bg-[#09212C]"
    },
     {
      image: "/assets/images/abacum.svg",
      tags: ["Twig", "Tailwind.css", "Git", "PostCSS", "Javascript"],
      title: "Abacum",
      description: "Markup using Twig template and Tailwind.css for styling, part of the web dev practice",
      className: "bg-[#6C0EF2]"
    },
  ];

  return (
    <>
      <Header />
      {/* Weapons */}
      <div className="px-5 py-10 bg-[#161616] md:py-20">
        <section id="weapons" className="className=min-w-[400px] max-w-[1140px] mx-5 md:mx-auto">
          <h2 className="mb-6 text-4xl text-center text-white uppercase md:text-left md:text-6xl font-russo">Weapons</h2>
          <div className="flex gap-2">
            <Skills />
          </div>
        </section>
      </div>

      {/* Missions */}
      <div className="px-5 py-10 bg-gray-100 md:py-20">
        <section id="missions" className="min-w-[400px] max-w-[1140px] mx-5 md:mx-auto">
          <h2 className="mb-6 text-4xl text-center text-black uppercase md:text-left md:text-6xl font-russo">Missions</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {projectsData.map((project, index) => (
                <ProjectCard
                  key={index}
                  image={project.image}
                  tags={project.tags}
                  title={project.title}
                  description={project.description}
                  className={project.className}
                />
              ))}
          </div>
        </section>

      {/* Contact */}
      <div className="px-5 py-10 bg-gray-100 md:py-20">
        <section id="contact" className="min-w-[400px] max-w-[1140px] mx-5 md:mx-auto flex flex-col items-center justify-center min-h-screen">
          <h2 className="mb-6 text-4xl text-center text-black uppercase md:text-6xl font-russo">Drop me a line!</h2>
          <Contact />
        </section>
        <Footer />
        
      </div>

      </div>
      
    </>
  )
}

export default App
