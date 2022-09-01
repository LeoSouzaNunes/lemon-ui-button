import Container from "./styles";
import lemonLogo from "../../icons/lemon-logo.svg";
import useDashboardData from "../../hook/useDashboardData";
import Button from "../Button";

export default function Playground() {
    const { dashboardData, saveDashboardData } = useDashboardData();

    const toggleLemon = () => {
        saveDashboardData({
            ...dashboardData,
            lemon: dashboardData.lemon + 0.3,
        });
    };

    return (
        <Container width={dashboardData.width + "px"}>
            <img src={lemonLogo} alt="Lemon logo. 🍋" />
            <div>
                <Button
                    color={dashboardData.color}
                    disabled={Number(dashboardData.disabled)}
                    icon={dashboardData.icon}
                    onClick={toggleLemon}
                >
                    {dashboardData.text}
                </Button>
            </div>
        </Container>
    );
}
