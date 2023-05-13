import NavLinks from "./forHeader/NavLinks";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex flex-row justify-stretch bg-dark-moss-green gap-2 m-2 border-2 border-solid items-center">
      <Link to="/" className="flex-initial justify-evenly border-x-seal-brown border-y-olive border-8 font-extralight p-2">
        LD
      </Link>
      <NavLinks />
      <div className="hidden sm:flex m-2">505-718-5499</div>
    </div>
  );
};

export default Header;