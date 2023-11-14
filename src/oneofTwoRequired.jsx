import * as Yup from "yup";

const oneOfTwoRequired = Yup.lazy((values) => {
  const { input1, input2 } = values;

  return !input1 && !input2
    ? Yup.mixed().oneOf([null], "One of the inputs is required")
    : Yup.object();
});

export default oneOfTwoRequired;
