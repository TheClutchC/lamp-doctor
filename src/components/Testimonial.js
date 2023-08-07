import { AiFillStar } from "react-icons/ai";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

const Testimonial = () => {
  return (
    <>
      <div className="testimonials-container flex flex-col items-center">
        <div className="bg-platinum bg-opacity-50 rounded-3xl text-center sm:w-4/5 my-20">
          <div className="flex flex-row justify-center p-5 bg-shadowesque rounded-t-3xl mb-5">
            <div className="text-xl font-bold italic text-platinum">Customer Testimonials</div>
          </div>
          <div className="flex flex-row justify-start ml-5">
            <ImQuotesLeft className="text-shadowesque text-3xl"/>
          </div>
          <div className="text-2xl mx-5 md:mx-20">
            <p>
              Sebastian is an invaluable resource for us as Interior Designers!! He
              can fix any light fixture, lamp, chandelier etc or convert any object
              into a lamp. Incredibly friendly and easy going and reasonable!!
              Highly Recommend!!
            </p>
          </div>
          <div className="flex flex-row justify-end mr-5">
            <ImQuotesRight className="text-shadowesque text-3xl"/>
          </div>
          <div className="flex flex-col justify-around items-center bg-greenesque bg-opacity-50 rounded-b-3xl p-2">
            <div className="text-xl font-bold pb-2">Jennifer W.</div>
            <div className="star-rating flex flex-row justify-center items-center px-2 py-2 rounded-3xl" style={{ backgroundColor: "white" }}>
              <AiFillStar color="orange" />
              <AiFillStar color="orange" />
              <AiFillStar color="orange" />
              <AiFillStar color="orange" />
              <AiFillStar color="orange" />
            </div>
            <div className="review-date text-xl font-bold pt-2">4/7/2023</div>
            <div><a className="text-navyesque hover:text-skybluesque" href="https://www.yelp.com/biz/the-lamp-doctor-santa-fe?osq=Lamp+Repair#reviews">Read Full Review on Yelp {'>>'}</a></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
