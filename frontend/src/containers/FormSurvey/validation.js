import { required, minLength, isNumber } from '../../libs/validation';

function dream(values) {
  const { dream } = values;
  const errors = {};

  errors.dream =
    required(dream) || minLength(2, dream, 'Sonho com no mínimo 2 caracteres');

  return errors;
}

function dreamMoney(values) {
  const { dreamMoney } = values;
  const errors = {};

  errors.dreamMoney = required(dreamMoney) || isNumber(dreamMoney);

  return errors;
}

function monthMoney(values) {
  const { monthMoney } = values;
  const errors = {};

  errors.monthMoney = required(monthMoney);

  return errors;
}

export default { dream, dreamMoney, monthMoney };
