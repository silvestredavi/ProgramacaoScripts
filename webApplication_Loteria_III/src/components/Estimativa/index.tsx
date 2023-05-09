import { styled } from "styled-components"

export function Estimativa({data, cor, valor}: any){
    return(
        <>
            <Descricao>
                Estimativa de premio do próximo concurso. Sorteio {data}
            </Descricao>
            <Valor>
                <H2 color={cor}>
                    {valor? valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : ""}
                </H2>
            </Valor>
        </>
    )
}

const Descricao = styled.div`
    padding: 2em 2em 0em 4em;
    color:gray;
`;

const Valor = styled.div`
    padding: 0em 2em 2em 4em;
`

const H2 = styled.h2`
    color: ${props => props.color}
`;
