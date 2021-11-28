
import React, { lazy, Suspense, useState } from "react";
import "./App.css";
import {retry} from './utils/commonFunctions';
import * as am4core from "@amcharts/amcharts4/core";
import { BrowserRouter as Router,Redirect, Switch, Route } from "react-router-dom";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import Navbar from "./Navbar";
const LandingPage = lazy(() => retry(() => import('./LandingPage')));
// import Home from "./Home";
const Home = lazy(() => retry(() => import('./Home')));
// import Table from "./Table";
const Table = lazy(() => retry(() => import('./Table')));
// import About from "./About";
const About = lazy(() => retry(() => import('./About')));
// import Graph from "./Graph";
const Graph = lazy(() => retry(() => import('./Graph')));
// import PieChart from "./PieChart";
const PieChart = lazy(() => retry(() => import('./PieChart')));

am4core.useTheme(am4themes_animated);

const Reports = () => {

  const pages = [
    {
      pageLink: '/',
      view: LandingPage,
      displayName: 'LandingPage',
      showInNavbar: true,
    },
    {
      pageLink: '/home',
      view: Home,
      displayName: 'Home',
      showInNavbar: true,
    },
    {
      pageLink: '/about',
      view: About,
      displayName: 'About',
      showInNavbar: true,
    },
    {
      pageLink: '/table',
      view: Table,
      displayName: 'Table',
      showInNavbar: true,
    },
    {
      pageLink: '/graph',
      view: Graph,
      displayName: 'Graph',
      showInNavbar: false,
    },
    {
      pageLink: '/pie-chart',
      view: PieChart,
      displayName: 'PieChart',
      showInNavbar: false,
    },
  ];

  return (
    <div className="page" id="page">
      <Suspense fallback={<div />}>
      <Router>
      <Navbar />
      <Switch>
          {pages.map((page, index) => {
            return (
              <Route
                exact
                path={page.pageLink}
                render={({match}) => <page.view />}
                key={index}
              />
            );
          })}
          <Redirect to="/" />
        </Switch>
      </Router>
      </Suspense>
    </div>
  );
};

export default Reports;