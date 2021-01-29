import React from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";

import SignInSchema from "./SignInSchema";
import * as authOperations from "redux/auth/authOperations";

const SignIn = ({ signInType, setSignInType }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    SignInSchema,
    onSubmit: (values, { setSubmitting }) => {
      if (values.email && values.password) {
        dispatch(authOperations.signIn(values.email, values.password));
      } else {
        return;
      }
    },
  });

  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <div className="form__group group">
        <input
          required
          id="email"
          type="email"
          name="email"
          placeholder=" "
          className="form__input input"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <label htmlFor="email" className="form__label label">
          Email
        </label>
      </div>

      <div className="form__group group">
        <input
          required
          id="password"
          type="password"
          name="password"
          placeholder=" "
          className="form__input input"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <label htmlFor="password" className="form__label label">
          Password
        </label>
      </div>

      <button className="form__button button" type="submit">
        Sign In
      </button>

      <div className="form__footer">
        <p className="form__footer-text">
          Don't have an account ?{" "}
          <button type="button" onClick={() => setSignInType(!signInType)}>
            Sign Up
          </button>
        </p>
      </div>
    </form>
  );
};

export default SignIn;
