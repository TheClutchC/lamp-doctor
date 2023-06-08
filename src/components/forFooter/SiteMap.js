import { Link } from "react-router-dom";

const mapLinks = [
  'Home', 
  'About', 
  'Services', 
  'Contact'
];

const SiteMap = () => {
  const linkPaths = ['/', '/about', '/services', '/contact'];

  return (
    <table className="border-collapse border border-gray-800">
      <thead>
        <tr className="bg-gray-800 text-white text-lg font-bold">
          <th colSpan="2">Site Map</th>
        </tr>
      </thead>
      <tbody>
        {mapLinks.map((page, index) => (
          <tr key={page} className="border border-gray-800">
            <td className="py-2 px-4 text-center">
              <Link to={linkPaths[index]}>
                {page}
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SiteMap;