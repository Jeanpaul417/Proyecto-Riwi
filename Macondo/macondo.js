/* CASO 1 */

/* Hildebrando está alistando todo para poder viajar a Macondo, el sale de trabajar el día
viernes, y tiene un vuelo en la noche, pero el vuelo tiene escala en Medellín. Ese mismo
día le pagan a Hildebrando, a Hildebrando le pagan 2.500.000. */

/* Día viernes, Hildebrando llega al aeropuerto del dorado, se quiere comprar algo de
comer antes del vuelo, ya que hace escala en Medellín en la madrugada, y llegaría en la
mañana a Cartagena las opciones que tiene Hildebrando: */


/* Inicializo las variables que voy a usar dentro de todo el programa */
let sueldo = 2500000;
let gastos = 0

/* Funcion donde hago el calculo despues de la compra y donde muestro la condision en la que queda Hildebrando */
function viaje() {
  let compra = document.getElementById("seleccion").value;

  if (compra == "compra1") {
    sueldo = sueldo - 15000;
    gastos += 15000
    document.getElementById("saldo").innerText = `Su saldo actual es: ${sueldo}`;
    document.getElementById("condicion").innerText = `Condicion actual: le caera mal por que lleva mucho en el stand`;
  }
  if (compra == "compra2") {
    sueldo = sueldo - 23000;
    gastos += 23000
    document.getElementById("saldo").innerText = `Su saldo actual es: ${sueldo}`;
    document.getElementById("condicion").innerText = `Condicion actual: Estara llenito y bien`;
  }
  if (compra == "compra3") {
    document.getElementById("saldo").innerText = `Su saldo actual es: ${sueldo}`;
    document.getElementById("condicion").innerText = `Condicion actual: le tocara comprar algo en Medellin`;
  }
}

/* Caso 2 */

/* 1. Factor de reducción para cada dimensión:
Actividades Modulo 3
• Para el alto, calculamos el factor de reducción como 𝑎𝑙𝑡𝑜𝑃𝑒𝑟𝑚𝑖𝑡𝑖𝑑𝑜
𝑎𝑙𝑡𝑜𝑂𝑟𝑖𝑔𝑖𝑛𝑎𝑙 .
• Para el largo, calculamos el factor de reducción como 𝑙𝑎𝑟𝑔𝑜𝑃𝑒𝑟𝑚𝑖𝑡𝑖𝑑𝑜
𝑙𝑎𝑟𝑔𝑜𝑂𝑟𝑖𝑔𝑖𝑛𝑎𝑙 .
• Para el ancho, calculamos el factor de reducción como 𝑎𝑛𝑐ℎ𝑜𝑃𝑒𝑟𝑚𝑖𝑡𝑖𝑑𝑜
𝑎𝑛𝑐ℎ𝑜𝑂𝑟𝑖𝑔𝑖𝑛𝑎𝑙 . */

/* let altoPermitido = 55;
let largoPermitido = 40;
let anchoPermitido = 20;

let altoOriginal = 60;
let largoOriginal = 40;
let anchoOriginal = 20;

let factorReduccionAlto = altoPermitido / altoOriginal;
let factorReduccionLargo = largoPermitido / largoOriginal;
let factorReduccionAncho = anchoPermitido / anchoOriginal;

console.log(factorReduccionAlto, factorReduccionLargo, factorReduccionAncho);

console.log(Math.min(factorReduccionAlto, factorReduccionLargo, factorReduccionAncho));

let nuevoAlto = altoOriginal * factorReduccionAlto;
let nuevoLargo = largoOriginal * factorReduccionLargo;
let nuevoAncho = anchoOriginal * factorReduccionAncho;

console.log(nuevoAlto, nuevoLargo, nuevoAncho); */

