import { toast } from 'react-hot-toast';
import ToastCustomIcon from './ToastCustom';

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

export const showErrorToast = errorMessage => {
  toast.error(`Oops, ${errorMessage}`, {
    icon: <ToastCustomIcon />,
    duration: 3000,
    style: {
      marginTop: '30px',
      backgroundColor: '#2A2C36',
      color: '#FAFAFA',
    },
    ariaProps: {
      role: 'status',
      'aria-live': 'polite',
    },
  });
};
