import React from "react";
import Main from "../Main/Main";

const Home = (props) => {
  return (
    <div className="jira">
      <Main />
    </div>
  );
};

export default React.memo(Home);
