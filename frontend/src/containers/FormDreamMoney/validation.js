import { required, isNumber } from '../../libs/validation';

function validation(values) {
  const { dreamMoney } = values;
  const errors = {};

  errors.dreamMoney = required(dreamMoney) || isNumber(dreamMoney);

  return errors;
}

export default validation;
