import { toast } from 'react-hot-toast';
import ToastCustomIcon from './ToastCustom';
import { getErrorMassage } from '../../../helpers/getErrorMessage';

export const showMessageToast = message => {
  toast.success(`${message}`, {
    icon: <ToastCustomIcon />,
    duration: 3000,
    style: {
      marginTop: '30px',
      backgroundColor: '#8BAA36',
    },
    ariaProps: {
      role: 'status',
      'aria-live': 'polite',
    },
  });
};

export const showErrorToast = error => {
  const errorMessage = getErrorMassage(error);
  toast.error(` ${errorMessage}`, {
    icon: <ToastCustomIcon />,
    duration: 3000,
    style: {
      marginTop: '30px',
      backgroundColor: '#8BAA36',
    },
    ariaProps: {
      role: 'status',
      'aria-live': 'polite',
    },
  });
};
