import "../styles/Vencedores.css"
function Ganhadores({ acumulado, quantidade }: any) {
    return (
        <h1 className="vencedores">
            {acumulado ? "ACUMULADO" : quantidade + " GANHADORES"}
        </h1>
    )
}
export default Ganhadores;