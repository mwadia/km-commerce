import * as yup from 'yup';

const ProductValid = yup.object().shape({
  name: yup.string().min(3).required('please enter your name product '),
  price: yup.number().moreThan(0).required('Enter your price product'),
  count: yup.number().moreThan(0).required('Enter your count product'),
  category: yup.string().min(2).required('please enter your name category '),

});
export default ProductValid;
