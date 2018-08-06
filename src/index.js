import React, { Component } from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import Provider from "./Provider";
import Products from "./containers/Products";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Provider>
          <Products />
        </Provider>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("reactContext"));
registerServiceWorker();
