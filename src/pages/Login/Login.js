import React, { useState } from "react";
import Swal from "sweetalert2";
export default function Login(props) {
  const [userLogin, setUserLogin] = useState({
    account: "",
    password: "",
  });
  console.log(userLogin);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserLogin({
      ...userLogin,
      [name]: value,
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if (
      userLogin.account === "cyberlearn" &&
      userLogin.password === "cyberlearn"
    ) {
      // Thành công thì chuyển về trang trước đó
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Login Success!",
      });
      // Thành công thì chuyển về trang trước đó
    //   props.history.goBack();

    // Chuyển về trang chỉ định sau khi xử lý
    // Chuyển hướng đên path tương ứng
    props.history.push("/home");

    // Replace thay đổi nội dung path tương ứng
    // props.history.replace("/home");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "username or password is wrong",
      });
      return;
    }
  };
  return (
    <form className="container" onSubmit={handleLogin}>
      <h3 className="display-4">Login</h3>
      <div className="form-group mt-3">
        <p>User Name</p>
        <input
          type="text"
          name="account"
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <div className="form-group mt-3">
        <p>Password</p>
        <input
          type="password"
          name="password"
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <div className="form-group mt-3">
        <button className="btn btn-success">Login</button>
      </div>
    </form>
  );
}
