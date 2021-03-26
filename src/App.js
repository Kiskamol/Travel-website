import React from "react";
// import BlogBkk from './BlogBkk'
import Homepage from "./Homepage";
import { Switch, Route } from "react-router-dom";
import BlogBkk from "./BlogBkk";
import BlogCm from "./BlogCm";
import BlogPk from "./BlogPk";
import Subscribe from "./Subscribe";
import Aboutpage from "./Aboutpage";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/Bangkok">
          <BlogBkk />
        </Route>
        <Route path="/Chaing mai">
          <BlogCm />
        </Route>
        <Route path="/Phuket">
          <BlogPk />
        </Route>
        <Route path="/Subscribe">
          <Subscribe />
        </Route>
        <Route path="/About">
          <Aboutpage />
        </Route>
      </Switch>
    </>
  );
};

export default App;
