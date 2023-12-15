import { Acta } from "./acta";
import { Infraccion } from "./infraccion";

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

//Cambio por Elemento
/*export interface Acta {
    idActa:            string;
    codInfraccion1:    number;
    codInfraccion2:    number;
    codInfraccion3:    number;
    codInfraccion4:    number;
    codInfraccion5:    number;
    dominio:           string;
    documento:         string;
    observacion:       null | string;
    fecha:             Date;
    descripcionEstado: string;
    pagoExtrajudicial: number;
    liquidable:        number;
    grave:             number;
    montoNotificacion: number;
    actaSugit:         string;
    codEstado:         number;
    es_extrania_juris: number;
    descuento:         number;
    codNotificacion:   boolean;
    infracciones:      Infraccion[]; //Se usa la clase Infracion en ves de la interface Infraccion
    monto:             number;
    fotomulta:         boolean;
    montoSinSellado:   number;
}*/