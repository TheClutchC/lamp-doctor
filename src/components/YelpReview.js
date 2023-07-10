import { AiFillStar } from "react-icons/ai";

const YelpReview = () => {
  return (
    <>
      <div className="flex flex-row justify-center pt-10">
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
        <div className="flex flex-row justify-between mt-5">
          <div className="flex flex-row bg-shadowesque items-center px-1">
            <AiFillStar color="orange" />
            <AiFillStar color="orange" />
            <AiFillStar color="orange" />
            <AiFillStar color="orange" />
            <AiFillStar color="orange" />
          </div>
          <div>
            <b>- Jennifer W. , </b>
            <i>
              <a
                style={{ color: "blue" }}
                href="https://www.yelp.com/biz/the-lamp-doctor-santa-fe?osq=Lamp+Repair#reviews"
              >
                Yelp
              </a>
            </i>
          </div>
        </div>
      </div>
    </>
  );
};

export default YelpReview;
