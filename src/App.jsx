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
      address1: "",
      address2: "",
      address3: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required(""),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required(""),
      email: Yup.string().email("Invalid email address").required(""),

      // gender: Yup.string().required("Please select a gender"),

      address1: Yup.string().required("Address required"),
      address2: Yup.string().required("Address required"),
      address3: Yup.string().required("Address required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  useEffect(() => {
    // console.log(`firstname is now ${formik.values.firstName}`);
    // console.log(`lastname is now ${formik.values.lastName}`);
    if (!formik.values.firstName && formik.values.lastName) {
      setreqn("-----*First Name is Required");
      console.log(reqn);
    } else setreqn("");
  }, [formik.values.lastName, formik.values.firstName]);

  useEffect(() => {
    // console.log(`firstname is now ${formik.values.email}`);
    // console.log(`lastname is now ${formik.values.lastName}`);
    // console.log(`gender is now ${formik.values.gender}`);
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
          id="gender"
          type="radio"
          name="gender"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={(formik.values.male = "male")}
        />
        <label htmlFor="gender">male</label>

        <input
          id="gender"
          type="radio"
          name="gender"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={(formik.values.female = "female")}
        />
        <label htmlFor="gender">female</label>
      </div>
      {formik.errors.gender && formik.touched.gender && (
        <div>{formik.errors.gender}</div>
      )}

      <label htmlFor="address1">House Name</label>
      <input
        id="address1"
        name="address1"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.address1}
      />
      {formik.touched.address1 && formik.errors.address1 ? (
        <div>{formik.errors.address1}</div>
      ) : null}

      <label htmlFor="address2">Location</label>
      <input
        id="address2"
        name="address2"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.address2}
        disabled={!Boolean(formik.values.address1)}
      />
      {formik.touched.address2 && formik.errors.address2 ? (
        <div>{formik.errors.address2}</div>
      ) : null}

      <label htmlFor="address3">Pincode</label>
      <input
        id="address3"
        name="address3"
        type="number"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.address3}
        disabled={
          !Boolean(formik.values.address1) || !Boolean(formik.values.address2)
        }
      />
      {formik.touched.address3 && formik.errors.address3 ? (
        <div>{formik.errors.address3}</div>
      ) : null}

      <button type="submit">Submit</button>
    </form>
  );
};
export default SignupForm;
