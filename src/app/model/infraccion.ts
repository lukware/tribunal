export class Infraccion {
  constructor(
    public codigoInfraccion: number,
    public detalle: string,
    public montoMaximo: number,
    public montoMinimo: number,
    public montoExtrajudicial: number,
    public montoInfraccion: number,
    public monto: number,
    public grave: string,
    public articulo: string,
    public ordenanza: string,
    public descripAmpliada: string,
    public idMotivo: number,
    public estado: number,
    public posicion: number
  ) {}

  get detalleArticulo() {
    return `${this.detalle} ${this.articulo}`;
  }
}