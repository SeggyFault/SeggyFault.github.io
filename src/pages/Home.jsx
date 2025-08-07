import Skills from "../components/Skills";
import ProjectCard from "../components/ProjectCard";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  const projectsData = [
    {
      image: "/assets/images/Dezignlabs.svg",
      tags: ["Figma", "React.js", "Tailwind.css", "Git", "Vite", "Agile"],
      title: "Dezignlabs",
      description: "DezignLabs is an independent design communications agency whose website serves as a sleek, modern landing page to build trust and forge connections between games and players. Built with React, Vite and Tailwind CSS, it features elegant gradients, thoughtful layouts, and interactive icons. The site highlights the agency’s mission, client portfolio, and services, reflecting a polished brand identity and strong visual communication.",
      className: "bg-[#7F30FD]",
      githubLink: "https://github.com/SeggyFault/dezignLabs-frontend",
      liveLink: "https://dezignlabs.co/"
    },
    {
      image: "/assets/images/Logo_Mavych_White.png",
      tags: ["Figma", "React.js", "Tailwind.css", "Git", "Vite"],
      title: "Portfolio",
      description: "This portfolio website was built to aim applying modern web development practices to create a clean and responsive design. Through this project, knowledge of component-based architecture, state management, and utility-first styling has been put into practice. The website serves as a representation of skills and a platform to showcase projects.",
      className: "bg-[#afa493]",
      githubLink: "https://github.com/SeggyFault/SeggyFault.github.io",
      liveLink: "https://mavych.me/"
    },
    {
      image: "/assets/images/ertle.png",
      tags: ["Figma", "Wordpress", "Git", "PHP"],
      title: "Egis Ertle",
      description: "Redesign of the Egis Ertle Engineering website, using custom Wordpress theme and Polylang plugin.",
      className: "bg-[#09212C]",
      liveLink: "https://egis-ertle.com"
    },
    {
      image: "/assets/images/abacum.svg",
      tags: ["Pug", "Tailwind.css", "Git", "PostCSS", "Javascript"],
      title: "Abacum",
      description: "Markup using Pug template and Tailwind.css for styling, part of the web dev practice. Abacum has updated their designs in 2025 so no live preview is available.",
      className: "bg-[#6C0EF2]",
      githubLink: "https://github.com/SeggyFault/abacum",
    },
  ];

  return (
    <>
      {/* Works */}
      <div className="px-5 py-10 bg-gray-100 md:py-20">
        <section id="works" className="min-w-[400px] max-w-[1140px] mx-5 md:mx-auto">
          <h2 className="mb-6 text-4xl text-center text-black uppercase md:text-left md:text-6xl font-russo">Works</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {projectsData.map((project, index) => (
                <ProjectCard
                  key={index}
                  image={project.image}
                  tags={project.tags}
                  title={project.title}
                  description={project.description}
                  className={project.className}
                  githubLink={project.githubLink}
                  liveLink={project.liveLink}
                />
              ))}
          </div>
        </section>
      </div>

      {/* Skills */}
      <div className="px-5 py-10 bg-[#161616] md:py-20">
        <section id="skills" className="min-w-[400px] max-w-[1140px] mx-5 md:mx-auto">
          <h2 className="mb-6 text-4xl text-center text-white uppercase md:text-left md:text-6xl font-russo">Skills</h2>
          <div className="flex gap-2">
            <Skills />
          </div>
        </section>
      </div>

      {/* Contact */}
      <div className="px-5 py-10 bg-gray-100 md:py-20">
        <section id="contact" className="min-w-[400px] max-w-[1140px] mx-5 md:mx-auto flex flex-col items-center justify-center min-h-screen">
          <h2 className="mb-6 text-4xl text-center text-black uppercase md:text-6xl font-russo">Drop me a line!</h2>
          <Contact />
        </section>
      </div>
      
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
