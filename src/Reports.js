
import React, { useEffect, useState } from "react";
import "./App.css";
import * as am4core from "@amcharts/amcharts4/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import Navbar from "./Navbar";
import Home from "./Home";
import Table from "./Table";
import About from "./About";
import Graph from "./Graph";
import PieChart from "./PieChart";

am4core.useTheme(am4themes_animated);

const Reports = () => {
  const [tableData, setTableData] = useState([]);

  //Fetch call for table data on did mount
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((json) => setTableData(json));
  }, []);

  return (
    <div className="page" id="page">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/table" component={Table} />
          <Route path="/graph" component={Graph} />
          <Route path="/pie-chart" component={PieChart} />
        </Switch>
      </Router>
    </div>
  );
};

export default Reports;