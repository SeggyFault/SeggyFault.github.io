const SkillCard = ({ title, className, image }) => {
  return (
    <div className={className}>
      <img src={image} alt={title} className="w-32 hover:scale-105 hover:duration-300 hover:ease-in-out" />
      <span className="mt-4">{title}</span>
    </div>
  );
};

export default SkillCard;