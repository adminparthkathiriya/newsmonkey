import React, { Component } from "react";
import { Link, Route, Routes, Outlet } from "react-router-dom";
import Navbar from "./components/navbar";
import News from "./components/News";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Outlet />} />
          <Route path="/about" element={<h1>About Page</h1>} />
          <Route path="/business" element={<News category="business" />} />
          <Route
            path="/entertainment"
            element={<News category="entertainment" />}
          />
          <Route path="/general" element={<News category="general" />} />
          <Route path="/health" element={<News category="health" />} />
          <Route path="/science" element={<News category="science" />} />
          <Route path="/sports" element={<News category="sports" />} />
          <Route path="/technology" element={<News category="technology" />} />
        </Routes>
      </>
    );
  }
}

export default App;
