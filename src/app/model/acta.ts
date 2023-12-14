import { Infraccion } from './infraccion';
import { Elemento } from './responseBusquedaActasJSON';

export class Acta {

  private test1:number;
  private test2:string;

  static actaDesdeJson(obj: any) : Acta{
    
    return new Acta(
      obj.test1, 
      obj.test2);

  }


  constructor(
    test1: number,
    test2: string

    /*idActa: string,
    codInfraccion1: number,    */
  ) {
    this.test1 = test1;
    this.test2 = test2;
  }

  /*get dominioDocumento() {
    //return `${this.dominio} ${this.documento}`;
  }*/
}

/*export class Acta {
    private idActa: string;
  private codInfraccion1: number;
  private codInfraccion2: number;
  private codInfraccion3: number;
  private codInfraccion4: number;
  private codInfraccion5: number;
  private dominio: string;
  private documento: string;
  private observacion: string;
  private fecha: Date;
  private descripcion;stado: string;
  private pagoExtraju;icial: number;
  private liquidable:;number;
  private grave: number;
  private montoNotifica;ion: number;
  private actaSugit: st;ing;
  private codEstado: number;
  private es_extrania_juris; number;
  private descuento: number;
  private codNotificacion: ;oolean;
  private infracciones: Infraccion[];
  private monto: number;
  private fotomulta: boolean;
  private montoSinSellado: number;

  constructor(idActa:string,
codInfraccion1: number,
codInfraccion2: number,
codInfraccion3: number,
codInfraccion4: number,
codInfraccion5: number,
dominio: string,
documento: string,
observacion: string,
fecha: Date,
descripcionstado: string,
pagoExtrajuicial: number,
liquidable:number,
grave: number,
montoNotificaion: number,
actaSugit: string,
codEstado: number,
es_extrania_juris: number,
descuento: number,
codNotificacion: boolean,
infracciones: Infraccion[],
monto: number,
fotomulta: boolean,
montoSinSellado: number){ 
    this.idActa = idActa;
    this.codInfraccion1 = codInfraccion1;
    this.codInfraccion2 = codInfraccion2;
    this.codInfraccion3 = codInfraccion3;
    this.codInfraccion4 = codInfraccion4;
    this.codInfraccion5 = codInfraccion5;
    this.dominio = dominio;
    this.documento = 
    this.observacion = 
    this.fecha =
    this.descripcionEstado = 
    this.pagoExtrajudicial = 
    this.liquidable = 
    this.grave = 
    this.montoNotificacion = 
    this.actaSugit = 
    this.codEstado = 
    this.es_extrania_juris = 
    this.descuento = 
    this.codNotificacion = 
    this.infracciones = infracciones;
    this.monto = monto;
    this.fotomulta = ,
    this.montoSinSellado: number
  ) {}

  static actaDesdeJson(obj: Object): Acta {
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

  /*obj['codInfraccion1'],
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
      obj['montoSinSellado']*/



  /*static actaDesdeJson(obj: Object) {
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
      obj['montoSinSellado'],
    );
  }*/

  /*constructor(
    idActa: string,
    codInfraccion1: number,
    codInfraccion2: number,
    codInfraccion3: number,
    codInfraccion4: number,
    codInfraccion5: number,
    dominio: string,
    documento: string,
    observacion: string,
    fecha: Date,
    descripcionstado: string,
    pagoExtrajuicial: number,
    liquidable: number,
    grave: number,
    montoNotificaion: number,
    actaSugit: string,
    codEstado: number,
    es_extrania_juris: number,
    descuento: number,
    codNotificacion: boolean,
    infracciones: Infraccion[],
    monto: number,
    fotomulta: boolean,
    montoSinSellado: number,
  ) {}

  get dominioDocumento() {
    return `${this.dominio} ${this.documento}`;
  }
}*/
