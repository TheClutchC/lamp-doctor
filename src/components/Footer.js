import BusinessHours from "./forFooter/BusinessHours";
import SiteMap from "./forFooter/SiteMap";
// Will need to import react-icons to replace fa-icons

const Footer = () => {
  return (
    <div 
      className="flex flex-row" 
      style={{ 
        color: "#fff",
        backgroundImage: "radial-gradient( #fff, 7%, #000 )",
        textAlign: "center"
      }}
    >
      <SiteMap />
      <div>Contact Info</div>
      <BusinessHours />
      <div>Copyright and Design</div>
    </div>
  );
};

export default Footer;