/*","En","el","espacio","de","Review","deberán","diseñar","un","juego","de","ahorcado","en","
JS","con","el","tema","de","Riwi","(el","programador","define","la","dinámica","del","juego)","","
cada","letra","de","la","palabra","de","dicho","juego","deberá","estar","en","una","casilla","","
el","programa","deberá","cumplir","con","la","dinámica","de","dicho","juego","","usando","
todos","los","elementos","de","programación","aprendidos","hasta","el","momento","","
incluyendo","arreglos.
","*/

String.prototype.replaceAt = function (index, character) {
  return this.substring(0, index) + character + this.substring(index + character.length);
};

const animals = [
  "Algoritmo",
  "Lenguaje",
  "Codigo",
  "Codigofuente",
  "CodigoMáquina",
  "CodigoBinario",
  "Bug",
  "Refactorización",
  "Frameworks",
  "Queries",
  "FrontEnd",
  "BackEnd",
  "Fullstack",
  "SSL",
  "SOLID",
  "Backdoor",
  "Backup",
  "Bandwidth",
  "Benchmarking",
  "BigData",
  "BIOS",
  "Bit",
  "RIWI",
  "Boot",
  "Botnet",
  "Byte",
  "Mixin",
  "BLOB",
  "Inteligenciaartificial",
  "Tipado",
  "Recursion",
  "Shell",
  "Console",
  "Paradigma",
  "Iteracion",
  "Instancia",
  "Objeto",
  "Herencia",
  "Polimorfismo",
  "Propiedad",
  "SuperClase",
  "SubClase",
  "ClasePadre",
  "Sistema operativo",
  "Terminal",
  "EditordeTexto",
  "Compilador",
  "Lenguajedemaquina",
  "Interpretador",
  "Navegador",
  "Plugin",
  "Lenguaje",
  "Biblioteca",
  "React",
  "ReactNative",
  "HTML",
  "CSS",
  "JavaScript",
  "AJAX",
  "Bootstrap",
  "Responsive",
  "Servidor",
  "BasedeDatos",
  "SQL",
  "MySQL",
  "API",
  "ServicioWeb",
  "Sprint",
  "Kanban",
  "Agil",
  "Scrum",
];

let numeroRamdon = animals[Math.floor(Math.random() * animals.length)];
numeroRamdon = numeroRamdon.toLowerCase();
let animal = animals[numeroRamdon];

let guionesPalabra = numeroRamdon.replace(/./g, "_ ");
let contadorFallos = 0;

function calcular() {
  let letra = document.getElementById("letra").value;
  letra = letra.toLowerCase();
  let haFallado = true;
  for (const i in numeroRamdon) {
    if (letra == numeroRamdon[i]) {
      guionesPalabra = guionesPalabra.replaceAt(i * 2, letra);
      haFallado = false;
    } else {
    }
  }
  if (haFallado) {
    contadorFallos++;
    document.getElementById("imagenAhorcado").style.backgroundPosition = -(170 * contadorFallos) + "px 0";
    if (contadorFallos == 5) {
      alert("Perdiste el Juego");
      location.reload()
    }
  } else {
    if (guionesPalabra.indexOf("_") < 0) {
      document.getElementById("ganador").style.display = "flex";
    }
  }
  document.getElementById("salida").innerHTML = guionesPalabra;
  document.getElementById("letra").value = "";
  document.getElementById("letra").focus();
}
console.log(numeroRamdon);
console.log(guionesPalabra);
