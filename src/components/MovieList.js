import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Row, Col } from "react-bootstrap";
import { MovieCard } from "./MovieCard";
import { BtnGroup } from "./BtnGroup";

export const MovieList = ({ movies }) => {
  const [display, setDisplay] = useState([movies]);

  useEffect(() => {
    //update the local State
    setDisplay(movies);
  }, [movies]);
  //render all teh time  ->without dependency array
  //render one time and only
  // render if some specific props updates
  const handleOnFilter = (str) => {
    console.log(str);
    str === "all"
      ? setDisplay(movies)
      : setDisplay(movies.filter((item) => item.cat === str));
  };

  return (
    <div className="bg-dark p-3 rounded">
      <Row>
        <Col>
          <BtnGroup handleOnFilter={handleOnFilter} />
          <div className="py-5">{display.length} Movies Found!</div>
        </Col>
      </Row>
      <Row>
        <Col className="mt-3 d-flex justify-content-around flex-wrap ">
          {display.map((item) => (
            <MovieCard key={item.imdbID} movie={item} />
          ))}
        </Col>
      </Row>
    </div>
  );
};
