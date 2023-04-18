import "../styles/Vencedores.css"
function Ganhadores({ acumulado, quantidade }: any) {
    return (
        <h1 className="vencedores">
            {acumulado ? "ACUMULADO" : quantidade + " ganhadores"}
        </h1>
    )
}
export default Ganhadores;