import React from "react";
import { useFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link as RouterLink } from "react-router-dom";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email!").required("Email is required!"),
  password: Yup.string()
    .min(8, { length: "Password is too short!" })
    .matches(/\d+/, { message: { number: "Password has no number!" } })
    .matches(/[a-z]+/, { message: { lowercase: "Password has no lowercase!" } })
    .matches(/[A-Z]+/, { message: { uppercase: "Password has no uppercase!" } })
    .password()
    .required("Password is required!"),
});

export const LogInForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div>
      <div>
        <RouterLink component={RouterLink} to="/register" className="">
          Registration
        </RouterLink>
        <RouterLink component={RouterLink} to="/login" className="">
          Log in
        </RouterLink>
      </div>
      <div>
        <formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={LoginSchema}
        >
          {({ errors, touched }) => (
            <Form onSubmit={formik.handleSubmit}>
              <Field
                name="email"
                type="email"
                placeholder="Enter your email"
                id="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
              />
              {touched.email && errors.email && <div>{errors.email}</div>}
              <Field
                name="password"
                type="password"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {touched.password && errors.password && (
                <div>{errors.password} </div>
              )}
              <button type="submit">Log In</button>
            </Form>
          )}
        </formik>
      </div>
    </div>
  );
};
