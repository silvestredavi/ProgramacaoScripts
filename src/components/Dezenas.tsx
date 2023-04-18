import "../styles/Dezenas.css"
function Dezenas({numeros, tipo}:any) {
    return (
        <div className={tipo}>
            <ul>
                {numeros ? numeros.forEach((element:any) => {
                    linha(element)
                }) : ""}
            </ul>
        </div>
    )
}
const linha = (element: any) =>{
    return  <li>
                {element}
            </li>
}
export default Dezenas;