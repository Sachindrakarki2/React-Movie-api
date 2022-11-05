import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Alert, Button } from "react-bootstrap";
import { MovieCard } from "./MovieCard";
import { useEffect, useState } from "react";

import { fetchData } from "../utility/axiosHelpers";
import { randomChar } from "../utility/randomGen";
export const SearchForm = ({ addMovieToList }) => {
  const [form, setForm] = useState("");
  const [movie, setMovie] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    // generate random char
    const char = randomChar();
    console.log(char);

    // and call fetch api
    const initialFetch = async () => {
      const resp = await fetchData(form);
      //set movie to state
      setMovie(resp.data);
    };
    initialFetch();
  }, {});

  // get the  form data while typing

  const handleOnChange = (e) => {
    const { value } = e.target;
    setForm(value);
  };

  // when form is submitted call the api with search data and get the movie details
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    error && setError("");
    movie.imdbID && setMovie({});

    try {
      const resp = await fetchData(form);
      if (resp.data.Response === "True") {
        setMovie(resp.data);
      } else {
        setError(resp.data.Error);
      }
    } catch (error) {
      console.log(error);
      setError("Error occure");
    }
  };

  const handleOnAddToList = (cat) => {
    console.log(cat);
    addMovieToList({ ...movie, cat });
    setMovie({});
    setForm("");
  };
  // display movie data in our ui
  return (
    <Form className="py-3" onSubmit={handleOnSubmit}>
      <Row>
        <Col>
          <Form.Control
            value={form}
            placeholder="Movie name ..."
            required
            onChange={handleOnChange}
          />
        </Col>
        <Col>
          <Button type="submit"> Search</Button>
        </Col>
      </Row>
      <Row className="py-5 d-flex justify-content-center">
        {movie.imdbID && <MovieCard movie={movie} func={handleOnAddToList} />}
        {error && <Alert variant="danger">{error}</Alert>}
      </Row>
    </Form>
  );
};
