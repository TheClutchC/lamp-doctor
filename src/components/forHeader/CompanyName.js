import { Link } from "react-router-dom";

const CompanyName = () => {
  return (
    <Link to="/" className="hidden md:flex font-extrabold border-4 border-x-field-drab border-y-olive px-2">
      Lamp Doctor of Santa Fe
    </Link>
  );
};

export default CompanyName;