import Carregamento from "../components/Carregamento";
import QUINA from "../components/Quina";
import useLoteria from "../hooks/SortHook";
export default  function Quina() {
    const {quina} = useLoteria();
    return (
        <>
        {quina.dataApuracao ? <QUINA /> : <Carregamento/>}
        </>
    )
}
