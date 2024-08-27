import * as yup from "yup";

const employeeFormValidation = yup.object().shape({
  email: yup
    .string()
    .email("Enter the email correctly")
    .required("Email is required")
    .typeError("Enter the email correctly")
    .required("Email is required"),
  phoneNumber: yup
    .number()
    .min(9000000000, "Mobile number must be 11 digits")
    .max(9999999999, "Mobile number should not be more than 11 digits")
    .required("Phone Number is required"),
  name: yup.string().required("Name is required"),
  caption: yup.string().required("Caption is required"),
  team: yup.string().required("Team is required"),
  age: yup.string().required("Age is required"),
  role: yup.string().required("Role is required"),
  birthDay: yup.date().required("birthDay is required"),
});
export default employeeFormValidation;
