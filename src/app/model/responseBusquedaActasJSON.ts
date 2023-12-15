import { Acta } from "./acta";

export interface ResponseBusquedaActasJSON {
    Ok:                boolean;
    CodigoEstado:      string;
    Mensaje:           string;
    txDate:            string;
    Clase:             string;
    CantidadElementos: number;
    Total:             null;
    TipoBusqueda:      number;
    Elementos:         Acta[]; //Cambio por Elemento
}