import React from "react";
import styled from "./RegisterJira.module.css";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import { signupJiraReportBugAction } from "../../../redux/actions/JiraActions/JiraReportBugAction";
import { validationSchema } from "./validation/validationSchema";
const RegisterJira = (props) => {
  const dispatch = useDispatch();
  const handleRegister = React.useCallback(
    (values) => {
      const { email, password, name, phoneNumber } = values;
      dispatch(signupJiraReportBugAction(email, password, name, phoneNumber));
    },
    [dispatch]
  );
  const formikBag = useFormik({
    initialValues: {},
    validationSchema: validationSchema,
    onSubmit: handleRegister,
  });
  return (
    <div className={styled.wrapper}>
      <form className={styled.formRight} onSubmit={formikBag.handleSubmit}>
        <h2 className="text-uppercase">Create Account </h2>
        <div className="row">
          <div className="col-sm-6 mb-3">
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              className={styled.inputField}
              required
              value={formikBag.values.name}
              onBlur={formikBag.handleBlur}
              onChange={formikBag.handleChange}
            />
            <p className="text-danger">{formikBag.errors.name}</p>
          </div>

          <div className="col-sm-6 mb-3">
            <label>Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              className={styled.inputField}
              required
              value={formikBag.values.phoneNumber}
              onBlur={formikBag.handleBlur}
              onChange={formikBag.handleChange}
            />
            <p className="text-danger">{formikBag.errors.phoneNumber}</p>
          </div>
        </div>
        <div className="mb-3">
          <label>Your Email</label>
          <input
            type="email"
            className={styled.inputField}
            name="email"
            required
            value={formikBag.values.email}
            onBlur={formikBag.handleBlur}
            onChange={formikBag.handleChange}
          />
          <p className="text-danger">{formikBag.errors.email}</p>
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
              value={formikBag.values.password}
              onBlur={formikBag.handleBlur}
              onChange={formikBag.handleChange}
            />
            <p className="text-danger">{formikBag.errors.password}</p>
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
export default React.memo(RegisterJira);
