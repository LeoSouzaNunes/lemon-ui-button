import DashboardContainer from "./styles";

export default function Dashboard({ children }) {
    return (
        <DashboardContainer>
            <h1>Dashboard de personalização</h1>
            {children}
        </DashboardContainer>
    );
}
