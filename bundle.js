import Cliente from '/cliente.js';
import CalculadoraImpuestos from '/calculadoraImpuestos.js';

// Crear una instancia de Cliente
const cliente1 = new Cliente('Cliente 1', 1000000, 200000);

// Calcular el impuesto anual usando la CalculadoraImpuestos
const impuestoAnual = CalculadoraImpuestos.calcularImpuestoAnual(cliente1);

// Imprimir el resultado
console.log(`El impuesto anual a pagar para ${cliente1.nombre} es: ${impuestoAnual}`);
