import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  fullName: Yup.string().required('Full Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  dateOfBirth: Yup.date().required('Date of Birth is required').test('is-18', 'You must be at least 18 years old', value => ((new Date().getFullYear() - new Date(value).getFullYear()) - ((new Date().getMonth() - new Date(value).getMonth() < 0 || (new Date().getMonth() - new Date(value).getMonth() === 0 && new Date().getDate() < new Date(value).getDate())) ? 1 : 0)) >= 18),
  streetAddress: Yup.string().required('Street Address is required'),
  city: Yup.string().required('City is required'),
  state: Yup.string().required('State is required'),
  zipCode: Yup.string().matches(/^\d{5}$/, 'Invalid Zip Code format').required('Zip Code is required'),
  username: Yup.string().required('Username is required'),
  password: Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, 'Password must be at least 8 characters, include at least one uppercase letter, one lowercase letter, and one number').required('Password is required'),
  termsAndConditions: Yup.boolean().oneOf([true], 'You must accept the Terms and Conditions'),
});

export const initialValues = {
  fullName: '',
  email: '',
  dateOfBirth: '',
  streetAddress: '',
  city: '',
  state: '',
  zipCode: '',
  username: '',
  password: '',
  termsAndConditions: false,
};
