import React from "react";
import Table from "./Table";
import "./Home.css";
import * as ReactBootStrap from "react-bootstrap";

const HomePage = (props) => {
  return (
    <div className="Home">
      <h1>Breaking Bad Quotes</h1>
      <ReactBootStrap.Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th colSpan={2}>Quote</th>
            <th>Author</th>
          </tr>
        </thead>
        <Table
          key={props.data}
          id={props.data}
          quote={props.data}
          author={props.data}
        ></Table>
      </ReactBootStrap.Table>
      <ReactBootStrap.Button href="/famousQuote">
        Get Random Famous Quote
      </ReactBootStrap.Button>
    </div>
  );
};

export default HomePage;
