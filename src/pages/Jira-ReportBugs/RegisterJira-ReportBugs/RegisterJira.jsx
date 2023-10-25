import React from "react";
import styled from "./RegisterJira.module.css";
import { withFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { signupJiraReportBugAction } from "../../../redux/actions/JiraActions/JiraReportBugAction";
const RegisterJira = (props) => {
  const { errors, handleChange, handleSubmit } = props;
  return (
    <div className={styled.wrapper}>
      <form className={styled.formRight} onSubmit={handleSubmit}>
        <h2 className="text-uppercase">Create Account </h2>
        <div className="row">
          <div className="col-sm-6 mb-3">
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              className={styled.inputField}
              required
              onChange={handleChange}
            />
            <p className="text-danger">{errors.name}</p>
          </div>

          <div className="col-sm-6 mb-3">
            <label>Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              className={styled.inputField}
              required
              onChange={handleChange}
            />
            <p className="text-danger">{errors.phoneNumber}</p>
          </div>
        </div>
        <div className="mb-3">
          <label>Your Email</label>
          <input
            type="email"
            className={styled.inputField}
            name="email"
            required
            onChange={handleChange}
          />
          <p className="text-danger">{errors.email}</p>
        </div>

        <div className="row">
          <div className="col-sm-12 mb-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              id="pwd"
              className={styled.inputField}
              required
              onChange={handleChange}
            />
            <p className="text-danger">{errors.password}</p>
          </div>
        </div>
        <div className="mb-3">
          <label className="option">
            I agree to the <span>Terms and Conditions</span>
            <input type="checkbox" defaultChecked />
            <span className="checkmark" />
          </label>
        </div>
        <div className={styled.formField}>
          <button type="submit" className="btn btn-outline-danger">
            Create Account
          </button>
        </div>
        <p className="text-success mt-4">
          Already have an account?{" "}
          <NavLink to="/login">
            <button className="btn btn-outline-success ms-4">Login here</button>
          </NavLink>
        </p>
      </form>
    </div>
  );
};

const RegisterJiraReportBugsWithFormik = withFormik({
  mapPropsToValues: () => ({
    email: "",
    password: "",
    name: "",
    phoneNumber: "",
  }),

  validationSchema: Yup.object().shape({
    email: Yup.string()
      .required("Email is required!")
      .email("Email is invalid"),

    password: Yup.string()
      .required("Password is required!")
      .min(6, "Password must have min 6 characters")
      .max(32, "Password have max 32 characters"),
    name: Yup.string().required("Name is required!"),
    phoneNumber: Yup.string()
      .required("Phone Number  is required!")
      .max(10, "Phone Number have max 10 characters"),
  }),

  handleSubmit: (values, { props, setSubmitting }) => {
    const { email, password, name, phoneNumber } = values;
    props.dispatch(
      signupJiraReportBugAction(email, password, name, phoneNumber)
    );
  },
})(RegisterJira);

export default connect()(RegisterJiraReportBugsWithFormik);
