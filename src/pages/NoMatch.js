import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <div style={{ padding: 20 }}>
      <h2>404: Page Not Found</h2>
      <p>This page doesn't exist yet.</p>
      <Link to="/" style={{ textDecoration: "underline", color: "blue" }}>Go to the home page</Link>
    </div>
  );
}

export default NoMatch;