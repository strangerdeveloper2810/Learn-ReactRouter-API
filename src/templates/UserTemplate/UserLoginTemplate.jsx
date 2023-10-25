import { Layout } from "antd";
import React, { Fragment, useState, useEffect } from "react";
import { Route } from "react-router";
const { Sider, Content } = Layout;
const UserLoginTemplate = (props) => {
  let { Component, ...restRoute } = props;
  const [{ width, height }, setSize] = useState({
    width: Math.round(window.innerWidth),
    height: Math.round(window.innerHeight),
  });

  useEffect(() => {
    window.onresize = () => {
      setSize({
        width: Math.round(window.innerWidth),
        height: Math.round(window.innerHeight),
      });
    };
  }, []);
  return (
    <Route
      {...restRoute}
      render={(propsRoute) => {
        return (
          <Fragment>
            <Layout>
              <Sider
                width={width / 2}
                style={{
                  height: height,
                  backgroundImage: `url(https://picsum.photos/${Math.round(
                    width / 2
                  )}/${Math.round(height)})`,
                  backgroundSize: "100%",
                }}
              ></Sider>
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

export default React.memo(UserLoginTemplate);
