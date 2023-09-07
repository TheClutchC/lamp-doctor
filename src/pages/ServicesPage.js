const ServicesPage = () => {
  return (
    <section className="flex flex-col my-20">
      <div className="text-xl self-center m-3 md:w-3/5 border-8 border-platinum bg-platinum bg-opacity-50 rounded-3xl">
        <div className="flex flex-row justify-center py-2 bg-primary rounded-t-2xl mb-5">
          <div className="text-2xl font-bold italic text-platinum">Services Offered</div>
        </div>
        <div className="m-10">
          <p>
            Established in 2022, Lamp Doctor is a trusted lamp repair company
            known for its exceptional craftsmanship and personalized customer
            service. We specialize in breathing new life into all kinds of lamps,
            from novelty and antique to standard fixtures.
          </p>
          <br />
          <ul>
            <li>Electrical Inspection</li>
            <li>Electrical Inspection</li>
          </ul>
          <br />
          <p>
            At Lamp Doctor, we believe in the value of excellent communication. We
            strive to keep our customers informed every step of the way, from
            initial assessment to completion. Our prompt communication ensures
            that you are always aware of the progress and expected timelines for
            your lamp repair.
          </p>
          <br />
          <p>
            In addition to our repair services, we also offer light installations,
            helping you create the perfect ambiance in your space. Whether you
            need assistance with residential lighting or require professional
            lighting solutions for commercial settings, we have you covered.
          </p>
          <br />
          <p>
            Our core values of honesty, integrity, and workmanship guide us in
            every aspect of our business. We take pride in delivering transparent
            and reliable services to our customers. You can trust us to provide
            accurate assessments, fair pricing, and exceptional results.
          </p>
          <br />
          <p>
            Don't just take our word for it. Check out our customer reviews on
            Yelp and hear from satisfied customers who have experienced our
            top-notch lamp repair services firsthand.
          </p>
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