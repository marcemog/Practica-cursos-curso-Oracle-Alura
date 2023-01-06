/*Importacion de clases*/
import {Cliente} from './Cliente.js';
import {CuentaCorriente} from './CuentaCorriente.js'

const cliente1 = new Cliente()
cliente1.nombreCliente = "Leonardo";
cliente1.dniCliente = "13804050";
cliente1.rutCliente = "V13804050"

const cuentaLeonardo = new CuentaCorriente();
cuentaLeonardo.numero = "1";
cuentaLeonardo.agencia = "001";
cuentaLeonardo.setCliente = cliente1;

console.log(cuentaLeonardo.getCliente);

const cliente2 = new Cliente()

cliente2.nombreCliente = "Maria";
cliente2.dniCliente = "1233242";
cliente2.rutCliente = "6785856"

const cuentaMaria = new CuentaCorriente();
cuentaMaria.numero = "2";
cuentaMaria.agencia = "002";
cuentaMaria.setCliente = cliente2;

/*cuentaLeonardo.depositoEnCuenta(100);
cuentaLeonardo.transferirParaCuenta(80,cuentaMaria);
const saldoMaria = cuentaMaria.verSaldo();
console.log("El saldo actual (cuentaMaria) "+saldoMaria)
const saldoLeonardo = cuentaLeonardo.verSaldo();
console.log("El saldo actual (cuentaLeonardo)) "+saldoLeonardo)*/

console.log(cuentaMaria.getCliente)