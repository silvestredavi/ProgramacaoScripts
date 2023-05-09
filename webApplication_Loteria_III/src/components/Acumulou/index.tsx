import styled from "styled-components"


export function Acumulou({acumulado, quantidade}: any){
    return(
        <Vencedores>
            {acumulado ? "ACUMULADO" : quantidade + " GANHADORES"}
        </Vencedores>
    )
}


const Vencedores = styled.h1`
    color: ${props => props.theme.acumulou};
    padding-top: 1%;
    padding-bottom: 1%;
`