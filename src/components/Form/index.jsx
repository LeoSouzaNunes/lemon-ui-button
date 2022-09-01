import useDashboardData from "../../hook/useDashboardData";
import StyledForm from "./styles";

export default function Form() {
    const { dashboardData, saveDashboardData } = useDashboardData();

    const handleChange = (e) => {
        const key = e.target.name;
        const { value } = e.target;

        saveDashboardData({ ...dashboardData, [key]: value });
    };

    return (
        <StyledForm>
            <label>
                Conteúdo do botão:
                <br />
                <input
                    type="text"
                    name="text"
                    maxLength={35}
                    placeholder="Ex. 'Clique aqui!'"
                    value={dashboardData.text}
                    onChange={handleChange}
                />
            </label>
            <p>Por favor selecione um esquema de cores:</p>

            <label>
                <input
                    type="radio"
                    name="color"
                    value="primary"
                    onChange={handleChange}
                    checked={dashboardData.color === "primary"}
                />
                primary
            </label>

            <label>
                <input
                    type="radio"
                    name="color"
                    value="secondary"
                    onChange={handleChange}
                    checked={dashboardData.color === "secondary"}
                />
                secondary
            </label>

            <p>Por favor selecione uma das opções de ícones:</p>

            <label>
                <input
                    type="radio"
                    name="icon"
                    value="none"
                    onChange={handleChange}
                    checked={dashboardData.icon === "none"}
                />
                none
            </label>

            <label>
                <input
                    type="radio"
                    name="icon"
                    value="arrow-right"
                    onChange={handleChange}
                    checked={dashboardData.icon === "arrow-right"}
                />
                arrow-right
            </label>

            <label>
                <input
                    type="radio"
                    name="icon"
                    value="check"
                    onChange={handleChange}
                    checked={dashboardData.icon === "check"}
                />
                check
            </label>

            <label>
                <input
                    type="radio"
                    name="icon"
                    value="refresh"
                    onChange={handleChange}
                    checked={dashboardData.icon === "refresh"}
                />
                refresh
            </label>

            <p>Por favor selecione um estado para o botão:</p>

            <label>
                <input
                    type="radio"
                    name="disabled"
                    value={0}
                    onChange={handleChange}
                    checked={Number(dashboardData.disabled) === 0}
                />
                ligado
            </label>

            <label>
                <input
                    type="radio"
                    name="disabled"
                    value={1}
                    onChange={handleChange}
                    checked={Number(dashboardData.disabled) === 1}
                />
                desligado
            </label>

            <br />
            <br />

            <label>
                Selecione a largura do container:
                <br />
                <input
                    type="range"
                    name="width"
                    min={315}
                    max={500}
                    value={dashboardData.width}
                    onChange={handleChange}
                />
            </label>
        </StyledForm>
    );
}
