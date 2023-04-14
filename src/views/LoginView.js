import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Ogiltig email").required("Email saknas"),
  password: Yup.string().required("Lösenord saknas"),
});

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const handleLogin = (values, actions) => {
    console.log("Login form submitted with values: ", values);
    actions.setSubmitting(false);
  };

  return (
    <div className="view-divs">
      <h1>Login</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={handleLogin}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <label htmlFor="password">Lösenord</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
