import { Infraccion } from "./infraccion";

export class Acta {  
  constructor(
    public idActa: string,
    public codInfraccion1: number,
    public codInfraccion2: number,
    public codInfraccion3: number,
    public codInfraccion4: number,
    public codInfraccion5: number,
    public dominio: string,
    public documento: string,
    public observacion: string,
    public fecha: Date,
    public descripcionEstado: string,
    public pagoExtrajudicial: number,
    public liquidable: number,
    public grave: number,
    public montoNotificacion: number,
    public actaSugit: string,
    public codEstado: number,
    public es_extrania_juris: number,
    public descuento: number,
    public codNotificacion: boolean,
    public infracciones: Infraccion[],
    public monto: number,
    public fotomulta: boolean,
    public montoSinSellado: number
  ) {}

  get dominioDocumento() {
    return `${this.dominio} ${this.documento}`;
  }
}
