import { useState, useEffect } from 'react';

function useValidation(validation, callback, ...values) {
  const [value, setValue] = useState(
    Object.assign(...values.map(value => ({ [value]: '' })))
  );
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange({ target }) {
    const { name, value } = target;

    setValue(oldValue => ({ ...oldValue, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log('ae');

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

export default useValidation;
