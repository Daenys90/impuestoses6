import Cliente from "./cliente.js";
import Impuesto from "./impuestos.js";

// Crear una instancia de Impuesto
let impuesto1 = new Impuesto(100000, 2000);

// Crear una instancia de Cliente con el impuesto correspondiente
let cliente1 = new Cliente("Juan", impuesto1);

// Calcular el impuesto anual usando la CalculadoraImpuestos
let impuestoAnual = cliente1.calcularImpuesto();

// Imprimir el resultado
console.log(impuestoAnual);

