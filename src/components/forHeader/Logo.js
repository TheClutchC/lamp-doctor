import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="hidden sm:flex flex-initial justify-evenly border-4 font-extrabold p-2 m-2 rounded-xl">
      LD
    </Link>
  );
};

export default Logo;