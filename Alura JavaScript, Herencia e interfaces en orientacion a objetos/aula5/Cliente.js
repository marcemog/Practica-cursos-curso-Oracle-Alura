export class Cliente 
{
    nombreCliente;
    dniCliente;
    rutCliente;
    #clave;

    constructor(nombreCliente, dniCliente, rutCliente){
        this.nombreCliente = nombreCliente;
        this.dniCliente = dniCliente;
        this.rutCliente = rutCliente;
        this.#clave = '';
    }

    asignarClave(clave){  //setter
        this.#clave = clave;
    }

    autenticable(clave){                //gracias al polimorfismo puedo aplicar diferentes comportamientos dependiendo de la clase donde aplico el metodo
        return false;                   //los clientes nunca van a estar autenticados, a diferencia de los empleados que pueden autenticarse con su clave
    }

}