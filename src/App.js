import React from "react";
import "./App.scss";
import { Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";
import Profiles from "./Profiles";
import HistorySample from "./HistorySample";
import Board from "./Board";

function App({ history }) {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile/s">유저정보</Link>
        </li>
        <li>
          <Link to="/profiles/">유저목록</Link>
        </li>
        <li>
          <Link to="/board">게시판</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/">버튼</Link>
        </li>
        <Route path="/" component={HistorySample} />
      </ul>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
      <Route path="/profile/:username" component={Profile} />
      <Route path="/profiles" component={Profiles} />
      <Route path="/board" component={Board} />
    </div>
  );
}

export default App;
