import NavLinks from "./forHeader/NavLinks";
import PhoneNumber from "./forHeader/PhoneNumber";
import Logo from "./forHeader/Logo";
import CompanyName from "./forHeader/CompanyName";

const Header = () => {
  return (
    <>
      <div className="flex flex-col m-3 items-center">
        <CompanyName />
      </div>
      <div className="flex justify-stretch gap-2 rounded-xl m-3 items-center bg-platinum bg-opacity-50">
        <Logo />
        <NavLinks />
        <PhoneNumber />
      </div>
    </>
  );
};

export default Header;