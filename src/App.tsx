import Login from "Pages/Login";
import PageNotFound from "Pages/PageNotFound";
import Register from "Pages/Register";
import UserLoginTemplate from "Templates/UserLoginTemplate";
import React from "react";
import { Routes, Route } from "react-router-dom";
const App: React.FC = () => {
  return (
    <Routes>
      <Route path="" element={<UserLoginTemplate />}>
        <Route index element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default App;
