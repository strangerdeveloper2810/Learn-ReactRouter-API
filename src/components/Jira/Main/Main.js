import React from "react";
import Content from "./Content/Content";
import Header from "./Header/Header";
import Info from "./Info/Info";

export default function Main(props) {
  return (
    <div className="main mt-3">
      <Header />
      <h3>Cyber Board</h3>
      <Info />
      <Content />
    </div>
  );
}
