// Saludo de Bienvenida

/* let usuario = document.getAnimations("input").value; */
let texto = `Hola aprendiz de magia bienvenido a HOGWARTS, aquí te vas a formar como un gran Mago `;

const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

hablar(texto);

// Paso 1

Gryffindor = ["Valor", "fuerza", "audacia"];
Hufflepuff = ["Justicia", "Lealtad", "Paciencia"];
Ravenclaw = ["Creatividad", "Erudición", "Inteligencia"];
Slytherin = ["Ambición", "Determinació", "Astucia"];


let aprendiz = {
  nombre: "",
  edad: 18,
  familia: "",
  linaje: "",
  casa: "",
  animalPatronus: "",
  cualidades: [],
};

function seleccionValores() {
  let nombre = document.getElementById("nombre").value;
  let familia = document.getElementById("familia").value
  let gryffindor = document.getElementById("griffindor").checked;
  //Linaje: Mestizo, muggle, Sangre pura )
  let hufflepuff = document.getElementById("hufflepuff").checked;
  //Linaje: Mestizo, muggle)
  let ravenclaw = document.getElementById("ravenclaw").checked;
  //Linaje: Mestizo, muggle, Sangre pura)
  let slytherin = document.getElementById("slytherin").checked;
  //Linaje: "Sangre Pura")
  let mestizo = document.getElementById("mestizo").checked;
  let muggle = document.getElementById("muggle").checked;
  let sangrePura = document.getElementById("muggle").checked;

  if (mestizo) {
    linaje = "mestizo";
  } else if (muggle) {
    linaje = "muggle";
  } else {
    linaje = "Sangre Pura";
  }

  aprendiz.nombre = nombre;
  aprendiz.familia = familia;
  aprendiz.animalPatronus = "";
  aprendiz.linaje = linaje;


  if (gryffindor) {
    aprendiz.casa = "Gryffindor";
    aprendiz.cualidades = Gryffindor;
    console.log(aprendiz);
  } else if (hufflepuff) {
    if (linaje == "Sangre Pura") {
      alert(`Lo siento ${nombre} tus VALORES no pueden pertenecer a este linaje, intenta nuevamente`);
      location.reload();
    }
    aprendiz.casa = "Hufflepuff";
    aprendiz.cualidades = Hufflepuff;
    console.log(aprendiz);
  } else if (ravenclaw) {
    aprendiz.casa = "Ravenclaw";
    aprendiz.cualidades = Hufflepuff;
    console.log(aprendiz);
  } else if (slytherin) {
    if (linaje == "mestizo" || linaje == "muggle") {
      alert(`Lo siento ${nombre} tus VALORES no pueden pertenecer a este linaje, Intenta nuevamente`);
      location.reload();
    }
    aprendiz.linaje = linaje;
    aprendiz.casa = "Slytherin";
    aprendiz.cualidades = Slytherin;
    console.log(aprendiz);
  }
}

// PASO 1, 2: OBJETO DE CLASE
function clasesATomar() {
  let clase = document.getElementById("selecion").value;

  if (clase == "clase1") {
    document.getElementById("1").innerHTML =
      "<li>02:00 pm Clase de Transformaciones: con el Profesor Kevin Slughorn</li>";
  } else if (clase == "clase2") {
    document.getElementById("2").innerHTML =
      "<li>03:00 pm Clase de Herbologia: Profesor Maria Umbridge             </li>";
  } else if (clase == "clase3") {
    document.getElementById("3").innerHTML = "<li>04:00 pm Clase de Pociones: Profesor Liliana McGonagall</li>";
  } else if (clase == "clase4") {
    document.getElementById("4").innerHTML = "<li>05:00 pm Clase de Encantamientos: Profesora Jackie</li>";
  } else if (clase == "clase5") {
    document.getElementById("5").innerHTML =
      "<li>06:00 pm Clase de Defensa Contra Las Artes Oscuras: Profesor Robinson Snape</li>";
  } else if (clase == "clase6") {
    document.getElementById("6").innerHTML = "<li>07:00 pm Clase de Animales Magicos : Profesor David Filch</li>";
  } else if (clase == "clase7") {
    document.getElementById("7").innerHTML = "<li>08:00 pm Clase de Historia De Magia: Profesor Ronald Sprout</li>";
  }

  (aprendiz.profesores = {
    transformaciones: "Profesor Kevin Slughorn",
    horaTransformaciones: "2:00 pm",
    herbologia: "Profesor Maria Umbridge",
    pociones: "Profesor Liliana McGonagall",
    encantamientos: "Profesora Jackie",
    defensaContraLasArtesOscuras: "Profesor Robinson Snape ",
    animalesMagicos: "Profesor David Filch",
    historiaDeMagia: "Profesor Ronald Sprout",
  }),
    console.log(aprendiz);
}
/* let todosProfesores =
  "Profesor Transformaciones: " +
  aprendiz.profesores.transformaciones +
  "<br>" +
  "Profesor Herbologia: " +
  aprendiz.profesores.herbologia +
  "<br>" +
  "Profesor Pociones: " +
  aprendiz.profesores.pociones +
  "<br>" +
  "Profesor Encantamientos: " +
  aprendiz.profesores.encantamientos +
  "<br>" +
  "Profesor Defensa Contra las Artes Oscuras: " +
  aprendiz.profesores.defensaContraLasArtesOscuras +
  "<br>" +
  "Profesor Animales Magicos: " +
  aprendiz.profesores.animalesMagicos +
  "<br>" +
  "Profesor Historia De La Magia: " +
  aprendiz.profesores.historiaDeMagia; */
