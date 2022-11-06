import "./App.css";
import { Container } from "react-bootstrap";

import { Title } from "./components/Title";
import { SearchForm } from "./components/SearchForm";
import { MovieList } from "./components/MovieList";
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);

  const addMovieToList = (movieObj) => {
    const newArg = movies.map((item) => item.imdbID !== movieObj.imdID);

    setMovies([...movies, movieObj]);
  };
  const handleOnDelete = (id) => {
    if (window.confirm("you want to delete")) {
      setMovies(movies.filter((item) => item.imdbID !== id));
    }
  };

  return (
    <div className="wrapper">
      <Container>
        <Title />
        <SearchForm addMovieToList={addMovieToList} />
        <MovieList movies={movies} handleOnDelete={handleOnDelete} />
      </Container>
    </div>
  );
}

export default App;
