import "./NoMatch.css";
import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <div>
      <div className="flex flex-col items-center py-10">
        <h1 className="font-extrabold">404: Page Not Found</h1>
        <p>This page doesn't exist yet.</p>
        <Link to="/" className="bg-platinum rounded p-2 mt-2">
          Return to home page
        </Link>
      </div>

      {/* Crazy Lamp Thing For Error Page! */}
      <div className="lamp">
        <div className="pull-string"></div>
        <div className="lamp-shade">
          <div className="letters">Oops!</div>
        </div>
      </div>
    </div>
  );
};

export default NoMatch;
