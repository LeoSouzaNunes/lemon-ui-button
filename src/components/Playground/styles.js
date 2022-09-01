import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;

    padding: 50px;
    width: 100%;
    height: 100vh;

    background-color: #ffffff;

    > img {
        width: 150px;
        height: 35px;
    }

    > div {
        width: ${({ width }) => width};
        margin: auto;
    }
`;

export default Container;
