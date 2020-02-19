import React from 'react';
import DotHack from '../DotHack';
import { PrimaryArea, SecondaryArea } from './styles';

function TreeArea({ node }) {
  const { id, progress, color, is_path, abbreviation, children } = node;

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
        <SecondaryArea>
          {children &&
            children.map(element => (
              <TreeArea node={element} key={element.id} />
            ))}
        </SecondaryArea>
      </PrimaryArea>
    </>
  );
}

export default TreeArea;
