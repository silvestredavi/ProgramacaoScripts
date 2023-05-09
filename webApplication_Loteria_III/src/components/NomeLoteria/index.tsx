import { CSSProperties } from "react"
import styled from "styled-components";

export function NomeLoteria({img, tipo, cor}: any){
    return (
        <HeaderContainer>
            <ImageHeader>
                <img src={img} alt="" height={"100%"}/>
            </ImageHeader>
            <LogoHeader color={cor}>
                <H1 color={cor}>{tipo}</H1>
            </LogoHeader>

        </HeaderContainer>
    )
}


const HeaderContainer = styled.div`
    display: flex;
    width: 50%;
    align-items: center;
`;

const ImageHeader = styled.div`
    width: 1em;
    margin-right: 2em;
    height: 3em;
`;


const LogoHeader = styled.div`
    display: inline-block;
    padding-top: 6px;
    fontSize: 1.5em;
    color: ${props => props.color};
    padding-left: 0.5em;
`;

const H1 = styled.h1`
    color: ${(props) => props.color};
    padding:0;
    margin:0;
`