import { styled } from "styled-components"

export function Resultado({jogo, corBola, bolaFonte}: any){
    return(
        <Linha>
            {jogo.dezenas ? jogo.dezenas.map((element:any) =>
                <Coluna color={corBola}><Span color={bolaFonte}>{element}</Span></Coluna>
            ) : ""}
        </Linha>
    )

}

const Linha = styled.ul`
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start:0px;
    width: 80%;'
`;

const Coluna = styled.li`
    display: inline-block;
    font-weight: 100;
    color:white;
    font-size:1.2rem;
    padding: 9px 0px;
    height: 10%;
    width: 8%;
    border-radius: 100%;
    background-color: ${props => props.color};
    margin-right: 25px;
    text-align: center;
    line-height: 2em;
    font-weight: bold;
`

const Span = styled.span`
    color: ${props => props.color}
`