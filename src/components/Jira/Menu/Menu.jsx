import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Menu = (props) => {
  const userLogin = useSelector((state) => state.UserJiraReducer.userLogin);

  return (
    <div className="menu">
      <div className="account">
        <div className="avatar">
          <img src={userLogin.avatar} alt="4.jfif" />
        </div>

        <div className="account-info">
          <p>{userLogin.name}</p>
          <p>Report bugs</p>
        </div>
      </div>

      <div className="control">
        <div>
          <i className="fa fa-credit-card" />
          <NavLink
            to="/home"
            className="text-dark"
            activeClassName="active text-primary fw-bold"
          >
            <span> Report Board</span>
          </NavLink>
        </div>

        <div>
          <i className="fa fa-cog" />
          <NavLink
            to="/projectmanagement"
            className="text-dark"
            activeClassName="active text-primary fw-bold"
          >
            <span> Project Management</span>
          </NavLink>
        </div>

        <div>
          <i className="fa fa-cog" />
          <NavLink
            to="/createproject"
            className="text-dark"
            activeClassName="active text-primary fw-bold"
          >
            <span> Create Project</span>
          </NavLink>
        </div>
      </div>

      <div className="feature">
        <div>
          <i className="fa fa-truck" />
          <span> Releases</span>
        </div>
        <div>
          <i className="fa fa-equals" />
          <span> Issues and filters</span>
        </div>
        <div>
          <i className="fa fa-paste" />
          <span> Pages</span>
        </div>
        <div>
          <i className="fa fa-location-arrow" />
          <span> Reports</span>
        </div>
        <div>
          <i className="fa fa-box" />
          <span> Components</span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Menu);
