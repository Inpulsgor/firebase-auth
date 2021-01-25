import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { LoginSchema } from "./LoginSchema";
// import fire from "../../../services/firebase/firebase";

const Login = () => {
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          // fire()
          //   .auth()
          //   .signInWithEmailAndPassword(values)
          //   .catch((error) => console.log(error));
        }}
      >
        {({ isSubmitting, isValid, errors, touched }) => (
          <Form>
            <Field type="email" name="email" placeholder="Your email..." />
            <ErrorMessage name="email" />

            <Field
              type="password"
              name="password"
              placeholder="Your password..."
            />
            <ErrorMessage name="password" />

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
