import api from "./api" ;

export async function GetLoteria ():Promise<any>{
    var {data} = await api.get("")
    return {timemania: data.timemania, megasena: data.megasena, quina: data.quina};
} 
