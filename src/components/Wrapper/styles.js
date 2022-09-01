import styled from "styled-components";

const StyledWrapper = styled.main`
    display: flex;

    width: 100%;
    height: 100vh;

    @media (max-width: 800px) {
        display: block;
    }
`;

export default StyledWrapper;
