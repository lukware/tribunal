export interface Acta {
    idActa:            string;
    codInfraccion1:    number;
    codInfraccion2:    number;
    codInfraccion3:    number;
    codInfraccion4:    number;
    codInfraccion5:    number;
    dominio:           string;
    documento:         string;
    observacion:       string;
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
    infracciones:      infracciones[];
    monto:             number;
    fotomulta:         boolean;
    montoSinSellado:   number;
}

interface infracciones {
    codigoInfraccion:   number;
    detalle:            string;
    montoMaximo:        number;
    montoMinimo:        number;
    montoExtrajudicial: number;
    montoInfraccion:    number;
    monto:              number;
    grave:              string;
    articulo:           string;
    ordenanza:          string;
    descripAmpliada:    string;
    idMotivo:           number;
    estado:             number;
    posicion:           number;
}


