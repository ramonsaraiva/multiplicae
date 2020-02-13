function required(value, msgError = false) {
  if (!value) {
    return msgError || 'Campo é obrigatório';
  }
}

export default required;
