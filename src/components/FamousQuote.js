import React, { useState, useEffect } from "react";
import "./FamousQuote.css";
import * as ReactBootStrap from "react-bootstrap";

const FamousQuote = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const randomFamousQuote = () => {
    fetch("https://api.quotable.io/random?tags=technology,famous-quotes")
      .then((res) => res.json())
      .then((quote) => {
        setQuote(quote.content);
        setAuthor(quote.author);
      });
  };

  useEffect(() => {
    randomFamousQuote();
  }, []);

  let fetchNewQuote = () => {
    randomFamousQuote();
  };

  return (
    <div className="container">
      <div className="quote">
        <header>Famous Quotes</header>
        <h2>{quote}</h2>
        <h3>-{author}-</h3>
      </div>
      <br />
      <ReactBootStrap.Button className="btn" onClick={fetchNewQuote}>
         New Random Quote
      </ReactBootStrap.Button>
      <ReactBootStrap.Button href="/">Back</ReactBootStrap.Button>
    </div>
  );
};

export default FamousQuote;
