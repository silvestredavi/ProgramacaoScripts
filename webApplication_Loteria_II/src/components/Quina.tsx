import trevo from "../assets/trevo-quina.png"
import "../styles/Quina.css";
import Informacao from "./Informacao";
import useLoteria from "../hooks/SortHook";
import PremioSeguinte from "./PremioSeguinte";
import Vencedores from "./Vencedores";
import InfoJogo from "./InfoJogo";

function Quina() {
    const { quina, carregamento } = useLoteria();
    return (
        <div className="bloco" style={{ display: carregamento ? "" : "none", marginLeft: "5%"}}>
            <div className="col">
                <Informacao img={trevo} tipo={"QUINA"} cor={"#260085"} data={quina.dataProximoConcurso}  />
                <PremioSeguinte valor={quina.valorEstimadoProximoConcurso} cor={"#260085"} />
            </div>

            <div className="col-quina">
                <div>
                    <ul>
                        {quina.dezenas ? quina.dezenas.map((element:any) =>
                            <li>{element}</li>
                        ) : ""}
                    </ul>
                </div>
                <Vencedores acumulado={quina.acumulado} quantidade={quina.quantidadeGanhadores} />
                <InfoJogo numero={quina.numeroDoConcurso} dataExtenso={quina.dataPorExtenso} />
            </div>
        </div>
    )
}
export default Quina;