const Button = ({ icon: Icon, label, href, className = '', isDownload = false}) => {
  return (
      <a 
        href={href} 
        target="_blank" 
        className={`flex items-center justify-center py-2 px-4 text-base uppercase rounded-lg font-lato ${className}`}
        download={isDownload || undefined}
      >
        {Icon && <Icon className="text-white" />}
        {label && <span>{label}</span>}
      </a>
  );
};

export default Button;