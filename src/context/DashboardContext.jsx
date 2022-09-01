import { createContext, useState } from "react";

const DashboardContext = createContext();

export function DashboardProvider({ children }) {
    let savedData = JSON.parse(localStorage.getItem("dashboard"));

    if (!savedData) {
        savedData = {
            text: "",
            color: "primary",
            icon: "none",
            disabled: 0,
            width: "315",
            lemon: 0,
        };

        localStorage.setItem("dashboard", JSON.stringify(savedData));
    }

    const [dashboardData, setDashboardData] = useState(savedData);

    const saveDashboardData = (data) => {
        setDashboardData({ ...data });
        localStorage.setItem("dashboard", JSON.stringify({ ...data }));
    };

    return (
        <DashboardContext.Provider value={{ dashboardData, saveDashboardData }}>
            {children}
        </DashboardContext.Provider>
    );
}

export default DashboardContext;
