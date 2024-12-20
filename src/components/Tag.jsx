const Tag = ({ title, className }) => {
  return (
    <div className={className}>
      <span>{title}</span>
    </div>
  );
};

export default Tag;