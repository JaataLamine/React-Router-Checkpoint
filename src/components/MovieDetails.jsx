import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import movieJSON from "../assets/movies.json";

const style = { fontSize: "1.2rem" };
const styleContainer = { marginLeft: 150, marginTop: -20 };

// In this component we define the description of
// each movie and a link to the corresponding trailer
function MovieDetails() {
  const [movie, setMovie] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setMovie(movieJSON[id]);
  }, [id]);

  return (
    <div className="container">
      <button
        className="btn btn-info  mt-3 mb-3 col"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
      <div style={styleContainer}>
        <h2 className="col">{movie.title}</h2>
        <div className="card mb-3 cardMovie" style={{ maxWidth: 800 }}>
          <div className="row g-0">
            <div className="col-md-3" style={{ width: 300 }}>
              {movie.posterURL && (
                <img
                  src={`../../public/${movie.posterURL}`}
                  style={{ width: 300, height: 400 }}
                  alt={movie.title}
                  className="img-fluid rounded-start"
                />
              )}
            </div>
            <div
              className="col-md-8"
              style={{ width: 480, marginTop: 40, paddingLeft: 10 }}
            >
              <div className="card-body">
                <h3 className="card-title">Title: {movie.title}</h3>
                <p className="card-text" style={style}>
                  <b>Description:</b> {movie.description}
                </p>
                <p className="card-text" style={style}>
                  <b>Rate:</b> {movie.rating}
                </p>
                <Link to={movie.trailer} style={style}>
                  See the trailer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
