export default class Cliente {
  constructor(cliente, impuestos) {
    this._cliente = () => {
      return cliente;
    };
    this._impuestos = () => {
      return impuestos;
    };
  }

  get cliente() {
    return this._cliente();
  }

  set cliente(cliente_nuevo) {
    return (this._cliente = () => {
      return cliente_nuevo;
    });
  }

  calcularImpuesto() {
    return `El impuesto total a pagar es: ${
      (this._impuestos().monto_bruto_anual -
        this._impuestos().deducciones) *
      0.21
    }`;
  }
}