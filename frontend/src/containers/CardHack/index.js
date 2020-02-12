import React from 'react';

import { Card, Action } from './styles';

function CardHack({ children, contentAction = false, hrefAction }) {
  function showAction() {
    return contentAction ? (
      <Action to={hrefAction}>{contentAction}</Action>
    ) : (
      ''
    );
  }

  return (
    <Card contentAction={contentAction}>
      {children}
      {showAction()}
    </Card>
  );
}

export default CardHack;
