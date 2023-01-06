export class CuentaAhorro {
    #cliente;
    #saldo;  //al poner el # indico que es un atributo privado, ver Private Class fields Mozilla

    constructor(cliente,numero,agencia,saldo) {    //los atributos publicos son definidos por el constructor directamente en vez de declararlos en la clase como esta hecho en CuentaCorriente
        this.numero = numero;
        this.agencia = agencia;
        this.#cliente = cliente;
        this.#saldo = saldo;
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