// import { AiFillStar } from "react-icons/ai";

const YelpReview = () => {
  return (
    <>
      <div className="flex flex-row justify-start p-10">
        <img
          className="homePagePhoto1 h-auto w-1/6"
          src={require("../images/LD-1.jpg")}
          alt={"Lamp"}
        />
      </div>
      {/* <div className="flex flex-col items-center">
        <div className="bg-platinum px-5 py-5 rounded-3xl text-center w-1/2">
          <blockquote>
            Sebastian is an invaluable resource for us as Interior Designers!! He
            can fix any light fixture, lamp, chandelier etc or convert any object
            into a lamp. Incredibly friendly and easy going and reasonable!!
            Highly Recommend!!
          </blockquote>
          <div className="flex flex-row justify-center mt-5">
            <div className="flex flex-row bg-shadowesque items-center px-1 mr-5">
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
                  style={{ color: "blue", fontWeight: "bold" }}
                  href="https://www.yelp.com/biz/the-lamp-doctor-santa-fe?osq=Lamp+Repair#reviews"
                >
                  Yelp
                </a>
              </i>
            </div>
          </div>
        </div>
      </div> */}
      <div className="flex flex-row justify-center">
        <div className="bg-platinum m-5 rounded-3xl text-center md:w-3/5">
          <img 
            className="homePagePhoto1 h-auto w-full rounded-3xl"
            src={require("../images/Y-Review1.jpg")}
            alt={"Yelp Review"}
          />
        </div>
      </div>
    </>
  );
};

export default YelpReview;
