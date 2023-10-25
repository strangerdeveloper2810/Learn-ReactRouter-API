import React from "react";

const Header = (props) => {
  return (
    <div className="header">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb" style={{ backgroundColor: "white" }}>
          <li className="breadcrumb-item">Project</li>
          <li className="breadcrumb-item">Report Bugs</li>
          <li className="breadcrumb-item active" aria-current="page">
            Report Bugs Board
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default React.memo(Header);
