import Container from "./styles";
import lemonLogo from "../../icons/lemon-logo.svg";

export default function Playground({ width = "315px", children }) {
    return (
        <Container width={width}>
            <img src={lemonLogo} alt="Lemon logo. 🍋" />
            <div>{children}</div>
        </Container>
    );
}
