import React, { Component } from "react";
import Navbar from "./components/navbar";
import News from "./components/News";
import Newsitem from "./components/Newsitem";
export default class App extends Component {
  render() {
    return (
      <div>
        {<Navbar />}
        <News />
        <Newsitem style={{ width: "18rem" }} />
      </div>
    );
  }
}
