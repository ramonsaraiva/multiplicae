function isEmail(value, msgError = false) {
  if (!/\S+@\S+\.\S+/.test(value)) {
    return msgError || 'Informe um email válido';
  }
}

export default isEmail;
