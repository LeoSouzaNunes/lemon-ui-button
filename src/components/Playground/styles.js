import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;

    padding: 50px 50px;
    width: 100%;
    height: 100vh;

    > img {
        padding: 0px 20px;
        width: 150px;
    }

    > div {
        width: ${({ width }) => width};
        margin: auto;
    }
`;

export default Container;
