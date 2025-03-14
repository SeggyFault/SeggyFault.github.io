import skillsData from "../data/skillsData";
import SkillCard from "./SkillCard";
import Tag from "./Tag";

const Skills = () => {

  return (
    <div className="flex flex-wrap gap-2 text-white">
      {skillsData.map((category, index) => (
        <div key={index} className="my-4">
          <h3 className="mb-5 text-2xl text-center text-white md:text-left">{category.title}</h3>
          <div className="flex flex-wrap justify-center gap-2 md:justify-start">
            {category.skills.map((skill, skillIndex) => (
              typeof skill === "object" && skill.image ? (
                <SkillCard key={skillIndex} image={skill.image} title={skill.title} className="flex flex-col items-center p-10 text-lg text-gray-500 bg-white rounded-md shadow-lg"/>
              ) : (
                <Tag key={skillIndex} title={skill} className="px-4 py-2 text-black bg-yellow-300 rounded-lg"/>
              )
            ))}
          </div>
            
        </div>
      ))}
    </div>
  );
};

export default Skills;