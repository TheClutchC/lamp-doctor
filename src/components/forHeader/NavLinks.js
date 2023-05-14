// import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  //  const [isOpen, setIsOpen] = useState(false);
  //  const toggle = () => setIsOpen(!isOpen);

   return (
		<div className="flex flex-row flex-1 justify-evenly">
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/about">
        About
      </NavLink>
      <NavLink to="/services">
        Services
      </NavLink>
      <NavLink to="/contact">
        Contact
      </NavLink>
		</div>
  	);
}

export default NavLinks;