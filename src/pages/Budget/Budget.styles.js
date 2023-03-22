import styled from 'styled-components';

export const Panell = styled.div`
    display: ${props => props.visible ? "block" : "none"};
    border-radius: 10px;
    background: #e0e0e0;
    box-shadow:  5px 5px 10px #cccccc, -5px -5px 10px #f4f4f4;
    padding: 15px;
    margin: 10px;
    width: 200px;
`;