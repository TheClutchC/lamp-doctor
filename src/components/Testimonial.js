import { AiFillStar } from "react-icons/ai";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

const Testimonial = () => {
  return (
    <>
      <div className="testimonials-container flex flex-col items-center">
        <div className="bg-platinum rounded-3xl text-center sm:w-4/5 my-20 p-2">
          <div className="flex flex-row justify-center py-2 bg-primary text-platinum rounded-t-3xl">
            <div className="text-2xl font-bold italic">Customer Testimonials</div>
          </div>
          <div className="">
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
          </div>
          <div className="flex flex-col justify-around items-center bg-shadowesque bg-opacity-80 rounded-b-3xl p-2">
            <div className="text-platinum font-bold">Jennifer W.</div>
            <div className="star-rating flex flex-row justify-center items-center px-2 py-2 rounded-3xl">
              <AiFillStar color="orange" />
              <AiFillStar color="orange" />
              <AiFillStar color="orange" />
              <AiFillStar color="orange" />
              <AiFillStar color="orange" />
            </div>
            <div className="review-date text-platinum font-bold pb-2">4/7/2023</div>
            <div><a className="text-navyesque hover:text-primary" href="https://www.yelp.com/biz/the-lamp-doctor-santa-fe?osq=Lamp+Repair#reviews">Read Full Review on Yelp {'>>'}</a></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
