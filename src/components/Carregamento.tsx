import { Contexto } from "../contexts";
import { useContext } from "react";
import "../styles/Carregamento.css"

function Carregamento() {
    const { carregamento} = useContext(Contexto)
    return (
        <>
            <div className="carregaDiv" style={{ display: carregamento ? "none" : "" }}>
                <div className="lds-ripple"><div></div><div></div></div>
            </div>
        </>




    )
}
export default Carregamento;