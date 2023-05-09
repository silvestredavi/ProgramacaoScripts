import { Contexto } from "../contexts";
import { useContext } from "react";
import styled from "styled-components";

function Carregamento() {
    const { carregamento} = useContext(Contexto)
    return (
        <>
        <LoadingContainer style={{display: carregamento ? "none" : ""}}>
            <Spin><div></div><div></div></Spin>
        </LoadingContainer>
        </>
    )
}
export default Carregamento;

const LoadingContainer = styled.div`
    display: "flex";
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: black;
`;

const Spin = styled.div`
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  div {
    position: absolute;
    border: 4px solid #0066b3;
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0.2, 0.4, 1, 1.2) infinite;
  }
  div:nth-child(2) {
    animation-delay: -0.5s;
  }
  @keyframes lds-ripple {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    4.9% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    5% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
`;