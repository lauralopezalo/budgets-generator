import styled from 'styled-components';

export const StyledModalOverlay = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`;

export const StyledModalWrapper = styled.div`
    background-color: white;
    max-width: 500px;
    margin: 0 auto;
    padding: 1rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 8px;
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.1);
    z-index: 1;
`;