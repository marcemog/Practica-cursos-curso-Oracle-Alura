export class SistemaAutenticacion {
    static login(usuario,clave){
        if("autenticable" in usuario && usuario.autenticable instanceof Function)       //verifica si existe el metodo(o interfaz en este caso) autenticable en el usuario y tambien que sea una instancia de una funcion y no un atributo
            return usuario.autenticable(clave);   //true o false
        else
            return false;
    }
}