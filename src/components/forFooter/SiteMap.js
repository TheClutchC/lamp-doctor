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
    <div>
      <div className="font-bold italic">Site Map</div>
      {mapLinks.map((page, index) => (
        <div key={page} className="py-1 px-4">
          <div className="text-center">
            <Link to={linkPaths[index]}>
              {page}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SiteMap;