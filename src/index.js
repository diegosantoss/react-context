import React, { Component } from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

import { Config } from "./containers/Config";

class App extends Component {
  render() {
    return <Config />;
  }
}

ReactDOM.render(<App />, document.getElementById("reactContext"));
registerServiceWorker();
