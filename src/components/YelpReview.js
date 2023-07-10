// import React, { useEffect } from 'react';

const YelpReview = () => {
  //   useEffect(() => {
  //     const script = document.createElement('script');
  //     script.src = 'https://www.yelp.com/embed/widgets.js';
  //     script.type = 'text/javascript';
  //     script.async = true;
  //     document.body.appendChild(script);

  //     return () => {
  //       document.body.removeChild(script);
  //     };
  //   }, []);

  //   return (
  //     <div>
  //       <span className="yelp-review" data-review-id="XqCPhVuN89SJfcizXnL5FA" data-hostname="www.yelp.com" />
  //       <br />
  //       <span className="yelp-review" data-review-id="XqCPhVuN89SJfcizXnL5FA" data-hostname="www.yelp.com" />
  //     </div>
  //   );
  return (
    <>
      <div className="flex flex-row justify-center">
        <img
          className="homePagePhoto1 h-auto w-1/3"
          src={require("../images/LD-1.jpg")}
          alt={"Lamp"}
        />
      </div>
      <div className="bg-platinum p-4 m-10 rounded-3xl">
        <blockquote>
          Sebastian is an invaluable resource for us as Interior Designers!! He
          can fix any light fixture, lamp, chandelier etc or convert any object
          into a lamp. Incredibly friendly and easy going and reasonable!!
          Highly Recommend!!
        </blockquote>
        <div className="text-right font-semibold">- Jennifer W.</div>
      </div>
    </>
  );
};

export default YelpReview;
