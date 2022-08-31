import StyledButton from "./styles";
import icons from "../../icons";

export default function Button({
    color = "primary",
    disabled = false,
    onClick = () => 0,
    icon = "",
    children,
}) {
    return (
        <StyledButton
            color={color}
            disabled={disabled}
            onClick={onClick}
            icon={icons[icon.replace("-", "_")]}
        >
            {children && children}
            {children && icons[icon.replace("-", "_")] && (
                <img src={icons[icon.replace("-", "_")]} alt={icon} />
            )}
        </StyledButton>
    );
}
