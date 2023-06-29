import NavLinks from "./forHeader/NavLinks";
import PhoneNumber from "./forHeader/PhoneNumber";
import Logo from "./forHeader/Logo";
import CompanyName from "./forHeader/CompanyName";

const Header = () => {
  return (
    <div className="flex justify-stretch gap-2 rounded m-2 items-center bg-yellowesque">
      <Logo />
      <CompanyName />
      <NavLinks />
      <PhoneNumber />
    </div>
  );
};

export default Header;