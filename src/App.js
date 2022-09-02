import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Header from "./components/Header";
import Features from "./components/Features";
import Services from "./components/Services";
import Subscribe from "./components/Subscribe";

function App() {
  return (
    <div className="App">
      <Header />
      <div>Features</div>
      <p>Here are some features of the Software</p>
      <Features />
      <Services />
      <Subscribe />
    </div>
  );
}

export default App;
