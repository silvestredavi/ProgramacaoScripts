import styled from "styled-components";
import { Esquerda } from "../Esquerda";
import { Direita } from "../Direita";

export function Principal({img, tipo, data, cor, corEstimativa, valor, jogo, acumulado, quantidade, numero, dataExtenso, corBola, bolaFonte}: any){
    return(
        <Container>
            <Esquerda img={img} tipo={tipo} data={data} corEstimativa={corEstimativa} cor={cor} valor={valor}></Esquerda>
            <Direita bolaFonte={bolaFonte} corBola={corBola} jogo={jogo} acumulado={acumulado} quantidade={quantidade} numero={numero} dataExtenso={dataExtenso}></Direita>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    padding:10px;
`