function calcular() {
  let cantiCamiseta = document.getElementById("cantiCamiseta").value;
  let totalCamisetas = cantiCamiseta * 250;
  document.getElementById("totalCamisetas").innerText = totalCamisetas;
  if (cantiCamiseta >= 12) {
    alert("superaste el limite de la ropa, mira la cantidad");
  }

  let cantiPantalones = document.getElementById("cantiPantalones").value;
  let totalPantalones = cantiPantalones * 600;
  document.getElementById("totalPantalones").innerText = totalPantalones;
  if (cantiPantalones >= 8) {
    alert("superaste el limite de la ropa, mira la cantidad");
  }
  let cantiRopaInte = document.getElementById("cantiRopaInte").value;
  let totalRopaInte = cantiRopaInte * 80;
  document.getElementById("totalRopaInte").innerText = totalRopaInte;
  if (cantiRopaInte >= 11) {
    alert("superaste el limite de la ropa, mira la cantidad");
  }

  let cantiSandali = document.getElementById("cantiSandali").value;
  let totalSandali = cantiSandali * 600;
  document.getElementById("totalSandali").innerText = totalSandali;
  if (cantiSandali >= 2) {
    alert("superaste el limite de la ropa, mira la cantidad");
  }

  let cantiShorts = document.getElementById("cantiShorts").value;
  let totalShorts = cantiShorts * 350;
  document.getElementById("totalShorts").innerText = totalShorts;
  if (cantiShorts >= 6) {
    alert("superaste el limite de la ropa, mira la cantidad");
  }

  let cantiPijama = document.getElementById("cantiPijama").value;
  let totalPijama = cantiPijama * 400;
  document.getElementById("totalPijama").innerText = totalPijama;
  if (cantiPijama >= 2) {
    alert("superaste el limite de la ropa, mira la cantidad");
  }

  let cantiAtletico = document.getElementById("cantiAtletico").value;
  let totalAtletico = cantiAtletico * 600;
  document.getElementById("totalAtletico").innerText = totalAtletico;
  if (cantiAtletico >= 2) {
    alert("superaste el limite de la ropa, mira la cantidad");
  }

  let cantiCamara = document.getElementById("cantiCamara").value;
  let totalCamara = cantiCamara * 850;
  document.getElementById("totalCamara").innerText = totalCamara;
  if (cantiCamara >= 2) {
    alert("superaste el limite de la ropa, mira la cantidad");
  }

  let totalAReducir =
    totalCamisetas +
    totalPantalones +
    totalRopaInte +
    totalPijama +
    totalShorts +
    totalPijama +
    totalAtletico +
    totalCamara;

  document.getElementById("totalAReducir").innerText = totalAReducir;
  document.getElementById("actualMaleta").innerText = 12000 - totalAReducir;
}


/* CASO 3 */
function activarWifi() {
 
  let codigo1 = 0b01110010;
  let codigo2 = 0b01101001;
  let codigo3 = 0b01110111;
  let codigo4 = 0b01101001;
  let cod1 = codigo1.toString()
  let cod2 = codigo2.toString()
  let cod3 = codigo3.toString()
  let cod4 = codigo4.toString()

  descifrada = String.fromCharCode(cod1,cod2,cod3,cod4)
  console.log(descifrada)
  console.log(codigo1.toString(), codigo2.toString(), codigo3.toString(), codigo4.toString());
  document.getElementById("binario1").innerText = `Codigo decimal es: ${codigo1}`;
  document.getElementById("binario2").innerText = `Codigo decimal es: ${codigo2}`;
  document.getElementById("binario3").innerText = `Codigo decimal es: ${codigo3}`;
  document.getElementById("binario4").innerText = `Codigo decimal es: ${codigo4}`;
  document.getElementById("codigoComp").innerText = `Contraseña de WIFi es: ${descifrada}`;
  sueldo = sueldo - 50000;
  gastos += 50000
  document.getElementById("saldo3Caso").innerText = `Su saldo actual es de ${sueldo}`;
}

/* CASO 4 */

/* Funcion donde convierto el texto ingresado de Hildebrando y lo vuelvo a Macondez */

