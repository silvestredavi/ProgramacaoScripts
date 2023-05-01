import trevo from "../assets/trevo-lotofacil.png"
import "../styles/LotoFacil.css";
import useLoteria from "../hooks/SortHook";
import Informacao from "./Informacao";
import PremioSeguinte from "./PremioSeguinte";
import Vencedores from "./Vencedores";
import InfoJogo from "./InfoJogo";
function LotoFacil() {
    const { lotoFacil, carregamento } = useLoteria();
    return (
        <div className="column" style={{ display: carregamento ? "" : "none"}}>
            <div className="col-1">
                <Informacao img={trevo} tipo={"LOTOFÁCIL"} cor={"#930989"} data={lotoFacil.dataProximoConcurso}  />
                <PremioSeguinte valor={lotoFacil.valorEstimadoProximoConcurso} cor={"#930989"} />
            </div>

            <div className="col-2">
                <div className="loto" style={{marginBottom:"6%"}}>
                    <ul>
                        {lotoFacil.dezenas ? lotoFacil.dezenas.map((element:any) =>
                            <li>{element}</li>
                        ) : ""}
                    </ul>
                </div>
                <Vencedores acumulado={lotoFacil.acumulado} quantidade={lotoFacil.quantidadeGanhadores} />
                <InfoJogo numero={lotoFacil.numeroDoConcurso} dataExtenso={lotoFacil.dataPorExtenso} />
            </div>
        </div>
    )
}
export default LotoFacil;