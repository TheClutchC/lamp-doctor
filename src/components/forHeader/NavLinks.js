import { NavLink } from "react-router-dom";
import { GrHome, GrCircleInformation, GrServices, GrContactInfo   } from "react-icons/gr";

const NavLinks = () => {
  return (
	  <div className="flex flex-row flex-1 justify-evenly">
      <NavLink to="/" end>
        <div className="flex items-center">
          <GrHome className="hidden sm:flex text-2xl mr-2"/>
          <span>Home</span>
        </div>
      </NavLink>
      <NavLink to="/about">
        <div className="flex items-center">
          <GrCircleInformation className="hidden sm:flex text-2xl mr-2"/>
          <span>About</span>
        </div>
      </NavLink>
      <NavLink to="/services">
        <div className="flex items-center">
          <GrServices className="hidden sm:flex text-2xl mr-2"/>
          <span>Services</span>
        </div>
      </NavLink>
      <NavLink to="/contact">
        <div className="flex items-center">
          <GrContactInfo className="hidden sm:flex text-2xl mr-2"/>
          <span>Contact</span>
        </div>
      </NavLink>
		</div>
  );
}

export default NavLinks;