function hablar() {
  let cadena = document.getElementById("textoIngresado").value;
  
  let hablandoi = cadena.replace(/[aeou]/g, "i");/* metodo replace y la expresion regular */
  document.getElementById("pedirTaxi").innerText = `Traduccion:  ${hablandoi}`;
  if (cadena != "") {
    document.getElementById("textoIngresado").value = ""
    
  }
}



/* CASO 5 */

function jugar() {
  function maquina(minimo, maximo) {
    let numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
    return numero;
  }

  let piedra = document.getElementById("piedra").checked;
  let papel = document.getElementById("papel").checked;
  let tijera = document.getElementById("tijera").checked;
  console.log("piedra", piedra);
  console.log("papel", papel);
  console.log("tijera", tijera);
  let opcionMaquina = maquina(0, 2);
  console.log("Valor de maq", opcionMaquina);

  if (piedra) {
    if (opcionMaquina == piedra) {
      alert(`Empate la maquina escogio: Piedra`);
      document.getElementById("saldo5Caso").innerText = `Empate sueldo actual es ${sueldo}`;
    } else if (opcionMaquina == papel) {
      alert("Perdiste :( la maquina escogio: Papel");
      sueldo = sueldo - 300000;
      gastos += 300000
      document.getElementById("saldo5Caso").innerText = `Perdiste su sueldo actual es ${sueldo}`;
    } else {
      alert("Ganaste :) La maquina escogio Tijera");
      document.getElementById("saldo5Caso").innerText = `Ganaste sueldo actual es ${sueldo}`;
    }
  } else if (papel) {
    if (opcionMaquina == piedra) {
      alert("Ganaste :)  la maquina escogio piedra");
      document.getElementById("saldo5Caso").innerText = `Ganaste sueldo actual es ${sueldo}`;
    } else if (opcionMaquina == papel) {
      alert("Empate! la maquina escogio Papel");
      document.getElementById("saldo5Caso").innerText = `Empate sueldo actual es ${sueldo}`;
    } else {
      alert("Perdiste :( la maquina escogio Tijera");
      sueldo = sueldo - 300000;
      gastos += 300000
      document.getElementById("saldo5Caso").innerText = `Perdiste su sueldo actual es ${sueldo}`;
    }
  } else if (tijera) {
    if (opcionMaquina == piedra) {
      alert("Perdiste :( la maquina escogio piedra");
      sueldo = sueldo - 300000;
      gastos += 3000000
      document.getElementById("saldo5Caso").innerText = `Perdiste su sueldo actual es ${sueldo}`;
    } else if (opcionMaquina == tijera) {
      alert("Empate! la maquina escogio tijera");
      document.getElementById("saldo5Caso").innerText = `Empate sueldo actual es ${sueldo}`;
    } else {
      alert("Ganaste :) la maquina escogio papel");
      document.getElementById("saldo5Caso").innerText = `Ganaste sueldo actual es ${sueldo}`;
    }
  }
}

