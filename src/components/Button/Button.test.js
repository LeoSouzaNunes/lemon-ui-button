import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./index.jsx";

describe("Lemon UI Button component", () => {
    it("should render button component", () => {
        render(<Button />);

        const button = screen.getByRole("button");

        expect(button).toBeInTheDocument();
    });

    it("should render button with text", () => {
        render(<Button>Click Here!</Button>);

        const text = screen.getByRole("button", { name: /click here!/i });

        expect(text).toBeInTheDocument();
    });

    it("should render button with text and icon", () => {
        render(<Button icon="refresh">Click Here!</Button>);

        const text = screen.getByRole("button", { name: /click here!/i });
        const icon = screen.getByAltText("refresh");

        expect(text).toBeInTheDocument();
        expect(icon).toBeInTheDocument();
    });

    it("should disable button", () => {
        render(<Button disabled={true} />);

        const button = screen.getByRole("button");

        expect(button).toBeDisabled();
    });

    it("should add sum when clicked", () => {
        let sum = 0;
        render(<Button onClick={() => sum++} />);

        fireEvent.click(screen.getByRole("button"));

        expect(sum).toEqual(1);
    });
});
