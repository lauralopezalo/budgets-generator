import React, { useState } from "react";
import QuantitySelector from "../QuantitySelector";
import InfoModal from "components/InfoModal/InfoModal";
import { StyledPanel, StyledInfoButton } from "./Panel.styles";

const Panel = (props) => {

    const handleNumPagesChange = (value) => {
        const newValue = parseInt(value);
        props.setNumPages(newValue < 1 ? 1 : newValue);
    }

    const handleNumLanguagesChange = (value) => {
        const newValue = parseInt(value);
        props.setNumLanguages(newValue < 1 ? 1 : newValue);
    }

    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState("");

    const handleShowModal = (content) => {
        setModalContent(content);
        setShowModal(true);
    };

    return (
        <div>
            <StyledPanel visible={props.isVisible}>

                <div className="flex justify-between items-center">
                    <label className="text-base leading-8 text-gray-700 whitespace-nowrap">Num of pages:</label>
                    <div className="flex items-center">
                        <QuantitySelector
                            value={props.numPages}
                            onChangeQuantity={(newValue) => handleNumPagesChange(newValue)}
                        />
                        <StyledInfoButton
                            onClick={() => handleShowModal("Indicate here how many pages your website will have.")}>
                            i
                        </StyledInfoButton>
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <label className="text-base leading-8 text-gray-700 whitespace-nowrap">Num of languages:</label>
                    <div className="flex items-center">
                        <QuantitySelector
                            value={props.numLanguages}
                            onChangeQuantity={(newValue) => handleNumLanguagesChange(newValue)}
                        />
                        <StyledInfoButton onClick={() => handleShowModal("Indicate here how many languages your website should be available in.")}>i</StyledInfoButton>
                    </div>
                </div>
            </StyledPanel>
            {showModal ? (
                <InfoModal
                    setShowModal={setShowModal}
                    content={modalContent}
                />
            ) : null}
        </div>
    );
};

export default Panel;
