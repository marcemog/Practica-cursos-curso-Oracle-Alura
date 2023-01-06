export class Cuenta {
    #cliente;
    #saldo;  //al poner el # indico que es un atributo privado, ver Private Class fields Mozilla

    constructor(cliente,numero,agencia,saldo) {    //los atributos publicos son definidos por el constructor directamente en vez de declararlos en la clase como esta hecho en CuentaCorriente
        
        if(this.constructor == Cuenta){  //Cuenta es una clase abstracta solo es extensible o heredable pero no instanciable, por eso debe quedar protegida para que no se pueda instanciar
            throw new Error("No se debe instanciar objetos de la clase Cuenta")  //es una forma de proteger la cuenta base para que no sea instanciada. al instanciar da error y no sigue funcionando el programa
        }
        this.numero = numero;
        this.agencia = agencia;
        this.#cliente = cliente;
        this.#saldo = saldo;
    }

    set setCliente(valor) {
        if (valor instanceof Cliente) //de esta forma se protege la clase y solo se pueden asignar al #cliente instancias de la clase cliente, de lo contrario podria haber errores
            this.#cliente = valor;
    }

    get getCliente() {
        return this.#cliente;
    }

    depositoEnCuenta(valor) {
        if(valor > 0)
            this.#saldo += valor;
        return this.#saldo;
    
    }

    retirarDeCuenta(valor) {  //metodo abstracto
        throw new Error("Debe implementar el metodo retirar de cuenta en su clase")
    }

    _retirarDeCuenta(valor, comision) {        //definiendo con el _ nos permite tener el metodo privado y no sobreescribir el metodo retirarDeCuenta en las clases hijas, ademas de permitirnos tener un metodo de retiro sin comision
        valor = valor * (1+comision/100);      //tambien permite que exista eventualmente alguna clase hija que pueda usar el metodo de retiro sin comision
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