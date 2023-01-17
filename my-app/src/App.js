import React from "react";
import "./index.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {

  return (
    <div className="app--container">
      <Header />
      <Main />
      <Footer className="" />
    </div>
  );
}
