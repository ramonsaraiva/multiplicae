import React from 'react';

import LabelHack from '../../components/LabelHack';
import InputHack from '../../components/InputHack';

import { Error } from './styles';

function FieldHack({
  contentLabel,
  name,
  value,
  placeholder,
  type = 'text',
  msgError = false,
  onChange
}) {
  return (
    <LabelHack>
      {type !== 'checkbox' ? contentLabel : ''}
      <InputHack
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type}
        error={!!msgError}
      />
      {type === 'checkbox' ? contentLabel : ''}
      <Error>{msgError}</Error>
    </LabelHack>
  );
}

export default FieldHack;
