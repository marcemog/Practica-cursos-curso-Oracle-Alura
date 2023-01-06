/*Importacion de clases*/
import {Cliente} from './Cliente.js';
import {CuentaCorriente} from './CuentaCorriente.js'

const cliente1 = new Cliente("Leonardo","13804050","V13804050")

const cuentaLeonardo = new CuentaCorriente(cliente1,"1","001");

console.log(cuentaLeonardo.getCliente);

const cliente2 = new Cliente("Maria","1233242","6785856")

const cuentaMaria = new CuentaCorriente(cliente2,"2","002");

/*cuentaLeonardo.depositoEnCuenta(100);
cuentaLeonardo.transferirParaCuenta(80,cuentaMaria);
const saldoMaria = cuentaMaria.verSaldo();
console.log("El saldo actual (cuentaMaria) "+saldoMaria)
const saldoLeonardo = cuentaLeonardo.verSaldo();
console.log("El saldo actual (cuentaLeonardo)) "+saldoLeonardo)*/

console.log(cuentaMaria.getCliente)
console.log(CuentaCorriente.cantidadCuentas)