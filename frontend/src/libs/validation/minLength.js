function minLength(min, value, msgError) {
  if (value.length < min) {
    return msgError || 'Mínimo de 8 caracteres';
  }
}

export default minLength;
