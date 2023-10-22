import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import MovieList from "./components/MovieList";
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";
import "./App.css";

const App = () => {
  return (
    <>
      <NavBar />
      <div className="app container-fluid">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movieslist" element={<MovieList />} />
          <Route path="/movieslist/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
