/*Importacion de clases*/
import {Cliente} from './Cliente.js';
import {CuentaCorriente} from './CuentaCorriente.js';
import {CuentaAhorro} from './CuentaAhorro.js';

const cliente1 = new Cliente("Leonardo","13804050","V13804050")
const cuentaLeonardo = new CuentaCorriente(cliente1,"1","001");

const cliente2 = new Cliente("Maria","1233242","6785856")
const cuentaMaria = new CuentaCorriente(cliente2,"2","002");

const cuentaAhorroLeonardo = new CuentaAhorro(cliente1,"9985","001",0);

/*console.log(cuentaLeonardo);
cuentaLeonardo.depositoEnCuenta(150);
console.log(cuentaLeonardo.verSaldo());
cuentaLeonardo.retirarDeCuenta(70);
console.log(cuentaLeonardo.verSaldo());
console.log(cuentaAhorroLeonardo);
cuentaAhorroLeonardo.depositoEnCuenta(200);
console.log(cuentaAhorroLeonardo.verSaldo());
cuentaAhorroLeonardo.retirarDeCuenta(120);
console.log(cuentaAhorroLeonardo.verSaldo());*/

