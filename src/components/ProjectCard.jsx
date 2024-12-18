import Button from "./Button";
import Tag from "./Tag";

const ProjectCard = ({ image, tags, title, description, className }) => {
  return (
    <div className="flex flex-col my-4 transition-all duration-300 transform bg-white shadow-lg rounded-xl hover:translate-y-2 hover:shadow-2xl lg:mt-0">
        <img 
          src={image} 
          alt="placeholder" 
          className={`p-10 object-contain h-60 rounded-t-xl ${className}`}
        />

        <div className="px-6 pt-6 grow">
          <div>
            <h3 className="mb-2 text-xl font-russo">{title}</h3>
            <p className="my-2">{description}</p>
          </div>
          <div className="flex flex-wrap gap-1 py-4">
            {tags.map((tag, index) => (
                <Tag 
                  key={index}
                  label={tag}
                  className="px-2 py-1 text-xs text-gray-500 bg-yellow-300 rounded-md"
                />
            ))}
          </div>
        </div>
        <div className="flex gap-2 px-6 pb-6">
          <Button label="GitHub Repo" className="text-red-600 border border-red-600 hover:bg-red-600 hover:text-white hover:border-red-600" />
          <Button label="Live" className="text-red-600 border border-red-600 hover:bg-red-600 hover:text-white hover:border-red-600" />
        </div>

    </div>
  );
};

export default ProjectCard;