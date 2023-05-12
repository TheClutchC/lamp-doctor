import NavLinks from "./forHeader/NavLinks";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex flex-row text-3xl gap-2">
      <Link to="/">
        Logo
      </Link>
      <Link to="/">
        <h1>
          Lamp Doctor
        </h1>
      </Link>
      <NavLinks />
      <div>505-718-5499</div>
    </div>
  );
};

export default Header;