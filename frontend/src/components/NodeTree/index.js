import React from 'react';
import { Node, Content,Ball,Border,Center,Unlocked } from './styles';
import locked from '../../icons/locked.svg';
import unlocked from '../../icons/unlocked.svg';

function NodeTree(props) {
    return(
        <>
        <Ball>
        <Border/>
        <Center/>
        <Unlocked/>
      </Ball>
        <Node {...props}>
            <Content>
                <img src={props.active?unlocked:locked}/>
            </Content>
        </Node>
        </>
    );
}

export default NodeTree;