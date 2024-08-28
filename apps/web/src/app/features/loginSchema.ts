import * as Yup from 'yup';

export const loginSchemas = Yup.object().shape({
  NIK: Yup.string()
    .required("NIK is required")
    .matches(/^[0-9]+$/, "NIK must be numeric")
    .min(6, "NIK must be exactly 6 digits")
    .max(6, "NIK must be exactly 6 digits"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
  username: Yup.string()
    .required("Username is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
});
