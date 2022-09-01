import Button from "./components/Button";
import Playground from "./components/Playground";
import Wrapper from "./components/Wrapper";
import Dashboard from "./components/Dashboard";

function App() {
    return (
        <Wrapper>
            <Playground>
                <Button color="primary">Click</Button>
            </Playground>
            <Dashboard />
        </Wrapper>
    );
}

export default App;
