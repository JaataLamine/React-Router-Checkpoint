import { Link } from "react-router-dom";

// The MovieCard component define the design of each movie card
const MovieCard = ({ id, title, posterURL, rating }) => {
  return (
    <div className="card-group">
      <div className="col">
        <div className="card">
          <Link
            to={`/movieslist/${id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <img
              className="card-img-top"
              style={{ height: "23rem" }}
              src={posterURL}
              alt={title}
            />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">Rating: {rating}</p>
              <div className="btn btn-primary">View description</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
