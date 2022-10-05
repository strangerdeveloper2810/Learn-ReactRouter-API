import React from "react";
import styling from "./LoadingComponent.module.css";
import { useSelector } from "react-redux";
export default function LoadingComponent(props) {
  const { isLoading } = useSelector((state) => state.LoadingReducer);
  if (isLoading) {
    return (
      <div className={styling.bgLoading}>
        <img src="./img/loading.gif" alt="loading" />
      </div>
    );
  } else {
    return "";
  }
}
