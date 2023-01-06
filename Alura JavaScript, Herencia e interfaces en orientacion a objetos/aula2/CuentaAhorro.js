import { Cuenta } from "./Cuenta.js";

export class CuentaAhorro extends Cuenta {
    constructor(cliente,numero,agencia,saldo) {
        super(cliente,numero,agencia,saldo); //en CuentaAhorro va saldo porque uno si puede definir el saldo inicial
    }

    retirarDeCuenta(valor) {
    super._retirarDeCuenta(valor,2); //comision del 2%
}
}