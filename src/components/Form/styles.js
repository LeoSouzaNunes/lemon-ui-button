import styled from "styled-components";

const StyledForm = styled.form`
    width: 100%;

    input[type="text"] {
        margin-top: 10px;
        margin-bottom: 20px;

        border-style: none;
        outline: none;

        padding: 0px 5px;
        width: 80%;
        height: 40px;

        font-size: 1rem;
        color: #008059;

        border: 1px solid transparent;
        ::placeholder {
            color: #757575;
        }

        :focus {
            border: 1px solid #013c00;
        }
    }

    input[type="radio"] {
        margin-left: 15px;
        margin-bottom: 20px;
    }

    input[type="range"] {
        margin-top: 10px;
    }
`;

export default StyledForm;
