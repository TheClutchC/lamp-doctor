import NavLinks from "./forHeader/NavLinks";
import PhoneNumber from "./forHeader/PhoneNumber";
import Logo from "./forHeader/Logo";
import CompanyName from "./forHeader/CompanyName";

const Header = () => {
  return (
    <div className="flex justify-stretch gap-2 m-2 items-center backdrop-brightness-90">
      <Logo />
      <CompanyName />
      <NavLinks />
      <PhoneNumber />
    </div>
  );
};

export default Header;