import * as React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";

const { Sider, Content } = Layout;
const HomeTemplate: React.FC = () => {
  const [{ width, height }, setSize] = React.useState({
    width: Math.round(window.innerWidth),
    height: Math.round(window.innerHeight),
  });

  React.useEffect(() => {
    window.onresize = () => {
      setSize({
        width: Math.round(window.innerWidth),
        height: Math.round(window.innerHeight),
      });
    };
  }, []);
  return (
    <React.Fragment>
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
          <Outlet />
        </Content>
      </Layout>
    </React.Fragment>
  );
};

export default HomeTemplate;
