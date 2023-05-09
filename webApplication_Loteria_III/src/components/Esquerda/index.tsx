import { styled } from "styled-components"
import { Nav } from "../Menu"
import { NomeLoteria } from "../NomeLoteria"
import { Estimativa } from "../Estimativa"
export function Esquerda({img, tipo, cor, data, corEstimativa, valor}: any){
    return(
        <Container>
            <NomeLoteria img={img} tipo={tipo} cor={cor}></NomeLoteria>
            <Estimativa data={data} cor={corEstimativa} valor={valor}></Estimativa>
        </Container>        
    )
}

const Container = styled.div`
    flex:0.5;
    padding:10px;
`