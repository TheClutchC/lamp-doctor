// import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  //  const [isOpen, setIsOpen] = useState(false);
  //  const toggle = () => setIsOpen(!isOpen);

   return (
		<div className="flex flex-row gap-2">
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