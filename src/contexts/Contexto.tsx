import { createContext, useEffect, useState } from "react";
import { InfoLoteria, Props } from "../types";
import { GetLoteria } from "../services/Loteria";


const Contexto = createContext<Props>({} as Props);

function Provider({ children }: any) {
    const [megaSena, setMegaSena] = useState({} as InfoLoteria);
    const [lotoFacil, setLotoFacil] = useState({} as InfoLoteria);
    const [carregamento, setCarregamento] = useState(false)
    useEffect(()=>{
        (async ()=>{
            const r = await GetLoteria();
            setLotoFacil(r.lotofacil);
            setMegaSena(r.megaSena);
            setCarregamento(true);
        })();
    },[]);

    return (
        <Contexto.Provider value={{ megaSena, lotoFacil, carregamento, setMegaSena, setLotoFacil, setCarregamento }}>
            {children}
        </Contexto.Provider>
    );
}

export { Contexto, Provider };

