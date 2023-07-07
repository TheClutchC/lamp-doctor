import { NavLink } from "react-router-dom";
import { GrHome, GrCircleInformation, GrServices, GrContactInfo   } from "react-icons/gr";

const mapLinks = [
  { title: 'Home', icon: GrHome },
  { title: 'About', icon: GrCircleInformation },
  { title: 'Services', icon: GrServices },
  { title: 'Contact', icon: GrContactInfo }
];

const SiteMap = () => {
  const linkPaths = ['/', '/about', '/services', '/contact'];

  return (
    <div>
      <div className="text-center font-bold italic">Site Map</div>
      {mapLinks.map((page, index) => (
        <div key={page.title} className="inline-flex py-2 px-4">
          <div>
            <NavLink className="sitemap" to={linkPaths[index]}>
              <page.icon className="text-center text-2xl m-auto"/> 
              <span>{page.title}</span>
            </NavLink>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SiteMap;