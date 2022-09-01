import styled from "styled-components";

const DashboardContainer = styled.div`
    display: flex;
    flex-direction: column;

    padding: 25px;
    width: 50%;
    height: 100vh;

    background-color: #008059;
    color: #ffffff;

    h1 {
        font-size: 1.85rem;
        text-align: center;
    }

    @media (max-width: 800px) {
        width: 100%;
    }
`;

export default DashboardContainer;
