const Button = ({ icon: Icon, label, href, className}) => {
  return (
    <button className={`flex items-center justify-center gap-2 px-4 py-2 text-base uppercase rounded-lg font-lato ${className}`}>
      {Icon && <Icon className="text-white" />}
      <a href={href} target="_blank" >{label}</a>
    </button>
  );
};

export default Button;