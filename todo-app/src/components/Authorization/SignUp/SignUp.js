import React from "react";
import { useFormik } from "formik";

import { SignUpSchema } from "./SignUpSchema";
import { firebaseAuth } from "../../../services/firebase/firebase";

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirmation: "",
    },
    SignUpSchema,
    onSubmit: (values, { setSubmitting }) => {
      if (values.password === values.passwordConfirmation) {
        firebaseAuth
          .createUserWithEmailAndPassword(values.email, values.password)
          .then((response) => console.log(response))
          .catch((error) => console.log(error));
      } else {
        alert("Password doesn't match");
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
