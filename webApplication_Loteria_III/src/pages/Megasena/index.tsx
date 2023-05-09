import Carregamento from "../../components/Carregamento";
import trevo from "../../assets/trevo-megasena.png"
import { Principal } from "../../components/Principal";
import useLoteria from "../../hooks/SortHook";
import { mega } from "../../styles/theme";
import { ThemeProvider } from "styled-components";
export default  function Megasena() {
    const {megasena} = useLoteria();
    return (
        <ThemeProvider theme={mega}>
            <Principal 
                img={trevo} 
                tipo={"MEGA-SENA"} 
                cor={mega.loteria} 
                corBola={mega.bola}
                bolaFonte={mega.bolafonte}
                corEstimativa={mega.estimativa}
                data={megasena.dataProximoConcurso}
                dataExtenso={megasena.dataPorExtenso}
                valor={megasena.valorEstimadoProximoConcurso}
                jogo={megasena}
                acumulado={megasena.acumulado}
                quantidade={megasena.quantidadeGanhadores}
                numero={megasena.numeroDoConcurso}>
            </Principal> 
        </ThemeProvider>

    )
}
