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
  console.log(movies);
  return (
    <div className="wrapper">
      <Container>
        <Title />
        <SearchForm addMovieToList={addMovieToList} />
        <MovieList movies={movies} />
      </Container>
    </div>
  );
}

export default App;
