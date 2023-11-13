import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { object, array, boolean } from "yup";

const SignupForm = () => {
  const [reqn, setreqn] = useState("");
  const [reqe, setreqe] = useState("");
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      gender: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required(""),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required(""),
      email: Yup.string().email("Invalid email address").required(""),

      gender: Yup.string().required("Please select a gender"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  useEffect(() => {
    console.log(`firstname is now ${formik.values.firstName}`);
    console.log(`lastname is now ${formik.values.lastName}`);
    if (!formik.values.firstName && formik.values.lastName) {
      setreqn("-----*First Name is Required");
      console.log(reqn);
    } else setreqn("");
  }, [formik.values.lastName, formik.values.firstName]);

  useEffect(() => {
    console.log(`firstname is now ${formik.values.email}`);
    console.log(`lastname is now ${formik.values.lastName}`);
    if (!formik.values.lastName && formik.values.email) {
      setreqe("-----*Last Name is Required");
      console.log(reqe);
    } else setreqe("");
  }, [formik.values.lastName, formik.values.email]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name{reqn}</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null}

      <label htmlFor="lastName">Last Name{reqe}</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null}

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}

      <div>
        <input
          id="male"
          type="radio"
          name="gender"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={(formik.values.gender = "male")}
        />
        <label htmlFor="male">male</label>
      </div>
      <div>
        <input
          id="female"
          type="radio"
          name="gender"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={(formik.values.gender = "female")}
        />
        <label htmlFor="female">female</label>
      </div>
      {formik.errors.gender && formik.touched.gender && (
        <div>{formik.errors.gender}</div>
      )}
      <button type="submit">Submit</button>
    </form>
  );
};
export default SignupForm;
