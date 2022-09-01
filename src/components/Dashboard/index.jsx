import useDashboardData from "../../hook/useDashboardData";
import { DashboardContainer, Footer } from "./styles";

export default function Dashboard({ children }) {
    const { dashboardData } = useDashboardData();

    return (
        <DashboardContainer>
            <h1>Dashboard de Personalização</h1>
            {children}
            <Footer lemon={Math.abs(Math.sin(dashboardData.lemon))}>
                <a
                    href="https://www.energialemon.com.br/"
                    target="_blank"
                    rel="noreferrer"
                >
                    🍋
                </a>
            </Footer>
        </DashboardContainer>
    );
}
