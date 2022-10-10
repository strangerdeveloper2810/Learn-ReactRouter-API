import React from "react";
import styled from "./LoginJira.module.css";
import { withFormik } from "formik";
import * as Yup from "yup"
function LoginJira(props) {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } = props;
  return (
    <div
      className="container d-flex justify-content-center"
      style={{
        background: " linear-gradient(90deg, #c7c5f4, #776bcc)",
        minHeight: 711,
      }}
    >
      <div className={styled.screen}>
        <h3 className="text-info fs-4 text-center mt-4">{props.displayName}</h3>
        <div className={styled.screenContent}>
          <form className={styled.login} onSubmit={handleSubmit}>
            <div className={styled.loginField}>
              <div className={styled.loginIcon}>
                <i className="fa-solid fa-user" />
              </div>
              <input
                type="text"
                className={styled.loginInput}
                placeholder="User name / Email"
                name="email"
                onChange={handleChange}
              />
              <p className="text-danger">{errors.email}</p>
            </div>
            <div className={styled.loginField}>
              <div className={styled.loginIcon}>
                <i className="fa-solid fa-lock" />
              </div>
              <input
                type="password"
                className={styled.loginInput}
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
              <p className="text-danger">{errors.password}</p>
            </div>
            <button className={styled.button} id={styled.loginSubmit} type="submit">
              <span>Log In Now</span>
              <div className={styled.buttonIcon}>
                <i className="fa-solid fa-chevron-right" />
              </div>
            </button>
          </form>

          <div className={styled.socialLogin}>
            <button className="btn btn-outline-danger">
              <span>Register</span>
            </button>
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

const LoginJiraReportBugsWithFormik = withFormik({
  mapPropsToValues: () => ({ email: "", password: "" }),
  validationSchema: Yup.object().shape({
    email: Yup.string().required("Email is required!").email("Email is invalid"),
    password:  Yup.string().min(6, "Password must have min 6 characters").max(32, "Password have max 32 characters")
  }) ,
  handleSubmit: (values, { setSubmitting }) => {
    console.log(values);
  },

  displayName: "Login Jira-Report Bugs",
})(LoginJira);

export default LoginJiraReportBugsWithFormik;
