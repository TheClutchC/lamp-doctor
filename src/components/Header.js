import NavLinks from "./forHeader/NavLinks";
import PhoneNumber from "./forHeader/PhoneNumber";
import Logo from "./forHeader/Logo";
import CompanyName from "./forHeader/CompanyName";

const Header = () => {
  return (
    <div className="flex flex-row justify-stretch bg-dark-moss-green gap-2 m-2 border-2 border-solid items-center">
      <Logo />
      <CompanyName />
      <NavLinks />
      <PhoneNumber />
    </div>
  );
};

export default Header;