import * as React from "react";
import { NavLink } from "react-router-dom";
import { withFormik, FormikProps } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import styled from "./Login.module.css";

interface FormValues {
  email: string;
  password: string;
}

const Login = (props: FormikProps<FormValues>) => {
  const { errors, handleChange, handleSubmit } = props;
  return (
    <React.Fragment>
      <div
        className="container d-flex justify-content-center"
        style={{
          background: " linear-gradient(90deg, #c7c5f4, #776bcc)",
          minHeight: "100vh",
        }}
      >
        <div className={styled.screen}>
          <h3 className="text-info fs-4 text-center mt-4">
            Login Jira-Report Bugs
          </h3>
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
            <span
              className="screenBackgroundShape"
              id="screenBackgroundShap4"
            />
            <span
              className="screen BackgroundShape"
              id="screenBackgroundShap3"
            />
            <span
              className="screenBackgroundShape"
              id="screenBackgroundShap2"
            />
            <span
              className="screenBackgroundShape"
              id="screenBackgroundShap1"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const LoginWithFormik = withFormik({
  mapPropsToValues: () => ({ email: "", password: "" }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .required("Email is required!")
      .email("Email is invalid"),
    password: Yup.string()
      .required("Password is required!")
      .min(6, "Password must have min 6 characters")
      .max(32, "Password have max 32 characters"),
  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    const { email, password } = values;
    //   props.dispatch(signinJiraReportBugAction(email, password));
  },

  displayName: "Login",
})(Login);

export default connect()(LoginWithFormik);
