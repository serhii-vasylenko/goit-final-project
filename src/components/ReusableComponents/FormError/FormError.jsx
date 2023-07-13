import { ErrorMessage } from 'formik';
import { ErrorText } from './FormError.styled';

const FormError = ({name}) => {
    return (
        <ErrorMessage name={name}
        render={messsage => <ErrorText>{messsage}</ErrorText>}/>
    )
}

export default FormError;