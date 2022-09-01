import { useContext } from "react";
import DashboardContext from "../context/DashboardContext";

export default function useDashboardData() {
    return useContext(DashboardContext);
}
