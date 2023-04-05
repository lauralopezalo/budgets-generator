import { StyledModalOverlay, StyledModalWrapper } from "./InfoModal.styles";

const InfoModal = (props) => {

    return (
        <div>
            <StyledModalOverlay onClick={() => props.setShowModal(false)}>
                <StyledModalWrapper onClick={(e) => e.stopPropagation()}>
                    <p>{props.content}</p>
                </StyledModalWrapper>
            </StyledModalOverlay>
        </div>
    );
};

export default InfoModal;
