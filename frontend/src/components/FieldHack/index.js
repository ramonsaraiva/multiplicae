import React from 'react';

import LabelHack from '../../components/LabelHack';
import InputHack from '../../components/InputHack';

import { Field, Error } from './styles';
import CheckboxHack from '../CheckboxHack';

function FieldHack({
  contentLabel,
  name,
  value = '',
  placeholder,
  type = 'text',
  msgError = '',
  onChange,
  htmlFor = '',
  id = ''
}) {
  function showCheckbox() {
    return (
      <Field>
        <CheckboxHack
          id={id}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          type={type}
          error={msgError}
        />
        <LabelHack type="checkbox" htmlFor={htmlFor}>
          {contentLabel}
          <Error>{msgError}</Error>
        </LabelHack>
      </Field>
    );
  }

  function showSimpleInput() {
    return (
      <LabelHack>
        {contentLabel}
        <InputHack
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          type={type}
          error={msgError}
        />

        <Error>{msgError}</Error>
      </LabelHack>
    );
  }

  return type === 'checkbox' ? showCheckbox() : showSimpleInput();
}

export default FieldHack;
