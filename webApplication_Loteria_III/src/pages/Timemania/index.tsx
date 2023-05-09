import trevo from "../../assets/trevo-timemania.png"
import { Principal } from "../../components/Principal";
import useLoteria from "../../hooks/SortHook";
import { time } from "../../styles/theme";
import { ThemeProvider } from "styled-components";

export default  function Timemania() {
    const {timemania} = useLoteria();
    return (
        <ThemeProvider theme={time}>
            <Principal 
                img={trevo} 
                tipo={"TIMEMANIA"} 
                cor={time.loteria} 
                corBola={time.bola}
                bolaFonte={time.bolafonte}
                corEstimativa={time.estimativa}
                data={timemania.dataProximoConcurso}
                dataExtenso={timemania.dataPorExtenso}
                valor={timemania.valorEstimadoProximoConcurso}
                jogo={timemania}
                acumulado={timemania.acumulado}
                quantidade={timemania.quantidadeGanhadores}
                numero={timemania.numeroDoConcurso}>
            </Principal> 
        </ThemeProvider>
    )
}