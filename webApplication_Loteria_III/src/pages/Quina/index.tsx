import Carregamento from "../../components/Carregamento";
import trevo from "../../assets/trevo-quina.png"
import { Principal } from "../../components/Principal";
import useLoteria from "../../hooks/SortHook";
import { qui } from "../../styles/theme";
import { ThemeProvider } from "styled-components";
export default  function Quina() {
    const {quina} = useLoteria();
    return (
        <ThemeProvider theme={qui}>
            <Principal 
                img={trevo} 
                tipo={"QUINA"} 
                cor={qui.loteria} 
                corBola={qui.bola}
                bolaFonte={qui.bolafonte}
                corEstimativa={qui.estimativa}
                data={quina.dataProximoConcurso}
                dataExtenso={quina.dataPorExtenso}
                valor={quina.valorEstimadoProximoConcurso}
                jogo={quina}
                acumulado={quina.acumulado}
                quantidade={quina.quantidadeGanhadores}
                numero={quina.numeroDoConcurso}>
            </Principal> 
        </ThemeProvider>
    )
}