import BusinessHours from "./forFooter/BusinessHours";
import SiteMap from "./forFooter/SiteMap";
import ContactInfo from "./forFooter/ContactInfo";
// Will need to import react-icons to replace fa-icons

const Footer = () => {
  return (
    <footer
      className="border-y-8 border-y-olive" 
      style={{ 
        color: "#fff",
        backgroundImage: "radial-gradient( #fff, 7%, #000 )",
        textAlign: "center"
      }}
    >
      <div className="flex flex-row">
        <SiteMap />
        <BusinessHours />
        <ContactInfo />
      </div>
      <div>Copyright and Design</div>
    </footer>
  );
};

export default Footer;