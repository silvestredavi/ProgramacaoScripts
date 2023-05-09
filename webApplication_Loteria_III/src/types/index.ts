export interface InfoLoteria {
    acumulado: boolean,
    concursoEspecial: boolean,
    dataApuracao: string,
    dataPorExtenso: string,
    dataProximoConcurso: string,
    dezenas: string[],
    numeroDoConcurso: number,
    quantidadeGanhadores: number,
    tipoJogo: string,
    valorEstimadoProximoConcurso:number,
    valorPremio: number

}

export interface Props{
    megasena: InfoLoteria;
    timemania: InfoLoteria;
    quina: InfoLoteria;
    carregamento:boolean
    setMegaSena: Function;
    setTimemania: Function;
    setQuina: Function;
    setCarregamento : Function;
}



