const ServicesPage = () => {
  return (
    <section className="flex flex-col my-20">
      <div className="text-xl self-center m-3 md:w-3/5 border-8 border-platinum bg-platinum bg-opacity-50 rounded-3xl">
        <div className="flex flex-row justify-center py-2 bg-primary rounded-t-2xl mb-5">
          <div className="text-2xl font-bold italic text-platinum">Services Offered</div>
        </div>
        <div className="m-10">
          <ul>
            <li>-Electrical Inspection</li>
            <li>-Lamp Repair</li>
            <li>-Light Installations</li>
          </ul>
          <br />
          <p>
            To request a service quote, you can do so through the company <a href="https://www.yelp.com/biz/the-lamp-doctor-santa-fe">Yelp</a> page or through our service portal <a href="https://servreq.onrender.com/">here</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;