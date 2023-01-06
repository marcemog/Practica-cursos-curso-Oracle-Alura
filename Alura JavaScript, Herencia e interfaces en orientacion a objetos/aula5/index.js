/*Importacion de clases*/
import {Cliente} from './Cliente.js';
import { Empleado } from "./Empleados/Empleado.js"
import { Gerente } from "./Empleados/Gerente.js"
import { Director } from "./Empleados/Director.js"
import { SistemaAutenticacion } from './SistemaAutenticacion.js'

const cliente1 = new Cliente("Leonardo","13804050","V13804050");
cliente1.asignarClave('1111');
console.log(SistemaAutenticacion.login(cliente1, '1111'))
const cliente2 = new Cliente("Maria","1233242","6785856");

const empleado = new Empleado("Juan Perez","1234343",10000);
empleado.asignarClave('12345');
const gerente = new Gerente("Pedro Rivas", "232344",12000);
const director = new Director("Elena Moreno","232323",15000);

/*console.log(empleado.verBonificacion());
console.log(gerente.verBonificacion());
console.log(director.verBonificacion());*/

console.log(SistemaAutenticacion.login(empleado, '12345'))