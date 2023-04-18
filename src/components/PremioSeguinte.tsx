import "../styles/PremioSeguinte.css";
function PremioSeguinte({ valor, cor }: any) {
    return (
        <div className="valor">
            <h2 style={{color:cor}}>
                {valor? valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : ""}
            </h2>
        </div>

    )
}
export default PremioSeguinte;