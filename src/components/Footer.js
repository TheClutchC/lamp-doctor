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
      <div>SiteMap</div>
      <div>Contact Info</div>
      <div>Business Hours</div>
      <div>Copyright and Design</div>
    </div>
  );
};

export default Footer;