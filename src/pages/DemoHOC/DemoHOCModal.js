import React from "react";
import { useDispatch } from "react-redux";
import Login from "../Login/Login";
import Register from "../Register/Register";
import SlideDown from "./SlideDown";
export default function DemoHOCModal(props) {
  const dispatch = useDispatch();
  const RegisterWithSlideDown = new SlideDown(Register);

  // Sử dụng dưới dạng thẻ :
  const LoginWithSlideDown = function() {
    return new SlideDown(Login)
  }
  return (
    <div className="mt-3">
      <button
        type="button"
        className="btn btn-primary btn-lg ms-3 me-3"
        data-bs-toggle="modal"
        data-bs-target="#modalId"
        onClick={() => {
          dispatch({
            type: "OPEN_FORM",
            Component: <Login />,
          });
        }}
      >
        Đăng Nhập
      </button>

      <button
        type="button"
        className="btn btn-primary btn-lg"
        data-bs-toggle="modal"
        data-bs-target="#modalId"
        onClick={() => {
          dispatch({
            type: "OPEN_FORM",
            Component: <Register />,
          });
        }}
      >
        Đăng Ký
      </button>

     {/* {LoginWithSlideDown} */}

     {/* {RegisterWithSlideDown} */}

     {/* Sử dụng dưới dạng thẻ */}

     <LoginWithSlideDown/>
    </div>
  );
}
