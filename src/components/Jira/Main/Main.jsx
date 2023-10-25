import React from "react";
import Content from "./Content/Content";
import Header from "./Header/Header";
import Info from "./Info/Info";

const Main = (props) => {
  return (
    <div className="main mt-3">
      <Header />
      <h3>Report Bugs Board</h3>
      <Info />
      <Content />
    </div>
  );
};

export default React.memo(Main);
