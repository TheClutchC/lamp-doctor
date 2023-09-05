import { Link } from "react-router-dom";

const CompanyName = () => {
  return (
    <Link to="/" className="flex font-extrabold text-2xl text-platinum italic md:px-12 px-4 py-2 rounded-xl">
      <em>The Lamp Doctor of Santa Fe</em>
    </Link>
  );
};

export default CompanyName;