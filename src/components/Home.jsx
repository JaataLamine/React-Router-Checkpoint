import { Link } from "react-router-dom";

const styleHeading = { marginLeft: "23rem" };
const styleLink = {
  marginLeft: "30.5rem",
  color: "hsl(240, 100%, 75%)",
};

// This component define the home page
function Home() {
  return (
    <div style={{ marginTop: 150 }}>
      <h1 className="mt-5" style={styleHeading}>
        Welecome to my Movie App
      </h1>
      <Link to="/movieslist">
        <h3 className="mt-5" style={styleLink}>
          Go to movies list
        </h3>
      </Link>
    </div>
  );
}

export default Home;
