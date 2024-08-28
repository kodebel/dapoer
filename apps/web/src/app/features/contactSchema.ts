import * as Yup from 'yup';

export const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name is too short, minimum 2 characters.')
    .max(50, 'Name is too long, maximum 50 characters.')
    .required('Name is required.'),
  email: Yup.string()
    .email('Invalid email format.')
    .required('Email is required.'),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "Phone number must contain only digits.")
    .min(10, 'Phone number is too short, minimum 10 digits.')
    .max(15, 'Phone number is too long, maximum 15 digits.')
    .required('Phone number is required.'),
  product: Yup.string()
    .required('Services selection is required.'),
  message: Yup.string()
    .min(10, 'Message is too short, minimum 10 characters.')
    .max(100, 'Message is too long, maximum 100 characters.')
    .required('Message is required.'),
});
