import { styled } from "styled-components";

export function Data({numero, dataExtenso}: any){
    return(
        <P>
            Concurso {numero} - {dataExtenso}
        </P>
    );
}

const P = styled.p`
    color: ${props => props.theme.data};
`;