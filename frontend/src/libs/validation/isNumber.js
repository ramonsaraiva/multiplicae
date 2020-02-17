function isNumber(value, msgError) {
  const regex = new RegExp('^[A-Za-z]*$', 'gm');

  if (regex.test(value)) {
    return 'Somente números' || msgError;
  }
}

export default isNumber;
