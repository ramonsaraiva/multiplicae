import React from 'react';
import DotHack from '../DotHack';
import { PrimaryArea, SecondaryArea } from './styles';

function TreeArea(props) {
  return (
    <>
      <PrimaryArea>
        <DotHack
          to="/details/start-tree"
          progress={props.node.progress}
          color="blue"
          dashed={props.node.is_path}
          title={props.node.abbreviation}
        />
        <SecondaryArea>
          {props.node.children &&
            props.node.children.map(e => <TreeArea node={e} />)}
        </SecondaryArea>
      </PrimaryArea>
    </>
  );
}

export default TreeArea;
