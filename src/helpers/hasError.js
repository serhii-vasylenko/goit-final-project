export const hasError = (field, getIn, errors, touched) => {
    const error = getIn(errors, field);
    const touch = getIn(touched, field);
    return touch && error;
  };  