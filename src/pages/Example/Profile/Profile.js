import React from "react";
import { Redirect } from "react-router-dom";
import Swal from "sweetalert2";
export default function Profile(props) {
  if (localStorage.getItem("userLogin")) {
    return <div>Đây là trang Profile</div>;
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "You need to log in to your account to view your profile ",
    });
    return <Redirect to="/login"/>
  }
}
