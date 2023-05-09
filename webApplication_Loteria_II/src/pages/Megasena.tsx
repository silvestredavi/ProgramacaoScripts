import Carregamento from "../components/Carregamento";
import Mega from "../components/MegaSena";
import useLoteria from "../hooks/SortHook";
export default  function Megasena() {
    const {megaSena} = useLoteria();
    return (
        <>
        {megaSena.dataApuracao ? <Mega /> : <Carregamento/>}
        </>
    )
}
