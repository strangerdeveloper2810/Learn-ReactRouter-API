import React from "react";
import styled from "./LoginJira.module.css";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { NavLink } from "react-router-dom";
import { validationSchema } from "./validation/ValidationSchema";
import { signinJiraReportBugAction } from "../../../redux/actions/JiraActions/JiraReportBugAction";
const LoginJira = (props) => {
  const dispatch = useDispatch();
  const handleLogin = React.useCallback(
    (values) => {
      const { email, password } = values;
      dispatch(signinJiraReportBugAction(email, password));
    },
    [dispatch]
  );
  const formikBag = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: handleLogin,
  });
  return (
    <div
      className="container d-flex justify-content-center"
      style={{
        background: " linear-gradient(90deg, #c7c5f4, #776bcc)",
        minHeight: 711,
      }}
    >
      <div className={styled.screen}>
        <h3 className="text-info fs-4 text-center mt-4">
          Login Jira-Report Bugs
        </h3>
        <div className={styled.screenContent}>
          <form className={styled.login} onSubmit={formikBag.handleSubmit}>
            <div className={styled.loginField}>
              <div className={styled.loginIcon}>
                <i className="fa-solid fa-user" />
              </div>
              <input
                type="text"
                className={styled.loginInput}
                placeholder="User name / Email"
                name="email"
                value={formikBag.values.email}
                onBlur={formikBag.handleBlur}
                onChange={formikBag.handleChange}
              />
              <p className="text-danger">{formikBag.errors.email}</p>
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
                value={formikBag.values.password}
                onBlur={formikBag.handleBlur}
                onChange={formikBag.handleChange}
              />
              <p className="text-danger">{formikBag.errors.password}</p>
            </div>
            <button
              className={styled.button}
              id={styled.loginSubmit}
              type="submit"
            >
              <span>Log In Now</span>
              <div className={styled.buttonIcon}>
                <i className="fa-solid fa-chevron-right" />
              </div>
            </button>
          </form>

          <div className={styled.socialLogin}>
            <NavLink to="/register">
              <button className="btn btn-outline-danger mt-3">
                <span>Register</span>
              </button>
            </NavLink>

            <div className={styled.socialIcons}>
              <span className={styled.socialLoginIcon}>
                <i className="fa-brands fa-facebook" />
              </span>
              <span className={styled.socialLoginIcon}>
                <i className="fa-brands fa-instagram" />
              </span>
              <span className={styled.socialLoginIcon}>
                <i className="fa-brands fa-twitter" />
              </span>
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
};

export default React.memo(LoginJira);