// PASO 3 CENA DE BIENVENIDA (OBJETO): Casa a la que pertenece.

function casa() {
  if (aprendiz.casa == "Gryffindor") {
    document.getElementById("casaPerte").innerText = `Bienvendio ${aprendiz.nombre} a la casa  ${aprendiz.casa}`;
    document.getElementById("imagen").innerHTML = `<img class="escudo" src="./Img/ScudoGrifindor.gif" alt="" />`;
  } else if (aprendiz.casa == "Hufflepuff") {
    document.getElementById("casaPerte").innerText = `Bienvendio ${aprendiz.nombre} a la casa  ${aprendiz.casa}`;
    document.getElementById("imagen").innerHTML = `<img class="escudo" src="./Img/EscudoHufflepuff.gif" alt="" />`;
  } else if (aprendiz.casa == "Ravenclaw") {
    document.getElementById("casaPerte").innerText = `Bienvendio ${aprendiz.nombre} a la casa  ${aprendiz.casa}`;
    document.getElementById("imagen").innerHTML = `<img class="escudo" src="./Img/escudoRavenclaw.gif" alt="" />`;
  } else if (aprendiz.casa == "Slytherin") {
    document.getElementById("casaPerte").innerText = `Bienvendio ${aprendiz.nombre} a la casa  ${aprendiz.casa}`;
    document.getElementById("imagen").innerHTML = `<img class="escudo" src="./Img/escudoSlytherin.gif" alt="" />`;
  }
}

// PASO 4
function irAClase() {
  boggart = ["snape", "culebra", "araña", "dementor"];
      const aleatorio = boggart[Math.floor(Math.random() * boggart.length)];

  if (aleatorio == "snape") {
    document.getElementById("boggart").innerHTML = `<img class="boggart" src="./Img/profesorSnape.jpg" alt="" />`;
  }else if (aleatorio == "culebra") {
    document.getElementById("boggart").innerHTML = `<img class="boggart" src="./Img/culebra.jpg" alt="" />`;
  }else if (aleatorio == "araña") {
    document.getElementById("boggart").innerHTML = `<img class="boggart" src="./Img/araña.jpg" alt="" />`;
  }else if (aleatorio == "dementor") {
    document.getElementById("boggart").innerHTML = `<img class="boggart" src="./Img/dementor2.jpg" alt="" />`;
  }
  document.getElementById(
    "varita"
  ).innerHTML = `<img onclick="transforma()" class="varita" src="./Img/Varita Magica.png" alt="" />`;
}

function transforma() {

  document.getElementById("boggart").innerHTML = `<img class="boggart" src="./Img/payaso.gif" alt="" />`;
  document.getElementById("boggart").innerHTML = `<img class="boggart" src="./Img/boggartChistoso.gif" alt="" />`;
  };

  

/* if (aprendiz.profesores) {
  console.log(aprendiz.profesores.transformaciones); // Valor 3
} else {
  console.log("La propiedad objetoInterno no está definida.");
}
 */

