import { createContext, useEffect, useState } from "react";
import { InfoLoteria, Props } from "../types";
import { GetLoteria } from "../services/Loteria";


const Contexto = createContext<Props>({} as Props);

function Provider({ children }: any) {
    const [megasena, setMegaSena] = useState({} as InfoLoteria);
    const [timemania, setTimemania] = useState({} as InfoLoteria);
    const [quina, setQuina] = useState({} as InfoLoteria);
    const [carregamento, setCarregamento] = useState(false)
    useEffect(()=>{
        (async ()=>{
            const r = await GetLoteria();
            setTimemania(r.timemania);
            setMegaSena(r.megasena);
            setQuina(r.quina);
            setCarregamento(true);
        })();
    },[]);

    return (
        <Contexto.Provider value={{ megasena, timemania, quina, carregamento, setMegaSena, setTimemania, setQuina, setCarregamento }}>
            {children}
        </Contexto.Provider>
    );
}

export { Contexto, Provider };

