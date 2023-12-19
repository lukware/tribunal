import { Infraccion } from './infraccion';

export class Acta {

  static actaDesdeJson(obj: Acta): Acta {    
    return new Acta(
      obj['idActa'],
      obj['codInfraccion1'],
      obj['codInfraccion2'],
      obj['codInfraccion3'],
      obj['codInfraccion4'],
      obj['codInfraccion5'],
      obj['dominio'],
      obj['documento'],
      obj['observacion'],
      obj['fecha'],
      obj['descripcionEstado'],
      obj['pagoExtrajudicial'],
      obj['liquidable'],
      obj['grave'],
      obj['montoNotificacion'],
      obj['actaSugit'],
      obj['codEstado'],
      obj['es_extrania_juris'],
      obj['descuento'],
      obj['codNotificacion'],
      obj['infracciones'],
      obj['monto'],
      obj['fotomulta'],
      obj['montoSinSellado']
    );
  }

  constructor(
    public idActa: string,
    public codInfraccion1: number,
    public codInfraccion2: number,
    public codInfraccion3: number,
    public codInfraccion4: number,
    public codInfraccion5: number,
    public dominio: string,
    public documento: string,
    public observacion: string | null,
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

  get descripcionAmpliada() {
    return `${this.idActa} ${this.observacion}`;
  }
}
