import Carregamento from "../components/Carregamento";
import Loto from "../components/LotoFacil";
import useLoteria from "../hooks/SortHook";
export default  function Lotofacil() {
    const {lotoFacil} = useLoteria();
    return (
        <>
        {lotoFacil.dataApuracao ? <Loto /> : <Carregamento/>}
        </>
    )
}
