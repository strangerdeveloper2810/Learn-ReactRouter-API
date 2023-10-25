import React from "react";
import { useSelector } from "react-redux";
const Home = () => {
  const userLogin = useSelector((state) => state.UserJiraReducer.userLogin);
  return (
    <div>
      {userLogin?.name}
      <img src={userLogin?.avatar} alt={userLogin.name} />
    </div>
  );
};

export default React.memo(Home);
