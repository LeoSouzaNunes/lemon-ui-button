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
        padding-bottom: 50px;
    }

    @media (max-width: 800px) {
        width: 100%;
    }
`;

const Footer = styled.footer`
    margin-left: auto;
    margin-top: auto;

    opacity: ${({ lemon }) => lemon};
    cursor: ${({ lemon }) => (lemon > 0.2 ? "pointer" : "none")};
    pointer-events: ${({ lemon }) => (lemon > 0.2 ? "all" : "none")};

    a {
        text-decoration: none;
    }
`;

export { DashboardContainer, Footer };
