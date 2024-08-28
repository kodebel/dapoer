import * as Yup from 'yup';

export const registerSchema = Yup.object().shape({
    firstName: Yup.string()
        .required("First name is required"),
    lastName: Yup.string()
        .required("Last name is required"),
    NIK: Yup.string()
        .required("NIK is required")
        .matches(/^[0-9]+$/, "NIK must be a number")
        .min(6, "NIK must be exactly 6 characters")
        .max(6, "NIK must be exactly 6 characters"),
    email: Yup.string()
        .required("Email is required")
        .email("Email is invalid"),
    birthday: Yup.date()
        .required("Birthday is required"),
    phoneNumber: Yup.string()
        .required("Phone number is required")
        .matches(/^[0-9]+$/, "Phone number must be a number")
        .min(10, "Phone number must be at least 10 characters"),
    password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
        .required("Confirm password is required"),
    position: Yup.string()
        .required("Position is required"),
    address: Yup.string()
        .required("Address is required")
});

export default registerSchema;
