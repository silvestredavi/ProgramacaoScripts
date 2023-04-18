import { Contexto } from "../contexts";
import { useContext, useEffect } from "react";
import "../styles/Carregamento.css"
import { GetLoteria} from "../services/Loteria";

function Carregamento() {
    const { lotoFacil, megaSena, carregamento, setLotoFacil, setMegaSena, setCarregamento} = useContext(Contexto)
    useEffect(()=>{
        setTimeout(()=>{
            GetLoteria().then((r)=>{
                console.log(r)
                setLotoFacil(r.lotofacil)
                setMegaSena(r.megaSena)
                setCarregamento(true)
            })

        }, 3000)

    },[])
    return (
        <>

            <div className="carregaDiv" style={{ display: carregamento ? "none" : "" }}>
                <div className="lds-ripple"><div></div><div></div></div>
            </div>
        </>




    )
}
export default Carregamento;