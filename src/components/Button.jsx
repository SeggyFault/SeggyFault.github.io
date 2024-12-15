const Button = ({ label, href}) => {
  return (
    <button className="px-4 py-2 text-base text-white uppercase border border-white rounded-lg font-lato hover:bg-red-600 hover:text-white hover:border-red-600">
      <a href={href} target="_blank" >{label}</a>
    </button>
  );
};

export default Button;