/*Definicion de clases*/
class Cliente 
{
    nombreCliente;
    dniCliente;
    rutCliente;
}

class CuentaCorriente
{
    numero;
    #saldo;  //al poner el # indico que es un atributo privado, ver Private Class fields Mozilla
    agencia;

    constructor() {
        this.numero = '';
        this.#saldo = 0;
        this.agencia = '';
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
}

const cliente1 = new Cliente()

cliente1.nombreCliente = "Leonardo";
cliente1.dniCliente = "13804050";
cliente1.rutCliente = "V13804050"

const cuentaCorriente1 = new CuentaCorriente();
cuentaCorriente1.numero = "123434343";
//cuentaCorriente1.saldo = 1000;
cuentaCorriente1.agencia = 1001;

const cliente2 = new Cliente()
cliente2.nombreCliente = "Pepe";
cliente2.dniCliente = "138043250";
cliente2.rutCliente = "V138043250"

const cuentaCorriente2 = new CuentaCorriente();
cuentaCorriente2.numero = "12346734343";
cuentaCorriente2.saldo = 10090;
cuentaCorriente2.agencia = 1002;


let saldo = cuentaCorriente1.verSaldo();
console.log('El saldo actual es '+saldo);
//console.log(cuentaCorriente1.saldo);
saldo = cuentaCorriente1.depositoEnCuenta(2000);
console.log('El saldo actual es '+saldo);
//console.log(cuentaCorriente1.saldo);
saldo = cuentaCorriente1.retirarDeCuenta(1000);
console.log('El saldo actual es '+saldo);
//console.log(cuentaCorriente1.saldo);
//console.log(cuentaCorriente1);


