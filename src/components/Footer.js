import BusinessHours from "./forFooter/BusinessHours";
import SiteMap from "./forFooter/SiteMap";
import ContactInfo from "./forFooter/ContactInfo";
import CopyrightSection from "./forFooter/CopyrightSection";

const Footer = () => {
  return (
    <footer id="footer" className="text-center p-2 bg-platinum">
      <div className="grid sm:grid-cols-3 gap-4">
        <SiteMap />
        <BusinessHours />
        <ContactInfo />
      </div>
      <CopyrightSection />
    </footer>
  );
};

export default Footer;
