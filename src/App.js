import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import Landing from "./components/Landing";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <>
          <Route exact path="/" component={Landing} />
          </>
        </Router>
      </Provider>
    );
  }
}

export default App;
