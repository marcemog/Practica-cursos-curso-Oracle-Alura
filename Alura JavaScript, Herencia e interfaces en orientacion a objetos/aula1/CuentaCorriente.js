import { Cliente } from "./Cliente.js";

export class CuentaCorriente
{
    #cliente;
    numero;
    #saldo;  //al poner el # indico que es un atributo privado, ver Private Class fields Mozilla
    agencia;
    static cantidadCuentas = 0;  //static indica que es un atributo estatico, que se refiere a todas las cuentas, de lo contrario se referira a una cuenta nada mas

    set setCliente(valor) {
        if (valor instanceof Cliente) //de esta forma se protege la clase y solo se pueden asignar al #cliente instancias de la clase cliente, de lo contrario podria haber errores
            this.#cliente = valor;
    }

    get getCliente() {
        return this.#cliente;
    }

    constructor(cliente,numero,agencia) {
        this.setCliente = cliente;
        this.numero = numero;
        this.#saldo = 0;
        this.agencia = agencia;
        CuentaCorriente.cantidadCuentas++; //hago referencia al atributo estatico, atribuyo el valor directamente a la clase
    }

    depositoEnCuenta(valor) {
        if(valor > 0)
            this.#saldo += valor;
        return this.#saldo;
    
    }

    retirarDeCuenta(valor) {
        if(valor <= this.#saldo)
            this.#saldo -= valor;
        return this.#saldo;
    }

    verSaldo() {
        return this.#saldo;
    }

    transferirParaCuenta(valor,cuentaDestino) {  //valor es un parametro valor y cuentaDestino es un parametro por referencia
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
    }
}