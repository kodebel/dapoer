import * as Yup from 'yup';

export const documentSchemas = Yup.object().shape({
  category: Yup.string().required('Please select a category'),
  subCategory: Yup.string().required('Please select a sub-category'),
  file: Yup.mixed().required('Please upload a file')
});
