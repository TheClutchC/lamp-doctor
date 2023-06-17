import BusinessHours from "./forFooter/BusinessHours";
import SiteMap from "./forFooter/SiteMap";
import ContactInfo from "./forFooter/ContactInfo";
// Will need to import react-icons to replace fa-icons

const Footer = () => {
  return (
    <div>
      <footer
        className="border-y-8 border-y-olive text-center backdrop-brightness-90"
      >
        <div className="grid sm:grid-cols-3 gap-4">
          <SiteMap />
          <BusinessHours />
          <ContactInfo />
        </div>
        <div>Copyright and Design</div>
      </footer>
    </div>
  );
};

export default Footer;