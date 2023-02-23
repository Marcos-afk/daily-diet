// eslint-disable-next-line no-useless-escape
const regexDate = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
export const validateDate = (date: string) => {
  const dateIsValid = regexDate.test(date);
  if (!dateIsValid) {
    return false;
  }

  const secondValidationStep = date.indexOf('/') !== -1;
  if (!secondValidationStep) {
    return false;
  }

  return true;
};
