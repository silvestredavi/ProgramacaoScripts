import trevo from "../assets/trevo-megasena.png"
import "../styles/MegaSena.css";
import "../styles/Dezenas.css";
import Informacao from "./Informacao";
import useLoteria from "../hooks/SortHook";
import PremioSeguinte from "./PremioSeguinte";
import Vencedores from "./Vencedores";
import InfoJogo from "./InfoJogo";

function MegaSena() {
    const { megaSena, carregamento } = useLoteria();
    return (
        <div className="column megasena" style={{ display: carregamento ? "" : "none", marginLeft: 30}}>
            <div className="col-1">
                <Informacao img={trevo} tipo={"MEGASENA"} cor={"#209869"} data={megaSena.dataProximoConcurso}  />
                <PremioSeguinte valor={megaSena.valorEstimadoProximoConcurso} cor={"#209869"} />
            </div>

            <div className="megasena-col-2">
                <div className="mega">
                    <ul>
                        {megaSena.dezenas ? megaSena.dezenas.map((element:any) =>
                            <li>{element}</li>
                        ) : ""}
                    </ul>
                </div>
                <Vencedores acumulado={megaSena.acumulado} quantidade={megaSena.quantidadeGanhadores} />
                <InfoJogo numero={megaSena.numeroDoConcurso} dataExtenso={megaSena.dataPorExtenso} />
            </div>
        </div>
    )
}
export default MegaSena;