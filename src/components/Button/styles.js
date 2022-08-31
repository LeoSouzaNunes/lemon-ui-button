import styled from "styled-components";

const StyledButton = styled.button`
    border-style: none;

    height: 56px;
    padding: 0px 20px;

    display: flex;
    align-items: center;
    justify-content: ${({ icon }) => (icon ? "space-between" : "center")};

    min-width: 311px;

    font-family: "Inter";
    font-weight: 400;
    font-size: 1rem;
    letter-spacing: -0.032em;

    color: ${({ color }) => (color === "secondary" ? "#000000" : "#FFFFFF")};

    background-color: ${({ color }) =>
        color === "secondary" ? "#F7C346" : "#026C00"};

    &:hover {
        cursor: pointer;
        background-color: ${({ color }) =>
            color === "secondary" ? "#FFDF77" : "#079504"};
    }

    &:active {
        background-color: ${({ color }) =>
            color === "secondary" ? "#DCAC0D" : "#013C00"};
    }
    &:disabled {
        color: #ffffff;
        background-color: ${({ color }) =>
            color === "secondary" ? "#FFE58D" : "#B7D0B6"};
        pointer-events: none;
    }
`;

export default StyledButton;
