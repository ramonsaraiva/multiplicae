import { required, isEmail, minLength } from '../../libs/validation';

function validation(values) {
  const { name, email, password } = values;
  const errors = {};

  errors.name = required(name, 'Nome é obrigatório');

  errors.email = required(email, 'Email é obrigatório') || isEmail(email);

  errors.password =
    required(password, 'Senha é obrigatória') ||
    minLength(8, password, 'Senha com no mínimo 8 caracteres');

  return errors;
}

export default validation;
