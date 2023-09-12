import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="hidden sm:flex flex-initial justify-evenly font-extrabold p-2 m-2 rounded-xl text-lg text-platinum outline outline-primary hover:outline-burgundyesque hover:bg-secondary">
      LD
    </Link>
  );
};

export default Logo;