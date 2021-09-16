import React, { useEffect, useState } from "react";
import "./App.css";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);
const PieChart = () => {
  const [piechartData, setPieChartData] = useState([]);
  // Create chart instance
  const fetchData = async () => {
    // Adding data fetched from fake api
    let response = await fetch(
      "https://mocki.io/v1/ffbdd52e-e44f-4bbd-950c-12cab418b363"
    );
    let user = await response.json();
    setPieChartData(user);
    // Add and configure Series
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    if (piechartData.length) {
      let pieChart = am4core.create("pieChart", am4charts.PieChart);
      pieChart.data = piechartData;
      let pieSeries = pieChart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = "litres";
      pieSeries.dataFields.category = "country";
    }
  }, [piechartData])
  return (
    <div className="page" id="page">
      <div className="wrapper">
        <div id="pieChart" style={{ width: "100%", height: "500px" }}></div>
      </div>
    </div>
  );
};
export default PieChart;