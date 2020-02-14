import { required, isEmail, minLength } from '../../libs/validation';

function validation(values) {
  const { name, email, password, termsOfUse } = values;
  const errors = {};

  errors.name =
    required(name, 'Nome é obrigatório') ||
    minLength(2, name, 'Nome com no mínimo 2 caracteres');

  errors.email = required(email, 'Email é obrigatório') || isEmail(email);

  errors.password =
    required(password, 'Senha é obrigatória') ||
    minLength(8, password, 'Senha com no mínimo 8 caracteres');

  errors.termsOfUse = required(termsOfUse, 'Você tem que aceitar os termos');

  return errors;
}

export default validation;
