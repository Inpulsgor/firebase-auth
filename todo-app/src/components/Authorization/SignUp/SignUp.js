import React from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";

import { SignUpSchema } from "./SignUpSchema";
import { signUp } from "../../../redux/auth/authOperations";

const SignUp = ({ signInType, setSignInType }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirmation: "",
    },
    SignUpSchema,
    onSubmit: (values, { setSubmitting }) => {
      if (values.email && values.password === values.passwordConfirmation) {
        dispatch(signUp(values.email, values.password));
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

      <div className="form__group group">
        <input
          required
          id="passwordConfirmation"
          type="password"
          name="passwordConfirmation"
          placeholder=" "
          className="form__input input"
          onChange={formik.handleChange}
          value={formik.values.passwordConfirmation}
        />
        <label htmlFor="passwordConfirmation" className="form__label label">
          Password confirmation
        </label>
      </div>

      <button className="form__button button" type="submit">
        Sign Up
      </button>

      <div className="form__footer">
        <p className="form__footer-text">
          Have an account ?
          <button type="button" onClick={() => setSignInType(!signInType)}>
            Sign In
          </button>
        </p>
      </div>
    </form>
  );
};

export default SignUp;
