import React from "react";
import { Link, Route } from "react-router-dom";
import Profile from "./Profile";

export default function Profiles() {
  return (
    <div>
      <div>
        <h1>유저목록</h1>
        <ul>
          <li>
            <Link to="/profiles/conrad">conrad</Link>
          </li>
          <li>
            <Link to="/profiles/yhg0337">yhg0337</Link>
          </li>
        </ul>
      </div>
      <Route
        path="/profiles"
        exact
        render={() => <div>유저를 선택하세요</div>}
      />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
}
