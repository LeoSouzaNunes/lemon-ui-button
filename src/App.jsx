import Playground from "./components/Playground";
import Wrapper from "./components/Wrapper";
import Dashboard from "./components/Dashboard";
import Form from "./components/Form";
import { DashboardProvider } from "./context/DashboardContext";

function App() {
    return (
        <DashboardProvider>
            <Wrapper>
                <Playground />
                <Dashboard>
                    <Form />
                </Dashboard>
            </Wrapper>
        </DashboardProvider>
    );
}

export default App;
