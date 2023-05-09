import { Resultado } from "../Resultado/index";
import { Acumulou } from "../Acumulou/index";
import { Data } from "../Data/index";
import styled from "styled-components";
export function Direita({jogo, acumulado, quantidade, numero, dataExtenso, corBola, bolaFonte}: any){
    return(
        <Container>
            <Resultado bolaFonte={bolaFonte} corBola={corBola} jogo={jogo}></Resultado>
            <Acumulou acumulado={acumulado} quantidade={quantidade}></Acumulou>
            <Data numero={numero} dataExtenso={dataExtenso}></Data>
        </Container>
    );
}
const Container = styled.div`
    flex:1;
    padding: 0px;
    margin: 0;
`