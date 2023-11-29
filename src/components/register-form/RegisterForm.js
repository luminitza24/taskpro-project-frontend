import React from "react";
import { useFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link as RouterLink } from "react-router-dom";

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, "Must be at least 4 characters! ")
    .max(20, "Must be 20 characters or less!")
    .required("Required"),
  email: Yup.string().email("Invalid email!").required("Email is required!"),
  password: Yup.string()
    .min(8, { length: "Password is too short!" })
    .matches(/\d+/, { message: { number: "Password has no number!" } })
    .matches(/[a-z]+/, { message: { lowercase: "Password has no lowercase!" } })
    .matches(/[A-Z]+/, { message: { uppercase: "Password has no uppercase!" } })
    .password()
    .required("Password is required!"),
});

export const RegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
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
        <RouterLink
          component={RouterLink}
          to="/register"
          className="text-decoration-none text-custom"
        >
          Registration
        </RouterLink>
        <RouterLink
          component={RouterLink}
          to="/login"
          className="text-decoration-none text-custom"
        >
          Log in
        </RouterLink>
      </div>
      <div>
        <formik
          initialValues={{
            name: "",
            email: "",
            password: "",
          }}
          validationSchema={RegisterSchema}
        >
          {({ errors, touched }) => (
            <Form onSubmit={formik.handleSubmit}>
              <Field
                name="name"
                type="text"
                placeholder="Enter your name"
                id="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {touched.name && errors.name && <div>{errors.name}</div>}
              <Field
                name="email"
                placeholder="Enter your email"
                id="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
              />
              {touched.email && errors.email && <div>{errors.email}</div>}
              <Field
                name="password"
                type="password"
                placeholder="Create a password"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {touched.password && errors.password && (
                <div>{errors.password} </div>
              )}
              <button type="submit">Register Now </button>
            </Form>
          )}
        </formik>
      </div>
    </div>
  );
};
