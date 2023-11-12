import React from "react";
import { useFormik } from "formik";

const MyForm = () => {
  const formik = useFormik({
    initialValues: {
      field1: "",
      field2: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleField1Change = (event) => {
    formik.handleChange(event);
    if (!event.target.value) {
      formik.setFieldValue("field2", "");
    }
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name="field1"
        value={formik.values.field1}
        onChange={handleField1Change}
      />
      <input
        type="text"
        name="field2"
        value={formik.values.field2}
        disabled={!formik.values.field1}
        onChange={formik.handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
