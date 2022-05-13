import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Appbar from "./components/Appbar.js";
import Routes from "./routes/index";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Appbar />
        <Routes />
      </React.Fragment>
    );
  }
}

export default App;
