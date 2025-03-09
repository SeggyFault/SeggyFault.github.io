import { Link } from "react-router-dom";

const BlogNav = () => {
  return (
    <nav className="p-4 text-white bg-[#161616]">
      <ul className="flex justify-between max-w-4xl mx-auto">
        <li>
          <Link to="/" className="text-lg font-bold hover:underline">← Back to Home</Link>
        </li>
      </ul>
    </nav>
  );
};

export default BlogNav;
