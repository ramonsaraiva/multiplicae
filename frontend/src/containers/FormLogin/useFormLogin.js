import { useState, useEffect } from 'react';

import validation from './validation';

function useFormLogin(callback) {
  const [value, setValue] = useState({ email: '', passoword: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange({ target }) {
    const { name, value } = target;

    console.log(name, value);

    setValue(oldValue => ({ ...oldValue, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    setErrors(validation(value));
    setIsSubmitting(true);
  }

  function sendFormIsValid() {
    if (
      Object.values(errors).filter(error => error).length === 0 &&
      isSubmitting
    ) {
      callback();
    }
  }

  useEffect(sendFormIsValid, [errors]);

  return { value, handleChange, handleSubmit, errors };
}

export default useFormLogin;
