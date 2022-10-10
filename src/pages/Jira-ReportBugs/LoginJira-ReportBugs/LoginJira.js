import React from "react";
import styled from "./LoginJira.module.css";
export default function LoginJira(props) {
  return (
    <div className="container mt-3 d-flex justify-content-center">
      <div className={styled.screen}>
      <h3 className="text-info fs-4 text-center mt-4">Login Jira-Report Bugs</h3>
        <div className={styled.screenContent}>
          <form className={styled.login}>
            <div className={styled.loginField}>
              <div className={styled.loginIcon}>
                <i className="fa-solid fa-user" />
              </div>
              <input
                type="text"
                className={styled.loginInput}
                placeholder="User name / Email"
              />
            </div>
            <div className={styled.loginField}>
              <div className={styled.loginIcon}>
                <i className="fa-solid fa-lock" />
              </div>
              <input
                type="password"
                className={styled.loginInput}
                placeholder="Password"
              />
            </div>
            <button className={styled.button} id={styled.loginSubmit}>
              <span>Log In Now</span>
              <div className={styled.buttonIcon}>
                <i className="fa-solid fa-chevron-right" />
              </div>
            </button>
          </form>
          <div className={styled.socialLogin}>
            <h3>log in via</h3>
            <div className={styled.socialIcons}>
              <a href="#a" className={styled.socialLoginIcon}>
                <i className="fa-brands fa-facebook" />
              </a>
              <a href="#a" className={styled.socialLoginIcon}>
                <i className="fa-brands fa-instagram" />
              </a>
              <a href="#a" className={styled.socialLoginIcon}>
                <i className="fa-brands fa-twitter" />
              </a>
            </div>
          </div>
        </div>
        <div className="screenBackground">
          <span className="screenBackgroundShape" id="screenBackgroundShap4" />
          <span className="screen BackgroundShape" id="screenBackgroundShap3" />
          <span className="screenBackgroundShape" id="screenBackgroundShap2" />
          <span className="screenBackgroundShape" id="screenBackgroundShap1" />
        </div>
      </div>
    </div>
  );
}
