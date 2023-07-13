export const getErrorMassage = error => {
  if (error) {
    switch (error) {
      case 'Request failed with status code 401':
        return 'Please receive authorization';
      case 'Request failed with status code 404':
        return 'Resource is not found';
      case 'Request failed with status code 500':
        return 'Resource is not found';
      case 'Network Error':
        return 'Check your network connection and try again later';

      default:
        return 'Oops, something went wrong. Try again or contact support';
    }
  } else {
    return 'oops, there was an error';
  }
};
