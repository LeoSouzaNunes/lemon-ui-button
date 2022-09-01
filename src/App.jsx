import Button from "./components/Button";
import Playground from "./components/Playground";
import Wrapper from "./components/Wrapper";

function App() {
    return (
        <Wrapper>
            <Playground>
                <Button color="secondary" icon="refresh">
                    Click
                </Button>
            </Playground>
        </Wrapper>
    );
}

export default App;
