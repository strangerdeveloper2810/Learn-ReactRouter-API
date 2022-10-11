import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import Menu from "../../components/Jira/Menu/Menu";

import Modal from "../../components/Jira/Modal/Modal";
import Sidebar from "../../components/Jira/SideBar/Sidebar";

const JiraTemplate = (props) => {
  const { Component, ...restParam } = props;
  return (
    <Route
      {...restParam}
      render={(propsRoute) => {
        return (
          <Fragment>
            <div className="jira">
              <Sidebar />

              <Menu />

              <Component {...propsRoute} />
            </div>

            <Modal />
          </Fragment>
        );
      }}
    />
  );
};

export default JiraTemplate;
