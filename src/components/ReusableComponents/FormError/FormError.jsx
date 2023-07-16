import { ErrorMessage } from 'formik';
import { ErrorText } from './FormError.styled';

const FormError = ({name, style}) => {
    return (
        <ErrorMessage name={name}
        render={messsage => <ErrorText style={style}>{messsage}</ErrorText>}/>
    )
}

export default FormError;