import { Layout } from "antd";
import React, { Fragment } from "react";
import { Route } from "react-router";
const { Sider, Content } = Layout;
export const UserLoginTemplate = (props) => {
  let { Component, ...restRoute } = props;
  return (
    <Route
      {...restRoute}
      render={(propsRoute) => {
        return (
          <Fragment>
            <Layout>
              <Sider width={window.innerWidth/1.75} style={{height: window.innerHeight, backgroundImage: 'url(https://picsum.photos/2000)', backgroundSize: "100%"}}></Sider>
              <Content>
                <Component {...propsRoute} />
              </Content>
            </Layout>
          </Fragment>
        );
      }}
    />
  );
};
