import styled from 'styled-components';

export const StyledPanel = styled.div`
    display: ${props => props.visible ? "inline-block" : "none"};
`;

export const StyledInfoButton = styled.button`
    border: none;
    border-radius: 50%;
    background-color: lightgray;
    color: white;
    font-size: 16px;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    cursor: pointer;
`;
