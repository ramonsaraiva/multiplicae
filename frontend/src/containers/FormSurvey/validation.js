import { required, minLength } from '../../libs/validation';

function validation(values) {
  const { dream } = values;
  const errors = {};

  errors.dream =
    required(dream) || minLength(2, dream, 'Sonho com no mínimo 2 caracteres');

  return errors;
}

export default validation;
