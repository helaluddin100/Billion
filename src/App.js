import React from "react";
import Home from "./component/home";
import Header from "./component/Header";
import Gallery from "./component/gallery";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/gallery">
            <Gallery />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
