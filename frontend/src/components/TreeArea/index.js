import React from 'react';
import DotHack from '../DotHack';
import { PrimaryArea, SecondaryArea } from './styles';

function TreeArea({ node }) {
  const {
    id,
    progress,
    color = 'blue',
    is_path,
    abbreviation,
    children
  } = node;

  function childrenTree() {
    return children.map(element => (
      <TreeArea node={element} key={element.id} />
    ));
  }

  return (
    <>
      <PrimaryArea>
        <DotHack
          to={`/node/${id}`}
          progress={progress}
          color={color}
          dashed={!is_path}
          title={abbreviation}
        />
        <SecondaryArea>{children && childrenTree()}</SecondaryArea>
      </PrimaryArea>
    </>
  );
}

export default TreeArea;
