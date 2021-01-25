import React from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";

import { SignUpSchema } from "./SignUpSchema";
import { signUp } from '../../../redux/auth/authOperations'

const SignUp = () => {
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
        const credentials = {
          email: values.email,
          password: values.password
        }

        dispatch(signUp(...credentials));
      } else {
        return;
      }
    },
  });

  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <div className="form__group">
        <label className="form__label">
          Email
          <input
            type="email"
            name="email"
            placeholder="Your email..."
            className="form__input"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </label>
      </div>

      <div className="form__group">
        <label className="form__label">
          Password
          <input
            type="password"
            name="password"
            placeholder="Your password..."
            className="form__input"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </label>
      </div>

      <div className="form__group">
        <label className="form__label">
          Password Confirmation
          <input
            type="password"
            name="passwordConfirmation"
            placeholder="Re-type your password"
            className="form__input"
            onChange={formik.handleChange}
            value={formik.values.passwordConfirmation}
          />
        </label>
      </div>

      <button className="form__button" type="submit">
        SignUp
      </button>
    </form>
  );
};

export default SignUp;