function seleccionColor() {
  color = document.getElementById("seleColor").value;

  if (color == "amarillo") {
    document.getElementById("resultadoDesision").innerText = ""
    document.getElementById("resultadoFinal").innerText = ""
    document.getElementById("resultaColor").innerText = `Ir a la piscina, el agua huele raro, pero no le pone importancia`;
    document.getElementById("botonSi").innerHTML = "<button onclick='desicion(1)' >SI</button>"
    document.getElementById("botonNo").innerHTML = "<button onclick='desicion(2)'>NO</button>"
  }else if (color == "verde") {
    document.getElementById("resultadoDesision").innerText = ""
    document.getElementById("resultadoFinal").innerText = ""
    document.getElementById("resultaColor").innerText = `caminatas, y agüita para el camino,`;
    document.getElementById("botonSi").innerHTML = "<button onclick='desicion(3)' >Ir a la Casacada</button>"
    document.getElementById("botonNo").innerHTML = "<button onclick='desicion(4)'>No ir</button>"
  }else if (color == "roja") {
    document.getElementById("resultadoDesision").innerText = ""
    document.getElementById("resultadoFinal").innerText = ""
    document.getElementById("resultaColor").innerText = `Actividades en la playa`;
    document.getElementById("botonSi").innerHTML = "<button onclick='desicion(5)' >Jugar Voleibol</button>"
    document.getElementById("botonNo").innerHTML = "<button onclick='desicion(6)'>Nadar en el mar ir</button>"
    document.getElementById("boton3").innerHTML = "<button onclick='desicion(7)'>Tomar Cocteles</button>"
  }else if (color == "azul") {
    document.getElementById("resultadoDesision").innerText = ""
    document.getElementById("resultadoFinal").innerText = ""
    document.getElementById("resultaColor").innerText = `Actividades dentro del hotel`;
    document.getElementById("botonSi").innerHTML = "<button onclick='desicion(8)' >Jugar Bingo</button>"
    document.getElementById("botonNo").innerHTML = "<button onclick='desicion(9)'>Bailar</button>"
    document.getElementById("boton3").innerHTML = "<button onclick='desicion(10)'>Apostar en el Cacino</button>"
  }
  
}

function desicion(Valor) {
  //Amarillo
  if (Valor == 1) {
    document.getElementById("resultadoDesision").innerText = "Se mete, empieza a sentirse ahogado, demasiado cloro, muere FIN DE LAS VACACIONES"
    document.getElementById("resultadoFinal").innerText = `\nRESULTADO FINAL\nHildebrando estuvo 1 dia \n Fallecio \n Sus gastos Fueron ${gastos}`
  }else if(Valor == 2){
    document.getElementById("resultadoDesision").innerText = `No pasa nada, continua sus vacaciones escoge otro color(dia)`
  }
  //Verde
  if (Valor == 3) {
    document.getElementById("resultadoDesision").innerText = `si elige ir toda la caminata, ira a una hermosa cascada y se tomara fotos sigue otro dia`
  }else if(Valor == 4){
    document.getElementById("resultadoDesision").innerText = `llegará a cierto punto, y se devolverá solo, y de noche se pierde`
    document.getElementById("resultadoFinal").innerText = `\nRESULTADO FINAL\nHildebrando estuvo 2 dias \n Lo Encontraron a los 3 dias regresa aburrido \n Sus gastos Fueron ${gastos}`
  }
  //Rojo
  if (Valor == 5) {
    document.getElementById("resultadoDesision").innerText = `Juega y la pasa genial sigue otro color(dia)`
  }else if (Valor == 6) {
    document.getElementById("resultadoDesision").innerText = `nada en el mar, y monta moto sigue otro color (dia)`
  }else if(Valor == 7){
    document.getElementById("resultadoDesision").innerText = "de pronto siente un fuerte dolor de cabeza y empieza a perder la visión,chirrinchi adulterado, se tiene que devolver de emergencia. (terminan las vacaciones)"
    document.getElementById("resultadoFinal").innerText = `\nRESULTADO FINAL\nHildebrando estuvo 3 dia \n Fallecio \n Sus gastos Fueron ${gastos}`
  }
  //Azul
  if (Valor == 8) {
    sueldo += 2000000
    document.getElementById("resultadoDesision").innerText = `Se gana el Bingo y aumenta su dinero en $2.000.000 saldo actual ${sueldo} sigue sus vacaciones otro color(dia)`
  }else if (Valor == 9) {
    document.getElementById("resultadoDesision").innerText = `Baila toda la noche y se la pasa muy bien sigue al siguiente color(dia)`
  }else if(Valor == 10){
    sueldo -= 2000000
    gastos += 2000000
    document.getElementById("resultadoDesision").innerText = `Pierde todo el dinero y se queda con ${sueldo}`
    document.getElementById("resultadoFinal").innerText = `\nRESULTADO FINAL\nHildebrando estuvo 4 dia \n Perdio casi todo su dinero Terminaron las Vacaciones \n Sus gastos Fueron ${gastos}`
}
}


