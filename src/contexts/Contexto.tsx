import { createContext, useState } from "react";
import { InfoLoteria, Props } from "../types";


const Contexto = createContext<Props>({} as Props);

function Provider({ children }: any) {
    const [megaSena, setMegaSena] = useState({} as InfoLoteria);
    const [lotoFacil, setLotoFacil] = useState({} as InfoLoteria);
    const [carregamento, setCarregamento] = useState(false)

    return (
        <Contexto.Provider value={{ megaSena, lotoFacil, carregamento, setMegaSena, setLotoFacil, setCarregamento }}>
            {children}
        </Contexto.Provider>
    );
}

export { Contexto, Provider };

