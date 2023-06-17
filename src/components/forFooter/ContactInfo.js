const information = [
  'Call or Text : 505-718-5499', 
  'Email Us : lampdoctorsf@gmail.com',
  'For Quotes and Reviews : Yelp'
];

const ContactInfo = () => {
  return (
    <div>
      <div className="font-bold italic">Contact Info</div>
      {information.map((piece) => (
        <div key={piece} className="py-2 px-4">
          <div className="text-center">{piece}</div>
        </div>
      ))}
    </div>
  );
}

export default ContactInfo;