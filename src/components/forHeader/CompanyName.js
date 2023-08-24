import { Link } from "react-router-dom";

const CompanyName = () => {
  return (
    <Link to="/" className="flex font-extrabold px-4 py-2 rounded-xl bg-yellowesque">
      <em>The Lamp Doctor of Santa Fe</em>
    </Link>
  );
};

export default CompanyName;