import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./index.css";
const SignupForm = () => {
  const [reqn, setreqn] = useState("");
  const [reqe, setreqe] = useState("");
  const [reqep, setreqep] = useState("");

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      gender: "",
      address1: "",
      address2: "",
      address3: "",
      ID: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("First name required"),

      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Last name required"),
      email: Yup.string().email("Invalid email address"),
      phoneNumber: Yup.string().matches(
        /^[0-9]{10}$/,
        "Phone number is not valid"
      ),

      gender: Yup.string().required("Please select a gender"),

      address1: Yup.string()
        .required("House name required")
        .max(20, "Must be 20 characters or less"),
      address2: Yup.string()
        .required("post office required")
        .max(20, "Must be 20 characters or less"),
      address3: Yup.string()
        .required("pincode required")
        .matches(/^[0-9]{6}$/, "pincode is not valid"),
      ID: Yup.string().required("Please select a ID"),
    }),

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  useEffect(() => {
    if (!formik.values.firstName && formik.values.lastName) {
      setreqn("Full Name is Required");
      console.log(reqn);
    } else setreqn("");
  }, [formik.values.lastName, formik.values.firstName]);

  useEffect(() => {
    if (
      !formik.values.lastName &&
      (formik.values.email || formik.values.phoneNumber)
    ) {
      setreqe("Full Name is Required");
    } else setreqe("");
  }, [formik.values.lastName, formik.values.email, formik.values.phoneNumber]);

  useEffect(() => {
    if (
      !(formik.values.email || formik.values.phoneNumber) &&
      formik.values.gender
    ) {
      setreqep("Enter  either email or phone number ");
    } else setreqep("");
  }, [formik.values.email, formik.values.phoneNumber, formik.values.gender]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="grid">
        <label htmlFor="firstName">
          First Name<h5>{reqn}</h5>
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <h5>{formik.errors.firstName}</h5>
        ) : null}

        <label htmlFor="lastName">
          Last Name<h5>{reqe}</h5>
        </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div>
            <h5>{formik.errors.lastName}</h5>
          </div>
        ) : null}
      </div>
      <div className="grid">
        <h5>{reqep}</h5>
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
          <h5>{formik.errors.email}</h5>
        ) : null}

        <label htmlFor="phoneNumber">Phone number</label>
        <input
          id="phoneNumber"
          name="phoneNumber"
          type="number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phoneNumber}
        />
        {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
          <h5>{formik.errors.phoneNumber}</h5>
        ) : null}
      </div>
      <div>
        <input
          id="gender"
          type="radio"
          name="gender"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value="male"
        />
        <label htmlFor="gender">male</label>

        <input
          id="gender"
          type="radio"
          name="gender"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value="female"
        />
        <label htmlFor="gender">female</label>
      </div>
      {formik.errors.gender && formik.touched.gender && (
        <h5>{formik.errors.gender}</h5>
      )}

      <label htmlFor="address1">House Name</label>
      <input
        id="address1"
        name="address1"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.address1}
        disabled={
          !(Boolean(formik.values.email) || Boolean(formik.values.phoneNumber))
        }
      />

      {formik.touched.address1 && formik.errors.address1 ? (
        <h5>{formik.errors.address1}</h5>
      ) : null}

      <label htmlFor="address2">Post office</label>
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
        <h5>{formik.errors.address2}</h5>
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
        <h5>{formik.errors.address3}</h5>
      ) : null}

      <select
        id="ID"
        name="ID"
        value={formik.values.ID}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      >
        <option value="" label="Select a ID">
          Select a ID
        </option>
        <option
          vid="ID"
          name="ID"
          value="Adhar"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Adhar"
        >
          Adhar
        </option>
        <option
          id="ID"
          name="ID"
          value="Voters ID "
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Voters ID"
        >
          Voters ID
        </option>

        <option
          id="ID"
          name="ID"
          value="Pan Card"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Pan Card"
        >
          Pan Card
        </option>
      </select>
      {formik.errors.ID && (
        <div className="input-feedback">{formik.errors.ID}</div>
      )}

      <button type="submit" disabled={!formik.isValid}>
        {!formik.isValid ? "Please check field again" : "Submit"}
      </button>
    </form>
  );
};
export default SignupForm;
