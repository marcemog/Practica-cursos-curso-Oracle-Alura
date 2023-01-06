import { Cliente } from "./Cliente.js";
import { Cuenta } from "./Cuenta.js";

export class CuentaCorriente extends Cuenta {
    static cantidadCuentas = 0;  //static indica que es un atributo estatico, que se refiere a todas las cuentas, de lo contrario se referira a una cuenta nada mas

    constructor(cliente,numero,agencia) {
        super(cliente,numero,agencia,0);   //al poner 0 en saldo ya inicializo el saldo en 0 y no es necesario definirlo al crear una cuenta, siempre inicia en 0
        CuentaCorriente.cantidadCuentas++; //hago referencia al atributo estatico, atribuyo el valor directamente a la clase
    }

    retirarDeCuenta(valor) {
        super._retirarDeCuenta(valor,5); //comision del 5%
    }
}