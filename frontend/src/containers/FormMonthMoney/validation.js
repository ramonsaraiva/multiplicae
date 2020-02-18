import { required, isNumber } from '../../libs/validation';

function validation(values) {
  const { monthMoney } = values;
  const errors = {};

  errors.monthMoney = required(monthMoney) || isNumber(monthMoney);

  return errors;
}

export default validation;
