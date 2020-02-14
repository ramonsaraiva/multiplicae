import styled from 'styled-components';

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > *{
        width: 100%;
        margin: 20px 10px;
    }
`
export const PrimaryArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const SecondaryArea = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`