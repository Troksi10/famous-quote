import React, { useState, useEffect, Fragment } from "react";

const Table = () => {
  const [dataTable, setDataTable] = useState([]);

  //https://api.breakingbadquotes.xyz/v1/quotes/5"

  useEffect(() => {
    fetch("https://api.breakingbadquotes.xyz/v1/quotes/5")
      .then((data) => data.json())
      .then((data) => setDataTable(data));
  }, []);

  const data = dataTable.map((dataTable, index) => {
    return (
      <tbody key={index}>
        <tr key={index}>
          <th key={index}>{index + 1}</th>
          <th key={index} colSpan={2}>
            {dataTable.quote}
          </th>
          <th key={index}>{dataTable.author}</th>
        </tr>
      </tbody>
    );
  });

  return <Fragment>{data}</Fragment>;
};

export default Table;