// paso 5
  
  let patronus = document.getElementById("patronus");

  patronus.addEventListener("click", ()=>{
    animal = ["murcielago", "toro", "gato", "cabra", "caballo", "conejo", "escorpión", "serpiente",""];
      const aleatorio = animal[Math.floor(Math.random() * animal.length)];
      aprendiz.animalPatronus = aleatorio
      document.getElementById("enfermeria").innerText = ""
      document.getElementById("demento").innerHTML = `<img class="demento" src="./Img/destello.png" alt="">`
      if (aleatorio == "toro") {
        document.getElementById("imagenAnimal").innerHTML = `<img class="boggart" src="./Img/toro2.png" alt="" />`
      }else if (aleatorio == "murcielago") {
        document.getElementById("imagenAnimal").innerHTML = `<img class="boggart" src="./Img/murcielago.png" alt="" />`
      }else if (aleatorio == "gato") {
        document.getElementById("imagenAnimal").innerHTML = `<img class="boggart" src="./Img/gato.png" alt="" />`
      }else if (aleatorio == "cabra") {
        document.getElementById("imagenAnimal").innerHTML = `<img class="boggart" src="./Img/cabra.png" alt="" />`
      }else if (aleatorio == "caballo") {
        document.getElementById("imagenAnimal").innerHTML = `<img class="boggart" src="./Img/caballo.png" alt="" />`
      }else if (aleatorio == "serpiente") {
        document.getElementById("imagenAnimal").innerHTML = `<img class="boggart" src="./Img/serpiente.png" alt="" />`
      }else if (aleatorio == "escorpión") {
        document.getElementById("imagenAnimal").innerHTML = `<img class="boggart" src="./Img/escorpion.png" alt="" />`
      }else if (aleatorio == "conejo") {
        document.getElementById("imagenAnimal").innerHTML = `<img class="boggart" src="./Img/conejo.png" alt="" />`
      }else if (aleatorio == "") {
        document.getElementById("imagenAnimal").innerHTML = `<img class="boggart" src="./Img/perdiste.png" alt="" />`
        document.getElementById("enfermeria").innerText = "PERDISTE VAS PARA LA ENFERMERIA"
        document.getElementById("demento").innerHTML = `<img class="demento" src="./Img/dementorgif.gif" alt="">`
      }
      document.getElementById("animalAleatorio").innerText = aprendiz.animalPatronus
  } );
  let defensaContraLasArtesOscuras = {
     /* animal_patronus() {
      animal = ["murcielago", "toro", "gato", "cabra", "caballo", "conejo", "escorpión", "serpiente"];
      const aleatorio = animal[Math.floor(Math.random() * animal.length)];
      aprendiz.animalPatronus = aleatorio
      
      if (aleatorio == "toro") {
        document.getElementById("imagenAnimal").innerHTML = `<img class="boggart" src="./Img/toro2.png" alt="" />`
      }else if (aleatorio == "murcielago") {
        document.getElementById("imagenAnimal").innerHTML = `<img class="boggart" src="./Img/murcielago.png" alt="" />`
      }else if (aleatorio == "gato") {
        document.getElementById("imagenAnimal").innerHTML = `<img class="boggart" src="./Img/gato.png" alt="" />`
      }else if (aleatorio == "cabra") {
        document.getElementById("imagenAnimal").innerHTML = `<img class="boggart" src="./Img/cabra.png" alt="" />`
      }else if (aleatorio == "caballo") {
        document.getElementById("imagenAnimal").innerHTML = `<img class="boggart" src="./Img/caballo.png" alt="" />`
      }else if (aleatorio == "serpiente") {
        document.getElementById("imagenAnimal").innerHTML = `<img class="boggart" src="./Img/serpiente.png" alt="" />`
      }else if (aleatorio == "escorpión") {
        document.getElementById("imagenAnimal").innerHTML = `<img class="boggart" src="./Img/escorpion.png" alt="" />`
      }else if (aleatorio == "conejo") {
        document.getElementById("imagenAnimal").innerHTML = `<img class="boggart" src="./Img/conejo.png" alt="" />`
      }
      document.getElementById("animalAleatorio").innerText = aprendiz.animalPatronus
    }, */
  };
  




/* const myDeepCopy = { ...persona_Profesores };
console.log(myDeepCopy);

function dementor() {
  if (persona_Profesores.Animal == "" && myDeepCopy.Animal == "") {
    return "GANASTES, TIENE ANIMAL";
  } else {
    return "FUISTES A LA ENFERMERIA, NO TIENE ANIMAL";
  }
}
 */

// Paso 6

function mostrarDatos() {
  document.getElementById("nombre2").innerText = `Nombre: ${aprendiz.nombre}`;
  (document.getElementById("edad").innerText = `Edad: ${aprendiz.edad}`),
    (document.getElementById("familia2").innerText = `Familia: ${aprendiz.familia}`),
    (document.getElementById("linaje").innerText = `Linaje: ${aprendiz.linaje}`),
    (document.getElementById("casa").innerText = `Casa: ${aprendiz.casa}`),
    (document.getElementById("animal").innerText = `Animal: ${aprendiz.animalPatronus}`),
    (document.getElementById("cualidades").innerText = `Cualidades: ${aprendiz.cualidades}`);
  /* document.getElementById("profesores").innerHTML = `Profesores: ${todosProfesores}`; */
}

/* console.log(aprendiz.animalPatronus)
console.log(defensaContraLasArtesOscuras.animal_patronus()); */
/* console.log(persona_Profesores);
console.log(dementor());
 */