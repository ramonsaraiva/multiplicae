import styled from 'styled-components';

export const Node =styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 8px dotted ${props=>props.active?"var(--color-complementary-blue-light)":"var(--color-secondary)"};
    border-radius: 50%;
    width: 80px;
    height: 80px;
`

export const Content =styled.span`
display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid var(--color-secondary);
    border-radius: 50%;
    width: 60px;
    height: 60px;
`