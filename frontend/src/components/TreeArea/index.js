import React from 'react';
import DotHack from '../DotHack';
import { PrimaryArea, SecondaryArea } from './styles';

function TreeArea(props) {
  return (
    <>
      {props.node.children &&
        props.node.children.map(e => {
          return (
            <>
              <PrimaryArea>
                <DotHack
                  to="/details/start-tree"
                  progress={e.progress}
                  color="blue"
                  dashed={!e.is_path}
                  title={e.abbreviation}
                />
              </PrimaryArea>
              <SecondaryArea>
                <TreeArea node={e} />
              </SecondaryArea>
            </>
          );
        })}
    </>
  );
}

export default TreeArea;
