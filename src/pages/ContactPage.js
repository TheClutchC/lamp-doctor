const ContactPage = () => {
  return (
    <section className="flex flex-col my-20">
      <div className="text-xl self-center w-full md:w-3/5 sm:m-10 bg-platinum bg-opacity-50 rounded-3xl">
        <div className="flex flex-row justify-center py-2 bg-primary rounded-t-3xl mb-5">
          <div className="text-2xl font-bold italic text-platinum">Contact Us</div>
        </div>
        <div className="flex flex-col items-center m-10">
          <div className="font-bold italic">Email: <a className="text-navyesque" href="mailto:lampdoctorsf@gmail.com">lampdoctorsf@gmail.com</a></div>
          <div className="font-bold italic">Call or Text: <a className="text-navyesque" href="tel:5057185499">505-718-5499</a></div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;