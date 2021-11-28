import React, { useEffect, useState } from "react";
import "./App.css";
import * as am4core from "@amcharts/amcharts4/core";

import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

const Table = () => {
  const [tableData, setTableData] = useState([]);

  //Fetch call for table data on did mount
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // Adding data fetched from fake api
    let response = await fetch(
    "https://jsonplaceholder.typicode.com/comments"
    );
    let user = await response.json();
    // Add and configure Series
    setTableData(user);
  };

  return (
    <div className="page" id="page">
      <table id="newtable">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(({ id, name, email, body }) => (
            <tr>
              <td>{id}</td>
              <td>{name}</td>
              <td>{email}</td>
              <td>{body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
