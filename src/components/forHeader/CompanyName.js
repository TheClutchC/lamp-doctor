import { Link } from "react-router-dom";

const CompanyName = () => {
  return (
    <Link to="/" className="hidden md:flex font-extrabold border-4 px-2 rounded">
      Lamp Doctor of Santa Fe
    </Link>
  );
};

export default CompanyName;