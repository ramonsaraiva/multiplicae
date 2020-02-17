import React from 'react';

import LabelHack from '../../components/LabelHack';
import InputHack from '../../components/InputHack';

import { Error } from './styles';
import CheckboxHack from '../CheckboxHack';

function FieldHack({
  contentLabel,
  name,
  value = '',
  placeholder,
  type = 'text',
  msgError = '',
  onChange
}) {
  function showCheckbox() {
    return (
      <LabelHack>
        <CheckboxHack
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          type={type}
          error={msgError}
        />
        {contentLabel}
        <Error>{msgError}</Error>
      </LabelHack>
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
