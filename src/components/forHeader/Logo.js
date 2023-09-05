import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="hidden sm:flex flex-initial justify-evenly font-extrabold p-2 m-2 rounded-xl text-lg text-platinum outline outline-secondary hover:outline-primary hover:bg-platinum">
      LD
    </Link>
  );
};

export default Logo;