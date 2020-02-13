import React from 'react';
import { Node, Content } from './styles';
import locked from '../../icons/locked.svg';
import unlocked from '../../icons/unlocked.svg';

function NodeTree(props) {
    return(
        <Node {...props}>
            <Content>
                <img src={props.active?unlocked:locked}/>
            </Content>
        </Node>
    );
}

export default NodeTree;