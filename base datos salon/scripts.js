function hacerToggle(id) {
  var element1 = document.getElementById("mujeresSideBar");
  var element2 = document.getElementById("hombresSideBar");
  var element3 = document.getElementById("mayoresSideBar");
  var element4 = document.getElementById("menoresSideBar");
  var element5 = document.getElementById("TodosSideBar");
  var element6 = document.getElementById("coloresSideBar")
  var element7 = document.getElementById("generoSideBar")
  element1.classList.replace("seleccionSideActivo", "side-bars");
  element2.classList.replace("seleccionSideActivo", "side-bars");
  element3.classList.replace("seleccionSideActivo", "side-bars");
  element4.classList.replace("seleccionSideActivo", "side-bars");
  element5.classList.replace("seleccionSideActivo", "side-bars");
  element6.classList.replace("seleccionSideActivo", "side-bars");
  element7.classList.replace("seleccionSideActivo", "side-bars");

  switch (id) {
    case 1:
      element1.classList.replace("side-bars", "seleccionSideActivo");
      break;
    case 2:
      element2.classList.replace("side-bars", "seleccionSideActivo");
      break;
    case 3:
      element3.classList.replace("side-bars", "seleccionSideActivo");
      break;
    case 4:
      element4.classList.replace("side-bars", "seleccionSideActivo");
      break;
    case 5:
      element5.classList.replace("side-bars", "seleccionSideActivo");
      break;
      case 6:
      element6.classList.replace("side-bars", "seleccionSideActivo");
      break;
    case 7:
      element7.classList.replace("side-bars", "seleccionSideActivo");
      break;
  }
}

function iniciarSesion() {
  var coders = [
    {
      nombre: "Robinson",
      correo: "robinson@gmail.com",
      password: "123",
    },
    {
      nombre: "Juan Pablo",
      correo: "juanp@gmail.com",
      password: "123",
    },
  ];
  let correo = document.getElementById("correo").value;
  let password = document.getElementById("password").value;
  coders.forEach(function (coder) {
    if (correo == coder.correo && password == coder.password) {
      sessionStorage.setItem("nombre", coder.nombre);
      sessionStorage.setItem("auth", "si");
      location.href = "home.html";
    } else {
      document.getElementById("incorrecta").innerText = "Datos Incorrectos";
    }
  });
}
let auth = sessionStorage.getItem("auth");

if (auth != "si") {
  location.href = "index.html";
}

function cerrarSesion() {
  sessionStorage.setItem("nombre", "");
  sessionStorage.setItem("auth", "");
  location.href = "index.html";
}

coders = [
  {
    nombre: "Dina",
    alias: "Martinez",
    edad: "22",
    sexo: "Femenino",
    color_favorito: "verde",
    comida_favorita: "Pizza",
    genero: [
      {
        nombre: "Ciencia ficción",
        pelicula_favorita: "Harry potter la piedra filosofal",
        imagen_peli: ["./imagenes/harryPotter.jpg"],
      },
      { nombre: "Romance" },
    ],
    actor: "Luna",
    imagen_actor: ["./Imagenes actor/Luna.webp"],
    quienEsMejor: "Cristiano",
    deporte_favorito: "Voleibol",
  },
  {
    nombre: "Jhoan Sebastian",
    alias: "El mono",
    edad: "25",
    sexo: "Masculino",
    color_favorito: "azul",
    comida_favorita: "Pastas",
    genero: [
      {
        nombre: "Ciencia ficción",
        pelicula_favorita: "Lucy",
        imagen_peli: ["./imagenes/Lucy.jpg"],
      },
      { nombre: "Accion" },
    ],
    actor: "Lucy",
    imagen_actor: ["./Imagenes actor/Lucy.jpg"],
    quienEsMejor: "No le gusta",
    deporte_favorito: "Voleibol",
  },
  {
    nombre: "Daniel",
    alias: "Torres",
    edad: "32",
    sexo: "Masculino",
    color_favorito: "Azul",
    comida_favorita: "Perras Calientes",
    genero: [
      {
        nombre: "Comedia",
        pelicula_favorita: "Hits",
        imagen_peli: ["./imagenes/Hitch.jpg"],
      },
      { nombre: "Accion" },
    ],
    actor: "Adam Sandler",
    imagen_actor: ["./Imagenes actor/Adam sandler.jpeg"],
    quienEsMejor: "Cristiano",
    deporte_favorito: "Futbol",
  },
  {
    nombre: "Juan Felipe",
    alias: "Pipe",
    edad: "28",
    sexo: "Masculino",
    color_favorito: "Verde",
    comida_favorita: "Bandeja paisa",
    genero: [
      {
        nombre: "Aventura",
        pelicula_favorita: "Shrek",
        imagen_peli: ["./imagenes/shrek.jpeg"],
      },
      { nombre: "Comedia" },
    ],
    actor: "Burro",
    imagen_actor: ["./Imagenes actor/Burro.jpg"],
    quienEsMejor: "Messi",
    deporte_favorito: "Baloncesto",
  },
  {
    nombre: "Juan Pablo",
    alias: "Juan",
    edad: "26",
    sexo: "Masculino",
    color_favorito: "Rojo",
    comida_favorita: "Pasta",
    genero: [
      {
        nombre: "Ciencia ficción",
        pelicula_favorita: "El juego de Ender",
        imagen_peli: ["./imagenes/EljuegodeEnder.jpg"],
      },
      { nombre: "Accion" },
    ],
    actor: "Ender",
    imagen_actor: ["./Imagenes actor/Ender.webp"],
    quienEsMejor: "No le gusta",
    deporte_favorito: "Formula 1",
  },
  {
    nombre: "Daniel",
    alias: "Dani",
    edad: "18",
    sexo: "Masculino",
    color_favorito: "Negro",
    comida_favorita: "Sancocho",
    genero: [
      {
        nombre: "Aventura",
        pelicula_favorita: "Van Helsing",
        imagen_peli: ["./imagenes/VanHelsing.jpg"],
      },
      { nombre: "Fantasía oscura" },
    ],
    actor: "Hugh Jackman ",
    imagen_actor: ["./Imagenes actor/Hugh jackman.jpg"],
    quienEsMejor: "Messi",
    deporte_favorito: "Futbol",
  },
  {
    nombre: "Santiago",
    alias: "Santo",
    edad: "33",
    sexo: "Masculino",
    color_favorito: "Azul",
    comida_favorita: "Hamburguesa ",
    genero: [
      {
        nombre: "Suspenso",
        pelicula_favorita: "El silencio de los inocentes ",
        imagen_peli: ["./imagenes/Elsilenciodelosinosentes.jpg"],
      },
      { nombre: "Terror" },
    ],
    actor: "Hannibal",
    imagen_actor: ["./Imagenes actor/Hannibal.webp"],
    quienEsMejor: "Messi",
    deporte_favorito: "Crosfit",
  },
  {
    nombre: "Jhoan",
    alias: "Rios",
    edad: "18",
    sexo: "Masculino",
    color_favorito: "Rojo",
    comida_favorita: "Pizza",
    genero: [
      {
        nombre: "Comedia",
        pelicula_favorita: "Ted",
        imagen_peli: ["./imagenes/Ted.jpg"],
      },
      { nombre: "fantasía" },
    ],
    actor: "Walter White",
    imagen_actor: ["./Imagenes actor/walter white.webp"],
    quienEsMejor: "Cristiano",
    deporte_favorito: "Fútbol",
  },
  {
    nombre: "Mateo",
    alias: "SkormJF",
    edad: "28",
    sexo: "Masculino",
    color_favorito: "Rojo",
    comida_favorita: "Hamburguesa",
    genero: [
      {
        nombre: "Aventura",
        pelicula_favorita: "Harry Potter",
        imagen_peli: ["./imagenes/harryPotter.jpg"],
      },
      { nombre: "Fantasía" },
    ],
    actor: "Severus Snape",
    imagen_actor: ["./Imagenes actor/severus-snape.jpg"],
    quienEsMejor: "Ninguno",
    deporte_favorito: "Gimnasio",
  },
  {
    nombre: "Duvan",
    alias: "Bolita",
    edad: "18",
    sexo: "Masculino",
    color_favorito: "Azul",
    comida_favorita: "Pastas",
    genero: [
      {
        nombre: "Aventura",
        pelicula_favorita: "kung fu panda",
        imagen_peli: ["./imagenes/kungfupanda.jpg"],
      },
      { nombre: "Animación" },
    ],
    actor: "Tigresa",
    imagen_actor: ["./Imagenes actor/Tigresa.webp"],
    quienEsMejor: "Messi",
    deporte_favorito: "Fútbol",
  },
  {
    nombre: "Juan David",
    alias: "Dek",
    edad: "21",
    sexo: "Masculino",
    color_favorito: "Azul",
    comida_favorita: "Pastas",
    genero: [
      {
        nombre: "Acción",
        pelicula_favorita: "Avengers Endgame",
        imagen_peli: ["./imagenes/avengers.jpg"],
      },
      { nombre: "Ciencia ficción" },
    ],
    actor: "Tony stark",
    imagen_actor: ["./Imagenes actor/Tony_Stark.webp"],
    quienEsMejor: "Ninguno",
    deporte_favorito: "Baloncesto",
  },
  {
    nombre: "Alejandro",
    alias: "Draven",
    edad: "17",
    sexo: "Masculino",
    color_favorito: "Negro",
    comida_favorita: "Mexicana",
    genero: [
      {
        nombre: "Ciencia ficción",
        pelicula_favorita: "Interestelar",
        imagen_peli: ["./imagenes/Interestelar.jpg"],
      },
      { nombre: "Drama" },
    ],
    actor: "Will Smith",
    imagen_actor: ["./Imagenes actor/will smith.webp"],
    quienEsMejor: "Messi",
    deporte_favorito: "Baloncesto",
  },
  {
    nombre: "Duvian",
    alias: "Cuchachos",
    edad: "32",
    sexo: "Masculino",
    color_favorito: "Negro",
    comida_favorita: "Mazamorra",
    genero: [
      {
        nombre: "Aventura",
        pelicula_favorita: "El Señor de los Anillos el retorno del Rey",
        imagen_peli: ["./imagenes/señordelosanillos.jpeg"],
      },
      { nombre: "Fantasía épica" },
    ],
    actor: "Legolas",
    imagen_actor: ["./Imagenes actor/legolas.webp"],
    quienEsMejor: "Ronaldinho",
    deporte_favorito: "Fútbol",
  },
  {
    nombre: "Angeli",
    alias: "Muñeca",
    edad: "19",
    sexo: "Femenino",
    color_favorito: "Rojo",
    comida_favorita: "Salchipapas",
    genero: [
      {
        nombre: "Comedia",
        pelicula_favorita: "Son como niños",
        imagen_peli: ["./imagenes/soncomoniños.jpg"],
      },
      { nombre: "Buddy" },
    ],
    actor: "Adam Sandler",
    imagen_actor: ["./Imagenes actor/Adam sandler.jpeg"],
    quienEsMejor: "Messi",
    deporte_favorito: "Voleibol ",
  },
  {
    nombre: "Richard",
    alias: "Damian",
    edad: "34",
    sexo: "Masculino",
    color_favorito: "Negro",
    comida_favorita: "Costillas bbq",
    genero: [
      {
        nombre: "Acción",
        pelicula_favorita: "La emboscada",
        imagen_peli: ["./imagenes/la-emboscada-original.jpg"],
      },
      { nombre: "Espionaje" },
    ],
    actor: "Charlie esteron",
    imagen_actor: ["./Imagenes actor/Charlize_Theron.jpeg"],
    quienEsMejor: "Messi",
    deporte_favorito: "Pesas",
  },
  {
    nombre: "Laura",
    alias: "Euler",
    edad: "18",
    sexo: "Femenino",
    color_favorito: "Negro",
    comida_favorita: "Papas fritas",
    genero: [
      {
        nombre: "Ciencia ficción",
        pelicula_favorita: "Intelestelar",
        imagen_peli: ["./imagenes/Interestelar.jpg"],
      },
      { nombre: "Drama" },
    ],
    actor: "Murph",
    imagen_actor: ["./Imagenes actor/murphy cooper.webp"],
    quienEsMejor: "Messi",
    deporte_favorito: "Patinaje",
  },
  {
    nombre: "Santiago",
    alias: "Luffy",
    edad: "23",
    sexo: "Masculino",
    color_favorito: "Morado",
    comida_favorita: "Mexicana",
    genero: [
      {
        nombre: "Acción",
        pelicula_favorita: "Scott pilgrim vs the world",
        imagen_peli: ["./imagenes/Scott_Pilgrim_contra_el_mundo-.jpg"],
      },
      { nombre: "Comedia" },
    ],
    actor: "Ramona Flawers",
    imagen_actor: ["./Imagenes actor/Ramona_Flowers.webp"],
    quienEsMejor: "Kylian Mbappé",
    deporte_favorito: "Skate",
  },
  {
    nombre: "Juan Diego",
    alias: "No tiene",
    edad: "24",
    sexo: "Masculino",
    color_favorito: "Azul",
    comida_favorita: "Papas fritas",
    genero: [
      {
        nombre: "Comedia",
        pelicula_favorita: "Intocable ",
        imagen_peli: ["./imagenes/intocable.jpg"],
      },
      { nombre: "Drama" },
    ],
    actor: "Omar Sy",
    imagen_actor: ["./Imagenes actor/Omar Sy.jpg"],
    quienEsMejor: "Messi",
    deporte_favorito: "Motocross",
  },
  {
    nombre: "José Manuel",
    alias: "Jose",
    edad: "18",
    sexo: "Masculino",
    color_favorito: "Rojo",
    comida_favorita: "Pastas",
    genero: [
      {
        nombre: "Comedia",
        pelicula_favorita: "Sangre sudor y gloria ",
        imagen_peli: ["./imagenes/sangresudorglori.jpg"],
      },
      { nombre: "Acción" },
    ],
    actor: "la roca",
    imagen_actor: ["./Imagenes actor/la_roca.webp"],
    quienEsMejor: "Cristiano",
    deporte_favorito: "Fútbol",
  },
  {
    nombre: "Herry",
    alias: "Doctor",
    edad: "35",
    sexo: "Masculino",
    color_favorito: "Verde",
    comida_favorita: "Bandeja paisa ",
    genero: [
      {
        nombre: "Acción",
        pelicula_favorita: "Jumper",
        imagen_peli: ["./imagenes/Jumper.jpg"],
      },
      { nombre: "Aventura" },
    ],
    actor: "David rice",
    imagen_actor: ["./Imagenes actor/david rice.jpg"],
    quienEsMejor: "Cristiano",
    deporte_favorito: "Fútbol",
  },
  {
    nombre: "David",
    alias: "Zumito",
    edad: "18",
    sexo: "Masculino",
    color_favorito: "Blanco",
    comida_favorita: "Pastas",
    genero: [
      {
        nombre: "Suspenso",
        pelicula_favorita: "Viernes 13",
        imagen_peli: ["./imagenes/viernes13.jpg"],
      },
      { nombre: "Terror" },
    ],
    actor: "Jackson Voorhees",
    imagen_actor: ["./Imagenes actor/Jackson Voorhees.avif"],
    quienEsMejor: "Cristiano",
    deporte_favorito: "Judo",
  },
  {
    nombre: "Andrés",
    alias: "El pepe",
    edad: "22",
    sexo: "Masculino",
    color_favorito: "Morado",
    comida_favorita: "Hamburguesa",
    genero: [
      {
        nombre: "Aventura",
        pelicula_favorita: "Castillo Vagabundo",
        imagen_peli: ["./imagenes/el_castillo_vagabundo.jpeg"],
      },
      { nombre: "Fantasía" },
    ],
    actor: "Robert De Niro",
    imagen_actor: ["./Imagenes actor/Robert-De-Niro.webp"],
    quienEsMejor: "Pato el destripador",
    deporte_favorito: "Baloncesto",
  },
  {
    nombre: "Victor",
    alias: "Zarco",
    edad: "30",
    sexo: "Masculino",
    color_favorito: "Negro",
    comida_favorita: "Pizza",
    genero: [
      {
        nombre: "Ciencia ficción",
        pelicula_favorita: "Interestelar",
        imagen_peli: ["./imagenes/Interestelar.jpg"],
      },
      { nombre: "Aventura" },
    ],
    actor: "Joseph cooper",
    imagen_actor: ["./Imagenes actor/Jospeh_Cooper.webp"],
    quienEsMejor: "Cristiano",
    deporte_favorito: "Futbol",
  },
  {
    nombre: "Santiago",
    alias: "Santicadavid10",
    edad: "31",
    sexo: "Masculino",
    color_favorito: "Negro",
    comida_favorita: "Frijoles",
    genero: [
      {
        nombre: "Suspenso",
        pelicula_favorita: "Saw",
        imagen_peli: ["./imagenes/saw.jpg"],
      },
      { nombre: "Terror" },
    ],
    actor: "Tobin Bell",
    imagen_actor: ["./Imagenes actor/Tobin bell.webp"],
    quienEsMejor: "Cristiano",
    deporte_favorito: "Fútbol",
  },
  {
    nombre: "Sebastian",
    alias: "Sebas",
    edad: "16",
    sexo: "Masculino",
    color_favorito: "Rojo",
    comida_favorita: "Pizza",
    genero: [
      {
        nombre: "Ciencia ficción",
        pelicula_favorita: "Transformers",
        imagen_peli: ["./imagenes/transformes.jpg"],
      },
      { nombre: "Acción" },
    ],
    actor: "Chavo",
    imagen_actor: ["./Imagenes actor/chavo.webp"],
    quienEsMejor: "Cristiano",
    deporte_favorito: "Baloncesto",
  },
  {
    nombre: "Vladimir",
    alias: "Vlacho",
    edad: "39",
    sexo: "Masculino",
    color_favorito: "Esmeralda",
    comida_favorita: "Bandeja Paisa",
    genero: [
      {
        nombre: "Suspenso",
        pelicula_favorita: "Sueños de Fuga",
        imagen_peli: ["./imagenes/sueñosdefuga.jpg"],
      },
      { nombre: "Crimen" },
    ],
    actor: "Tom Hanks",
    imagen_actor: ["./Imagenes actor/Tom hanks.jpg"],
    quienEsMejor: "Ninguno",
    deporte_favorito: "Downhill",
  },
  {
    nombre: "David",
    alias: "Andres",
    edad: "21",
    sexo: "Masculino",
    color_favorito: "Negro",
    comida_favorita: "Bandeja paisa",
    genero: [
      {
        nombre: "No le gusta las peliculas",
        pelicula_favorita: "",
        imagen_peli: [],
      },
      { nombre: "" },
    ],
    actor: "Tommy shelby",
    imagen_actor: ["./Imagenes actor/Tommy_Shelby.jpg"],
    quienEsMejor: "Messi",
    deporte_favorito: "Futbol",
  },
  {
    nombre: "Manuela",
    alias: "Manu",
    edad: "16",
    sexo: "Femenino",
    color_favorito: "Azul",
    comida_favorita: "Mexicana",
    genero: [
      {
        nombre: "Comedia",
        pelicula_favorita: "Beetlejuice",
        imagen_peli: ["./imagenes/Beetlejuice.jpg"],
      },
      { nombre: "Terror" },
    ],
    actor: "Victor Garduno",
    imagen_actor: ["./Imagenes actor/Victor_Garduno.webp"],
    quienEsMejor: "Ninguno",
    deporte_favorito: "Ninguno ",
  },
  {
    nombre: "Daniel",
    alias: "Platica secy",
    edad: "18",
    sexo: "Masculino",
    color_favorito: "Azul",
    comida_favorita: "Frijoles",
    genero: [
      {
        nombre: "Aventura",
        pelicula_favorita: "El titanic",
        imagen_peli: ["./imagenes/titanic.jpg"],
      },
      { nombre: "Romance" },
    ],
    actor: "Rose",
    imagen_actor: ["./Imagenes actor/Rose.webp"],
    quienEsMejor: "Ninguno",
    deporte_favorito: "Microfútbol",
  },
  {
    nombre: "Mariana",
    alias: "Nana",
    edad: "19",
    sexo: "Femenino",
    color_favorito: "Blanco",
    comida_favorita: "Hamburguesa",
    genero: [
      {
        nombre: "Comedia",
        pelicula_favorita: "Forrest Gump",
        imagen_peli: ["./imagenes/Forrest.jpg"],
      },
      { nombre: "Romance" },
    ],
    actor: "Forrest Gump",
    imagen_actor: ["./Imagenes actor/Tom hanks.jpg"],
    quienEsMejor: "Messi",
    deporte_favorito: "Baloncesto",
  },
  {
    nombre: "Juan Pablo",
    alias: "Junior",
    edad: "36",
    sexo: "Masculino",
    color_favorito: "Rojo",
    comida_favorita: "Pollo Frisby",
    genero: [
      {
        nombre: "Acción",
        pelicula_favorita: "Deadpool",
        imagen_peli: ["./imagenes/deadPool.jpg"],
      },
      { nombre: "Comedia" },
    ],
    actor: "Ryan Reynolds",
    imagen_actor: ["./Imagenes actor/Ryan_Reynolds.webp"],
    quienEsMejor: "Kylian Mbappé",
    deporte_favorito: "Gimnasio",
  },
  {
    nombre: "Valentina",
    alias: "Valen",
    edad: "29",
    sexo: "Femenino",
    color_favorito: "Rosado",
    comida_favorita: "Costillas BBQ ",
    genero: [
      {
        nombre: "Acción",
        pelicula_favorita: "Tres metros sobre el cielo",
        imagen_peli: ["./imagenes/tresmetrossobreelcielo.jpg"],
      },
      { nombre: "Romance" },
    ],
    actor: "William Levy",
    imagen_actor: ["./Imagenes actor/william_levy.jpg"],
    quienEsMejor: "Cristiano",
    deporte_favorito: "Voleibol",
  },
  {
    nombre: "Robinson",
    alias: "Kartus",
    edad: "27",
    sexo: "Masculino",
    color_favorito: "Negro",
    comida_favorita: "Pasta",
    genero: [
      {
        nombre: "Ciencia ficción",
        pelicula_favorita: "Intelestelar",
        imagen_peli: ["./imagenes/Interestelar.jpg"],
      },
      { nombre: "Aventura" },
    ],
    actor: "Matthew McConaughey",
    imagen_actor: ["./Imagenes actor/matthew_mcConaughey.jpg"],
    quienEsMejor: "Messi",
    deporte_favorito: "Boxeo",
  },
  {
    nombre: "Stewin",
    alias: "Steve",
    edad: "28",
    sexo: "Masculino",
    color_favorito: "Verde",
    comida_favorita: "Comida de Mar",
    genero: [
      {
        nombre: "Accion",
        pelicula_favorita: "Francotirador",
        imagen_peli: ["./imagenes/francotirador.jpg"],
      },
      { nombre: "Drama" },
    ],
    actor: "Crhis Kyle",
    imagen_actor: ["./Imagenes actor/Chris_kyle.jpg"],
    quienEsMejor: "Cristiano",
    deporte_favorito: "Baloncesto",
  },
];

coders.forEach(function (coder) {
  //Card
  let card = document.createElement("div");
  card.classList.add("card");
  resultados.appendChild(card);
  //imagen
  let img = document.createElement("img");
  img.setAttribute("src", coder.genero[0].imagen_peli);
  img.classList.add("img-fluid");
  img.classList.add("img-thumbnail");
  card.appendChild(img);
  // Imagen actor
  let imgActor = document.createElement("img");
  imgActor.setAttribute("src", coder.imagen_actor[0]);
  imgActor.classList.add("img-fluid");
  imgActor.classList.add("img-thumbnail");
  card.appendChild(imgActor);
  //Card body
  let card_body = document.createElement("div");
  card_body.classList.add("card-content");
  card.appendChild(card_body);
  //nombre
  let nombr = document.createElement("h5");
  nombr.innerText = coder.nombre;
  card_body.appendChild(nombr);
  console.log(nombr);
  // alias
  let alias = document.createElement("div");
  alias.innerText = coder.alias;
  card_body.appendChild(alias);
  //edad
  let edad = document.createElement("div");
  edad.innerText = coder.edad;
  card_body.appendChild(edad);
  // sexo
  let sexo = document.createElement("div");
  sexo.innerText = coder.sexo;
  card_body.appendChild(sexo);
  //color favorito
  let color = document.createElement("div");
  color.innerText = coder.color_favorito;
  card_body.appendChild(color);
  //Comida Favorita
  let comida = document.createElement("div");
  comida.innerText = coder.comida_favorita;
  card_body.appendChild(comida);
  // genero
  let genero = document.createElement("div");
  genero.innerText = coder.genero[0].nombre;
  card_body.appendChild(genero);
  //pelicula
  let pelicula = document.createElement("div");
  pelicula.innerText = coder.genero[0].pelicula_favorita;
  card_body.appendChild(pelicula);
  //2 genero
  let genero2 = document.createElement("div");
  genero2.innerText = coder.genero[1].nombre;
  card_body.appendChild(genero2);
  //actor
  let actor = document.createElement("div");
  actor.innerText = coder.actor;
  card_body.appendChild(actor);
  //quien es mejor
  let jugador = document.createElement("div");
  jugador.innerText = coder.quienEsMejor;
  card_body.appendChild(jugador);
  //deporte
  let deporte = document.createElement("div");
  deporte.innerText = coder.deporte_favorito;
  card_body.appendChild(deporte);
});
function buscar() {
  valor = document.getElementById("search");
  console.log(valor.value);
  /* valor.value = valor.value.toLowerCase(); */
  let filtro = coders.filter(function (coder) {
    return (
      coder.nombre.toLowerCase() == valor.value.toLowerCase() ||
      coder.edad == valor.value ||
      coder.color_favorito.toLowerCase() == valor.value.toLowerCase() ||
      coder.sexo.toLowerCase() == valor.value.toLowerCase() ||
      coder.alias.toLowerCase() == valor.value.toLowerCase() ||
      coder.comida_favorita.toLowerCase() == valor.value.toLowerCase() ||
      coder.genero[0].nombre.toLowerCase() == valor.value.toLowerCase() ||
      coder.quienEsMejor.toLowerCase() == valor.value.toLowerCase() ||
      coder.deporte_favorito.toLowerCase() == valor.value.toLowerCase()
    );
  });
  console.log(filtro);
  resultados = document.getElementById("resultados");
  document.getElementById("resultados").innerHTML = "";
  filtro.forEach(function (coder) {
    //card
    let card = document.createElement("div");
    card.classList.add("card");
    resultados.appendChild(card);

    //imagen
    let img = document.createElement("img");
    img.setAttribute("src", coder.genero[0].imagen_peli);
    img.classList.add("img-fluid");
    img.classList.add("img-thumbnail");
    card.appendChild(img);
    // Imagen actor
    let imgActor = document.createElement("img");
    imgActor.setAttribute("src", coder.imagen_actor[0]);
    imgActor.classList.add("img-fluid");
    imgActor.classList.add("img-thumbnail");
    card.appendChild(imgActor);

    // card body
    let card_body = document.createElement("div");
    card_body.classList.add("card-content");
    card.appendChild(card_body);

    // nombre
    let nombr = document.createElement("h5");
    nombr.innerText = coder.nombre ;
    card_body.appendChild(nombr);
    // alias
    let alias = document.createElement("div");
    alias.innerText = coder.alias;
    card_body.appendChild(alias);
    //edad
    let edad = document.createElement("div");
    edad.innerText = coder.edad;
    card_body.appendChild(edad);
    // sexo
    let sexo = document.createElement("div");
    sexo.innerText = coder.sexo;
    card_body.appendChild(sexo);
    //color favorito
    let color = document.createElement("div");
    color.innerText = coder.color_favorito;
    card_body.appendChild(color);
    //Comida Favorita
    let comida = document.createElement("div");
    comida.innerText = coder.comida_favorita;
    card_body.appendChild(comida);
    // genero
    let genero = document.createElement("div");
    genero.innerText = coder.genero[0].nombre;
    card_body.appendChild(genero);
    //pelicula
    let pelicula = document.createElement("div");
    pelicula.innerText = coder.genero[0].pelicula_favorita;
    card_body.appendChild(pelicula);
    //2 genero
    let genero2 = document.createElement("div");
    genero2.innerText = coder.genero[1].nombre;
    card_body.appendChild(genero2);
    //actor
    let actor = document.createElement("div");
    actor.innerText = coder.actor;
    card_body.appendChild(actor);
    //quien es mejor
    let jugador = document.createElement("div");
    jugador.innerText = coder.quienEsMejor;
    card_body.appendChild(jugador);
    //deporte
    let deporte = document.createElement("div");
    deporte.innerText = coder.deporte_favorito;
    card_body.appendChild(deporte);
  });
}
//Mayores de 18
if (valor.value == "mayores") {
  coders.forEach(function (coder) {
    if (coder.edad >= 18) {
      //Card
      let card = document.createElement("div");
      card.classList.add("card");
      resultados.appendChild(card);
      //imagen
      let img = document.createElement("img");
      img.setAttribute("src", coder.genero[0].imagen_peli);
      img.classList.add("img-fluid");
      img.classList.add("img-thumbnail");
      card.appendChild(img);
      // Imagen actor
      let imgActor = document.createElement("img");
      imgActor.setAttribute("src", coder.imagen_actor[0]);
      imgActor.classList.add("img-fluid");
      imgActor.classList.add("img-thumbnail");
      card.appendChild(imgActor);
      //Card body
      let card_body = document.createElement("div");
      card_body.classList.add("card-content");
      card.appendChild(card_body);
      //nombre
      let nombr = document.createElement("h5");
      nombr.innerText = coder.nombre;
      card_body.appendChild(nombr);
      console.log(nombr);
      // alias
      let alias = document.createElement("div");
      alias.innerText = coder.alias;
      card_body.appendChild(alias);
      //edad
      let edad = document.createElement("div");
      edad.innerText = coder.edad;
      card_body.appendChild(edad);
      // sexo
      let sexo = document.createElement("div");
      sexo.innerText = coder.sexo;
      card_body.appendChild(sexo);
      //color favorito
      let color = document.createElement("div");
      color.innerText = coder.color_favorito;
      card_body.appendChild(color);
      //Comida Favorita
      let comida = document.createElement("div");
      comida.innerText = coder.comida_favorita;
      card_body.appendChild(comida);
      // genero
      let genero = document.createElement("div");
      genero.innerText = coder.genero[0].nombre;
      card_body.appendChild(genero);
      //pelicula
      let pelicula = document.createElement("div");
      pelicula.innerText = coder.genero[0].pelicula_favorita;
      card_body.appendChild(pelicula);
      //2 genero
      let genero2 = document.createElement("div");
      genero2.innerText = coder.genero[1].nombre;
      card_body.appendChild(genero2);
      //actor
      let actor = document.createElement("div");
      actor.innerText = coder.actor;
      card_body.appendChild(actor);
      //quien es mejor
      let jugador = document.createElement("div");
      jugador.innerText = coder.quienEsMejor;
      card_body.appendChild(jugador);
      //deporte
      let deporte = document.createElement("div");
      deporte.innerText = coder.deporte_favorito;
      card_body.appendChild(deporte);
    }
  });
}
//Menores de 18
if (valor.value == "menores") {
  coders.forEach(function (coder) {
    if (coder.edad < 18) {
      //Card
      let card = document.createElement("div");
      card.classList.add("card");
      resultados.appendChild(card);
      //imagen
      let img = document.createElement("img");
      img.setAttribute("src", coder.genero[0].imagen_peli);
      img.classList.add("img-fluid");
      img.classList.add("img-thumbnail");
      card.appendChild(img);
      // Imagen actor
      let imgActor = document.createElement("img");
      imgActor.setAttribute("src", coder.imagen_actor[0]);
      imgActor.classList.add("img-fluid");
      imgActor.classList.add("img-thumbnail");
      card.appendChild(imgActor);
      //Card body
      let card_body = document.createElement("div");
      card_body.classList.add("card-content");
      card.appendChild(card_body);
      //nombre
      let nombr = document.createElement("h5");
      nombr.innerText = coder.nombre;
      card_body.appendChild(nombr);
      console.log(nombr);
      // alias
      let alias = document.createElement("div");
      alias.innerText = coder.alias;
      card_body.appendChild(alias);
      //edad
      let edad = document.createElement("div");
      edad.innerText = coder.edad;
      card_body.appendChild(edad);
      // sexo
      let sexo = document.createElement("div");
      sexo.innerText = coder.sexo;
      card_body.appendChild(sexo);
      //color favorito
      let color = document.createElement("div");
      color.innerText = coder.color_favorito;
      card_body.appendChild(color);
      //Comida Favorita
      let comida = document.createElement("div");
      comida.innerText = coder.comida_favorita;
      card_body.appendChild(comida);
      // genero
      let genero = document.createElement("div");
      genero.innerText = coder.genero[0].nombre;
      card_body.appendChild(genero);
      //pelicula
      let pelicula = document.createElement("div");
      pelicula.innerText = coder.genero[0].pelicula_favorita;
      card_body.appendChild(pelicula);
      //2 genero
      let genero2 = document.createElement("div");
      genero2.innerText = coder.genero[1].nombre;
      card_body.appendChild(genero2);
      //actor
      let actor = document.createElement("div");
      actor.innerText = coder.actor;
      card_body.appendChild(actor);
      //quien es mejor
      let jugador = document.createElement("div");
      jugador.innerText = coder.quienEsMejor;
      card_body.appendChild(jugador);
      //deporte
      let deporte = document.createElement("div");
      deporte.innerText = coder.deporte_favorito;
      card_body.appendChild(deporte);
    }
  });
}
//Colores

function mujeres() {
  hacerToggle(1);
  document.getElementById("resultados").innerHTML = "";
  document.getElementById("ubicacion").innerText = "Mujeres";
  coders.forEach(function (coder) {
    if (coder.sexo == "Femenino") {
      //Card
      let card = document.createElement("div");
      card.classList.add("card");
      resultados.appendChild(card);
      //imagen
      let img = document.createElement("img");
      img.setAttribute("src", coder.genero[0].imagen_peli);
      img.classList.add("img-fluid");
      img.classList.add("img-thumbnail");
      card.appendChild(img);
      // Imagen actor
      let imgActor = document.createElement("img");
      imgActor.setAttribute("src", coder.imagen_actor[0]);
      imgActor.classList.add("img-fluid");
      imgActor.classList.add("img-thumbnail");
      card.appendChild(imgActor);
      //Card body
      let card_body = document.createElement("div");
      card_body.classList.add("card-content");
      card.appendChild(card_body);
      //nombre
      let nombr = document.createElement("h5");
      nombr.innerText = coder.nombre;
      card_body.appendChild(nombr);
      console.log(nombr);
      // alias
      let alias = document.createElement("div");
      alias.innerText = coder.alias;
      card_body.appendChild(alias);
      //edad
      let edad = document.createElement("div");
      edad.innerText = coder.edad;
      card_body.appendChild(edad);
      // sexo
      let sexo = document.createElement("div");
      sexo.innerText = coder.sexo;
      card_body.appendChild(sexo);
      //color favorito
      let color = document.createElement("div");
      color.innerText = coder.color_favorito;
      card_body.appendChild(color);
      //Comida Favorita
      let comida = document.createElement("div");
      comida.innerText = coder.comida_favorita;
      card_body.appendChild(comida);
      // genero
      let genero = document.createElement("div");
      genero.innerText = coder.genero[0].nombre;
      card_body.appendChild(genero);
      //pelicula
      let pelicula = document.createElement("div");
      pelicula.innerText = coder.genero[0].pelicula_favorita;
      card_body.appendChild(pelicula);
      //2 genero
      let genero2 = document.createElement("div");
      genero2.innerText = coder.genero[1].nombre;
      card_body.appendChild(genero2);
      //actor
      let actor = document.createElement("div");
      actor.innerText = coder.actor;
      card_body.appendChild(actor);
      //quien es mejor
      let jugador = document.createElement("div");
      jugador.innerText = coder.quienEsMejor;
      card_body.appendChild(jugador);
      //deporte
      let deporte = document.createElement("div");
      deporte.innerText = coder.deporte_favorito;
      card_body.appendChild(deporte);
    }
  });
}
function hombres() {
  hacerToggle(2);
  document.getElementById("resultados").innerHTML = "";
  document.getElementById("ubicacion").innerText = "Hombres";
  coders.forEach(function (coder) {
    if (coder.sexo == "Masculino") {
      //Card
      let card = document.createElement("div");
      card.classList.add("card");
      resultados.appendChild(card);
      //imagen
      let img = document.createElement("img");
      img.setAttribute("src", coder.genero[0].imagen_peli);
      img.classList.add("img-fluid");
      img.classList.add("img-thumbnail");
      card.appendChild(img);
      // Imagen actor
      let imgActor = document.createElement("img");
      imgActor.setAttribute("src", coder.imagen_actor[0]);
      imgActor.classList.add("img-fluid");
      imgActor.classList.add("img-thumbnail");
      card.appendChild(imgActor);
      //Card body
      let card_body = document.createElement("div");
      card_body.classList.add("card-content");
      card.appendChild(card_body);
      //nombre
      let nombr = document.createElement("h5");
      nombr.innerText = coder.nombre;
      card_body.appendChild(nombr);
      console.log(nombr);
      // alias
      let alias = document.createElement("div");
      alias.innerText = coder.alias;
      card_body.appendChild(alias);
      //edad
      let edad = document.createElement("div");
      edad.innerText = coder.edad;
      card_body.appendChild(edad);
      // sexo
      let sexo = document.createElement("div");
      sexo.innerText = coder.sexo;
      card_body.appendChild(sexo);
      //color favorito
      let color = document.createElement("div");
      color.innerText = coder.color_favorito;
      card_body.appendChild(color);
      //Comida Favorita
      let comida = document.createElement("div");
      comida.innerText = coder.comida_favorita;
      card_body.appendChild(comida);
      // genero
      let genero = document.createElement("div");
      genero.innerText = coder.genero[0].nombre;
      card_body.appendChild(genero);
      //pelicula
      let pelicula = document.createElement("div");
      pelicula.innerText = coder.genero[0].pelicula_favorita;
      card_body.appendChild(pelicula);
      //2 genero
      let genero2 = document.createElement("div");
      genero2.innerText = coder.genero[1].nombre;
      card_body.appendChild(genero2);
      //actor
      let actor = document.createElement("div");
      actor.innerText = coder.actor;
      card_body.appendChild(actor);
      //quien es mejor
      let jugador = document.createElement("div");
      jugador.innerText = coder.quienEsMejor;
      card_body.appendChild(jugador);
      //deporte
      let deporte = document.createElement("div");
      deporte.innerText = coder.deporte_favorito;
      card_body.appendChild(deporte);
    }
  });
}
function mayores() {
  hacerToggle(3);
  document.getElementById("resultados").innerHTML = "";
  document.getElementById("ubicacion").innerText = "Mayores de edad";
  coders.forEach(function (coder) {
    if (coder.edad >= 18) {
      //Card
      let card = document.createElement("div");
      card.classList.add("card");
      resultados.appendChild(card);
      //imagen
      let img = document.createElement("img");
      img.setAttribute("src", coder.genero[0].imagen_peli);
      img.classList.add("img-fluid");
      img.classList.add("img-thumbnail");
      card.appendChild(img);
      // Imagen actor
      let imgActor = document.createElement("img");
      imgActor.setAttribute("src", coder.imagen_actor[0]);
      imgActor.classList.add("img-fluid");
      imgActor.classList.add("img-thumbnail");
      card.appendChild(imgActor);
      //Card body
      let card_body = document.createElement("div");
      card_body.classList.add("card-content");
      card.appendChild(card_body);
      //nombre
      let nombr = document.createElement("h5");
      nombr.innerText = coder.nombre;
      card_body.appendChild(nombr);
      console.log(nombr);
      // alias
      let alias = document.createElement("div");
      alias.innerText = coder.alias;
      card_body.appendChild(alias);
      //edad
      let edad = document.createElement("div");
      edad.innerText = coder.edad;
      card_body.appendChild(edad);
      // sexo
      let sexo = document.createElement("div");
      sexo.innerText = coder.sexo;
      card_body.appendChild(sexo);
      //color favorito
      let color = document.createElement("div");
      color.innerText = coder.color_favorito;
      card_body.appendChild(color);
      //Comida Favorita
      let comida = document.createElement("div");
      comida.innerText = coder.comida_favorita;
      card_body.appendChild(comida);
      // genero
      let genero = document.createElement("div");
      genero.innerText = coder.genero[0].nombre;
      card_body.appendChild(genero);
      //pelicula
      let pelicula = document.createElement("div");
      pelicula.innerText = coder.genero[0].pelicula_favorita;
      card_body.appendChild(pelicula);
      //2 genero
      let genero2 = document.createElement("div");
      genero2.innerText = coder.genero[1].nombre;
      card_body.appendChild(genero2);
      //actor
      let actor = document.createElement("div");
      actor.innerText = coder.actor;
      card_body.appendChild(actor);
      //quien es mejor
      let jugador = document.createElement("div");
      jugador.innerText = coder.quienEsMejor;
      card_body.appendChild(jugador);
      //deporte
      let deporte = document.createElement("div");
      deporte.innerText = coder.deporte_favorito;
      card_body.appendChild(deporte);
    }
  });
}
function menores() {
  hacerToggle(4);
  document.getElementById("resultados").innerHTML = "";
  document.getElementById("ubicacion").innerText = "Menores de edad";
  coders.forEach(function (coder) {
    if (coder.edad < 18) {
      //Card
      let card = document.createElement("div");
      card.classList.add("card");
      resultados.appendChild(card);
      //imagen
      let img = document.createElement("img");
      img.setAttribute("src", coder.genero[0].imagen_peli);
      img.classList.add("img-fluid");
      img.classList.add("img-thumbnail");
      card.appendChild(img);
      // Imagen actor
      let imgActor = document.createElement("img");
      imgActor.setAttribute("src", coder.imagen_actor[0]);
      imgActor.classList.add("img-fluid");
      imgActor.classList.add("img-thumbnail");
      card.appendChild(imgActor);
      //Card body
      let card_body = document.createElement("div");
      card_body.classList.add("card-content");
      card.appendChild(card_body);
      //nombre
      let nombr = document.createElement("h5");
      nombr.innerText = coder.nombre;
      card_body.appendChild(nombr);
      console.log(nombr);
      // alias
      let alias = document.createElement("div");
      alias.innerText = coder.alias;
      card_body.appendChild(alias);
      //edad
      let edad = document.createElement("div");
      edad.innerText = coder.edad;
      card_body.appendChild(edad);
      // sexo
      let sexo = document.createElement("div");
      sexo.innerText = coder.sexo;
      card_body.appendChild(sexo);
      //color favorito
      let color = document.createElement("div");
      color.innerText = coder.color_favorito;
      card_body.appendChild(color);
      //Comida Favorita
      let comida = document.createElement("div");
      comida.innerText = coder.comida_favorita;
      card_body.appendChild(comida);
      // genero
      let genero = document.createElement("div");
      genero.innerText = coder.genero[0].nombre;
      card_body.appendChild(genero);
      //pelicula
      let pelicula = document.createElement("div");
      pelicula.innerText = coder.genero[0].pelicula_favorita;
      card_body.appendChild(pelicula);
      //2 genero
      let genero2 = document.createElement("div");
      genero2.innerText = coder.genero[1].nombre;
      card_body.appendChild(genero2);
      //actor
      let actor = document.createElement("div");
      actor.innerText = coder.actor;
      card_body.appendChild(actor);
      //quien es mejor
      let jugador = document.createElement("div");
      jugador.innerText = coder.quienEsMejor;
      card_body.appendChild(jugador);
      //deporte
      let deporte = document.createElement("div");
      deporte.innerText = coder.deporte_favorito;
      card_body.appendChild(deporte);
    }
  });
}
function todos() {
  hacerToggle(5);
  document.getElementById("resultados").innerHTML = "";
  document.getElementById("ubicacion").innerText = "Todas las personas";
  coders.forEach(function (coder) {
    //Card
    let card = document.createElement("div");
    card.classList.add("card");
    resultados.appendChild(card);
    //imagen
    let img = document.createElement("img");
    img.setAttribute("src", coder.genero[0].imagen_peli);
    img.classList.add("img-fluid");
    img.classList.add("img-thumbnail");
    card.appendChild(img);
    // Imagen actor
    let imgActor = document.createElement("img");
    imgActor.setAttribute("src", coder.imagen_actor[0]);
    imgActor.classList.add("img-fluid");
    imgActor.classList.add("img-thumbnail");
    card.appendChild(imgActor);
    //Card body
    let card_body = document.createElement("div");
    card_body.classList.add("card-content");
    card.appendChild(card_body);
    //nombre
    let nombr = document.createElement("h5");
    nombr.innerText = coder.nombre;
    card_body.appendChild(nombr);
    console.log(nombr);
    // alias
    let alias = document.createElement("div");
    alias.innerText = coder.alias;
    card_body.appendChild(alias);
    //edad
    let edad = document.createElement("div");
    edad.innerText = coder.edad;
    card_body.appendChild(edad);
    // sexo
    let sexo = document.createElement("div");
    sexo.innerText = coder.sexo;
    card_body.appendChild(sexo);
    //color favorito
    let color = document.createElement("div");
    color.innerText = coder.color_favorito;
    card_body.appendChild(color);
    //Comida Favorita
    let comida = document.createElement("div");
    comida.innerText = coder.comida_favorita;
    card_body.appendChild(comida);
    // genero
    let genero = document.createElement("div");
    genero.innerText = coder.genero[0].nombre;
    card_body.appendChild(genero);
    //pelicula
    let pelicula = document.createElement("div");
    pelicula.innerText = coder.genero[0].pelicula_favorita;
    card_body.appendChild(pelicula);
    //2 genero
    let genero2 = document.createElement("div");
    genero2.innerText = coder.genero[1].nombre;
    card_body.appendChild(genero2);
    //actor
    let actor = document.createElement("div");
    actor.innerText = coder.actor;
    card_body.appendChild(actor);
    //quien es mejor
    let jugador = document.createElement("div");
    jugador.innerText = coder.quienEsMejor;
    card_body.appendChild(jugador);
    //deporte
    let deporte = document.createElement("div");
    deporte.innerText = coder.deporte_favorito;
    card_body.appendChild(deporte);
  });
}
function rojo() {
  hacerToggle(6);
  document.getElementById("resultados").innerHTML = "";
  document.getElementById("ubicacion").innerText = "Color Rojo";
  coders.forEach(function (coder) {
    if (coder.color_favorito == "Rojo") {
      //Card
      let card = document.createElement("div");
      card.classList.add("card");
      resultados.appendChild(card);
      //imagen
      let img = document.createElement("img");
      img.setAttribute("src", coder.genero[0].imagen_peli);
      img.classList.add("img-fluid");
      img.classList.add("img-thumbnail");
      card.appendChild(img);
      // Imagen actor
      let imgActor = document.createElement("img");
      imgActor.setAttribute("src", coder.imagen_actor[0]);
      imgActor.classList.add("img-fluid");
      imgActor.classList.add("img-thumbnail");
      card.appendChild(imgActor);
      //Card body
      let card_body = document.createElement("div");
      card_body.classList.add("card-content");
      card.appendChild(card_body);
      //nombre
      let nombr = document.createElement("h5");
      nombr.innerText = coder.nombre;
      card_body.appendChild(nombr);
      console.log(nombr);
      // alias
      let alias = document.createElement("div");
      alias.innerText = coder.alias;
      card_body.appendChild(alias);
      //edad
      let edad = document.createElement("div");
      edad.innerText = coder.edad;
      card_body.appendChild(edad);
      // sexo
      let sexo = document.createElement("div");
      sexo.innerText = coder.sexo;
      card_body.appendChild(sexo);
      //color favorito
      let color = document.createElement("div");
      color.innerText = coder.color_favorito;
      card_body.appendChild(color);
      //Comida Favorita
      let comida = document.createElement("div");
      comida.innerText = coder.comida_favorita;
      card_body.appendChild(comida);
      // genero
      let genero = document.createElement("div");
      genero.innerText = coder.genero[0].nombre;
      card_body.appendChild(genero);
      //pelicula
      let pelicula = document.createElement("div");
      pelicula.innerText = coder.genero[0].pelicula_favorita;
      card_body.appendChild(pelicula);
      //2 genero
      let genero2 = document.createElement("div");
      genero2.innerText = coder.genero[1].nombre;
      card_body.appendChild(genero2);
      //actor
      let actor = document.createElement("div");
      actor.innerText = coder.actor;
      card_body.appendChild(actor);
      //quien es mejor
      let jugador = document.createElement("div");
      jugador.innerText = coder.quienEsMejor;
      card_body.appendChild(jugador);
      //deporte
      let deporte = document.createElement("div");
      deporte.innerText = coder.deporte_favorito;
      card_body.appendChild(deporte);
    }
  });
}
function azul() {
  hacerToggle(6);
  document.getElementById("resultados").innerHTML = "";
  document.getElementById("ubicacion").innerText = "Color Azul";
  coders.forEach(function (coder) {
    if (coder.color_favorito == "Azul") {
      //Card
      let card = document.createElement("div");
      card.classList.add("card");
      resultados.appendChild(card);
      //imagen
      let img = document.createElement("img");
      img.setAttribute("src", coder.genero[0].imagen_peli);
      img.classList.add("img-fluid");
      img.classList.add("img-thumbnail");
      card.appendChild(img);
      // Imagen actor
      let imgActor = document.createElement("img");
      imgActor.setAttribute("src", coder.imagen_actor[0]);
      imgActor.classList.add("img-fluid");
      imgActor.classList.add("img-thumbnail");
      card.appendChild(imgActor);
      //Card body
      let card_body = document.createElement("div");
      card_body.classList.add("card-content");
      card.appendChild(card_body);
      //nombre
      let nombr = document.createElement("h5");
      nombr.innerText = coder.nombre;
      card_body.appendChild(nombr);
      console.log(nombr);
      // alias
      let alias = document.createElement("div");
      alias.innerText = coder.alias;
      card_body.appendChild(alias);
      //edad
      let edad = document.createElement("div");
      edad.innerText = coder.edad;
      card_body.appendChild(edad);
      // sexo
      let sexo = document.createElement("div");
      sexo.innerText = coder.sexo;
      card_body.appendChild(sexo);
      //color favorito
      let color = document.createElement("div");
      color.innerText = coder.color_favorito;
      card_body.appendChild(color);
      //Comida Favorita
      let comida = document.createElement("div");
      comida.innerText = coder.comida_favorita;
      card_body.appendChild(comida);
      // genero
      let genero = document.createElement("div");
      genero.innerText = coder.genero[0].nombre;
      card_body.appendChild(genero);
      //pelicula
      let pelicula = document.createElement("div");
      pelicula.innerText = coder.genero[0].pelicula_favorita;
      card_body.appendChild(pelicula);
      //2 genero
      let genero2 = document.createElement("div");
      genero2.innerText = coder.genero[1].nombre;
      card_body.appendChild(genero2);
      //actor
      let actor = document.createElement("div");
      actor.innerText = coder.actor;
      card_body.appendChild(actor);
      //quien es mejor
      let jugador = document.createElement("div");
      jugador.innerText = coder.quienEsMejor;
      card_body.appendChild(jugador);
      //deporte
      let deporte = document.createElement("div");
      deporte.innerText = coder.deporte_favorito;
      card_body.appendChild(deporte);
    }
  });
}
function blanco() {
  hacerToggle(6);
  document.getElementById("resultados").innerHTML = "";
  document.getElementById("ubicacion").innerText = "Color Blanco";
  coders.forEach(function (coder) {
    if (coder.color_favorito == "Blanco") {
      //Card
      let card = document.createElement("div");
      card.classList.add("card");
      resultados.appendChild(card);
      //imagen
      let img = document.createElement("img");
      img.setAttribute("src", coder.genero[0].imagen_peli);
      img.classList.add("img-fluid");
      img.classList.add("img-thumbnail");
      card.appendChild(img);
      // Imagen actor
      let imgActor = document.createElement("img");
      imgActor.setAttribute("src", coder.imagen_actor[0]);
      imgActor.classList.add("img-fluid");
      imgActor.classList.add("img-thumbnail");
      card.appendChild(imgActor);
      //Card body
      let card_body = document.createElement("div");
      card_body.classList.add("card-content");
      card.appendChild(card_body);
      //nombre
      let nombr = document.createElement("h5");
      nombr.innerText = coder.nombre;
      card_body.appendChild(nombr);
      console.log(nombr);
      // alias
      let alias = document.createElement("div");
      alias.innerText = coder.alias;
      card_body.appendChild(alias);
      //edad
      let edad = document.createElement("div");
      edad.innerText = coder.edad;
      card_body.appendChild(edad);
      // sexo
      let sexo = document.createElement("div");
      sexo.innerText = coder.sexo;
      card_body.appendChild(sexo);
      //color favorito
      let color = document.createElement("div");
      color.innerText = coder.color_favorito;
      card_body.appendChild(color);
      //Comida Favorita
      let comida = document.createElement("div");
      comida.innerText = coder.comida_favorita;
      card_body.appendChild(comida);
      // genero
      let genero = document.createElement("div");
      genero.innerText = coder.genero[0].nombre;
      card_body.appendChild(genero);
      //pelicula
      let pelicula = document.createElement("div");
      pelicula.innerText = coder.genero[0].pelicula_favorita;
      card_body.appendChild(pelicula);
      //2 genero
      let genero2 = document.createElement("div");
      genero2.innerText = coder.genero[1].nombre;
      card_body.appendChild(genero2);
      //actor
      let actor = document.createElement("div");
      actor.innerText = coder.actor;
      card_body.appendChild(actor);
      //quien es mejor
      let jugador = document.createElement("div");
      jugador.innerText = coder.quienEsMejor;
      card_body.appendChild(jugador);
      //deporte
      let deporte = document.createElement("div");
      deporte.innerText = coder.deporte_favorito;
      card_body.appendChild(deporte);
    }
  });
}
function verde() {
  hacerToggle(6);
  document.getElementById("resultados").innerHTML = "";
  document.getElementById("ubicacion").innerText = "Color Verde";
  coders.forEach(function (coder) {
    if (coder.color_favorito == "Verde") {
      //Card
      let card = document.createElement("div");
      card.classList.add("card");
      resultados.appendChild(card);
      //imagen
      let img = document.createElement("img");
      img.setAttribute("src", coder.genero[0].imagen_peli);
      img.classList.add("img-fluid");
      img.classList.add("img-thumbnail");
      card.appendChild(img);
      // Imagen actor
      let imgActor = document.createElement("img");
      imgActor.setAttribute("src", coder.imagen_actor[0]);
      imgActor.classList.add("img-fluid");
      imgActor.classList.add("img-thumbnail");
      card.appendChild(imgActor);
      //Card body
      let card_body = document.createElement("div");
      card_body.classList.add("card-content");
      card.appendChild(card_body);
      //nombre
      let nombr = document.createElement("h5");
      nombr.innerText = coder.nombre;
      card_body.appendChild(nombr);
      console.log(nombr);
      // alias
      let alias = document.createElement("div");
      alias.innerText = coder.alias;
      card_body.appendChild(alias);
      //edad
      let edad = document.createElement("div");
      edad.innerText = coder.edad;
      card_body.appendChild(edad);
      // sexo
      let sexo = document.createElement("div");
      sexo.innerText = coder.sexo;
      card_body.appendChild(sexo);
      //color favorito
      let color = document.createElement("div");
      color.innerText = coder.color_favorito;
      card_body.appendChild(color);
      //Comida Favorita
      let comida = document.createElement("div");
      comida.innerText = coder.comida_favorita;
      card_body.appendChild(comida);
      // genero
      let genero = document.createElement("div");
      genero.innerText = coder.genero[0].nombre;
      card_body.appendChild(genero);
      //pelicula
      let pelicula = document.createElement("div");
      pelicula.innerText = coder.genero[0].pelicula_favorita;
      card_body.appendChild(pelicula);
      //2 genero
      let genero2 = document.createElement("div");
      genero2.innerText = coder.genero[1].nombre;
      card_body.appendChild(genero2);
      //actor
      let actor = document.createElement("div");
      actor.innerText = coder.actor;
      card_body.appendChild(actor);
      //quien es mejor
      let jugador = document.createElement("div");
      jugador.innerText = coder.quienEsMejor;
      card_body.appendChild(jugador);
      //deporte
      let deporte = document.createElement("div");
      deporte.innerText = coder.deporte_favorito;
      card_body.appendChild(deporte);
    }
  });
}
function negro() {
  hacerToggle(6);
  document.getElementById("resultados").innerHTML = "";
  document.getElementById("ubicacion").innerText = "Color Negro";
  coders.forEach(function (coder) {
    if (coder.color_favorito == "Negro") {
      //Card
      let card = document.createElement("div");
      card.classList.add("card");
      resultados.appendChild(card);
      //imagen
      let img = document.createElement("img");
      img.setAttribute("src", coder.genero[0].imagen_peli);
      img.classList.add("img-fluid");
      img.classList.add("img-thumbnail");
      card.appendChild(img);
      // Imagen actor
      let imgActor = document.createElement("img");
      imgActor.setAttribute("src", coder.imagen_actor[0]);
      imgActor.classList.add("img-fluid");
      imgActor.classList.add("img-thumbnail");
      card.appendChild(imgActor);
      //Card body
      let card_body = document.createElement("div");
      card_body.classList.add("card-content");
      card.appendChild(card_body);
      //nombre
      let nombr = document.createElement("h5");
      nombr.innerText = coder.nombre;
      card_body.appendChild(nombr);
      console.log(nombr);
      // alias
      let alias = document.createElement("div");
      alias.innerText = coder.alias;
      card_body.appendChild(alias);
      //edad
      let edad = document.createElement("div");
      edad.innerText = coder.edad;
      card_body.appendChild(edad);
      // sexo
      let sexo = document.createElement("div");
      sexo.innerText = coder.sexo;
      card_body.appendChild(sexo);
      //color favorito
      let color = document.createElement("div");
      color.innerText = coder.color_favorito;
      card_body.appendChild(color);
      //Comida Favorita
      let comida = document.createElement("div");
      comida.innerText = coder.comida_favorita;
      card_body.appendChild(comida);
      // genero
      let genero = document.createElement("div");
      genero.innerText = coder.genero[0].nombre;
      card_body.appendChild(genero);
      //pelicula
      let pelicula = document.createElement("div");
      pelicula.innerText = coder.genero[0].pelicula_favorita;
      card_body.appendChild(pelicula);
      //2 genero
      let genero2 = document.createElement("div");
      genero2.innerText = coder.genero[1].nombre;
      card_body.appendChild(genero2);
      //actor
      let actor = document.createElement("div");
      actor.innerText = coder.actor;
      card_body.appendChild(actor);
      //quien es mejor
      let jugador = document.createElement("div");
      jugador.innerText = coder.quienEsMejor;
      card_body.appendChild(jugador);
      //deporte
      let deporte = document.createElement("div");
      deporte.innerText = coder.deporte_favorito;
      card_body.appendChild(deporte);
    }
  });
}
function rosado() {
  hacerToggle(6);
  document.getElementById("resultados").innerHTML = "";
  document.getElementById("ubicacion").innerText = "Color Rosado";
  coders.forEach(function (coder) {
    if (coder.color_favorito == "Rosado") {
      //Card
      let card = document.createElement("div");
      card.classList.add("card");
      resultados.appendChild(card);
      //imagen
      let img = document.createElement("img");
      img.setAttribute("src", coder.genero[0].imagen_peli);
      img.classList.add("img-fluid");
      img.classList.add("img-thumbnail");
      card.appendChild(img);
      // Imagen actor
      let imgActor = document.createElement("img");
      imgActor.setAttribute("src", coder.imagen_actor[0]);
      imgActor.classList.add("img-fluid");
      imgActor.classList.add("img-thumbnail");
      card.appendChild(imgActor);
      //Card body
      let card_body = document.createElement("div");
      card_body.classList.add("card-content");
      card.appendChild(card_body);
      //nombre
      let nombr = document.createElement("h5");
      nombr.innerText = coder.nombre;
      card_body.appendChild(nombr);
      console.log(nombr);
      // alias
      let alias = document.createElement("div");
      alias.innerText = coder.alias;
      card_body.appendChild(alias);
      //edad
      let edad = document.createElement("div");
      edad.innerText = coder.edad;
      card_body.appendChild(edad);
      // sexo
      let sexo = document.createElement("div");
      sexo.innerText = coder.sexo;
      card_body.appendChild(sexo);
      //color favorito
      let color = document.createElement("div");
      color.innerText = coder.color_favorito;
      card_body.appendChild(color);
      //Comida Favorita
      let comida = document.createElement("div");
      comida.innerText = coder.comida_favorita;
      card_body.appendChild(comida);
      // genero
      let genero = document.createElement("div");
      genero.innerText = coder.genero[0].nombre;
      card_body.appendChild(genero);
      //pelicula
      let pelicula = document.createElement("div");
      pelicula.innerText = coder.genero[0].pelicula_favorita;
      card_body.appendChild(pelicula);
      //2 genero
      let genero2 = document.createElement("div");
      genero2.innerText = coder.genero[1].nombre;
      card_body.appendChild(genero2);
      hacerToggle(2);
      let jugador = document.createElement("div");
      jugador.innerText = coder.quienEsMejor;
      card_body.appendChild(jugador);
      //deporte
      let deporte = document.createElement("div");
      deporte.innerText = coder.deporte_favorito;
      card_body.appendChild(deporte);
    }
  });
}
function morado() {
  hacerToggle(6);
  document.getElementById("resultados").innerHTML = "";
  document.getElementById("ubicacion").innerText = "Color Morado";
  coders.forEach(function (coder) {
    if (coder.color_favorito == "Morado") {
      //Card
      let card = document.createElement("div");
      card.classList.add("card");
      resultados.appendChild(card);
      //imagen
      let img = document.createElement("img");
      img.setAttribute("src", coder.genero[0].imagen_peli);
      img.classList.add("img-fluid");
      img.classList.add("img-thumbnail");
      card.appendChild(img);
      // Imagen actor
      let imgActor = document.createElement("img");
      imgActor.setAttribute("src", coder.imagen_actor[0]);
      imgActor.classList.add("img-fluid");
      imgActor.classList.add("img-thumbnail");
      card.appendChild(imgActor);
      //Card body
      let card_body = document.createElement("div");
      card_body.classList.add("card-content");
      card.appendChild(card_body);
      //nombre
      let nombr = document.createElement("h5");
      nombr.innerText = coder.nombre;
      card_body.appendChild(nombr);
      console.log(nombr);
      // alias
      let alias = document.createElement("div");
      alias.innerText = coder.alias;
      card_body.appendChild(alias);
      //edad
      let edad = document.createElement("div");
      edad.innerText = coder.edad;
      card_body.appendChild(edad);
      // sexo
      let sexo = document.createElement("div");
      sexo.innerText = coder.sexo;
      card_body.appendChild(sexo);
      //color favorito
      let color = document.createElement("div");
      color.innerText = coder.color_favorito;
      card_body.appendChild(color);
      //Comida Favorita
      let comida = document.createElement("div");
      comida.innerText = coder.comida_favorita;
      card_body.appendChild(comida);
      // genero
      let genero = document.createElement("div");
      genero.innerText = coder.genero[0].nombre;
      card_body.appendChild(genero);
      //pelicula
      let pelicula = document.createElement("div");
      pelicula.innerText = coder.genero[0].pelicula_favorita;
      card_body.appendChild(pelicula);
      //2 genero
      let genero2 = document.createElement("div");
      genero2.innerText = coder.genero[1].nombre;
      card_body.appendChild(genero2);
      //actor
      let actor = document.createElement("div");
      actor.innerText = coder.actor;
      card_body.appendChild(actor);
      //quien es mejor
      let jugador = document.createElement("div");
      jugador.innerText = coder.quienEsMejor;
      card_body.appendChild(jugador);
      //deporte
      let deporte = document.createElement("div");
      deporte.innerText = coder.deporte_favorito;
      card_body.appendChild(deporte);
    }
  });
}
function esmeralda() {
  hacerToggle(6);
  document.getElementById("resultados").innerHTML = "";
  document.getElementById("ubicacion").innerText = "Color Esmeralda";
  coders.forEach(function (coder) {
    if (coder.color_favorito == "Esmeralda") {
      //Card
      let card = document.createElement("div");
      card.classList.add("card");
      resultados.appendChild(card);
      //imagen
      let img = document.createElement("img");
      img.setAttribute("src", coder.genero[0].imagen_peli);
      img.classList.add("img-fluid");
      img.classList.add("img-thumbnail");
      card.appendChild(img);
      // Imagen actor
      let imgActor = document.createElement("img");
      imgActor.setAttribute("src", coder.imagen_actor[0]);
      imgActor.classList.add("img-fluid");
      imgActor.classList.add("img-thumbnail");
      card.appendChild(imgActor);
      //Card body
      let card_body = document.createElement("div");
      card_body.classList.add("card-content");
      card.appendChild(card_body);
      //nombre
      let nombr = document.createElement("h5");
      nombr.innerText = coder.nombre;
      card_body.appendChild(nombr);
      console.log(nombr);
      // alias
      let alias = document.createElement("div");
      alias.innerText = coder.alias;
      card_body.appendChild(alias);
      //edad
      let edad = document.createElement("div");
      edad.innerText = coder.edad;
      card_body.appendChild(edad);
      // sexo
      let sexo = document.createElement("div");
      sexo.innerText = coder.sexo;
      card_body.appendChild(sexo);
      //color favorito
      let color = document.createElement("div");
      color.innerText = coder.color_favorito;
      card_body.appendChild(color);
      //Comida Favorita
      let comida = document.createElement("div");
      comida.innerText = coder.comida_favorita;
      card_body.appendChild(comida);
      // genero
      let genero = document.createElement("div");
      genero.innerText = coder.genero[0].nombre;
      card_body.appendChild(genero);
      //pelicula
      let pelicula = document.createElement("div");
      pelicula.innerText = coder.genero[0].pelicula_favorita;
      card_body.appendChild(pelicula);
      //2 genero
      let genero2 = document.createElement("div");
      genero2.innerText = coder.genero[1].nombre;
      card_body.appendChild(genero2);
      //actor
      let actor = document.createElement("div");
      actor.innerText = coder.actor;
      card_body.appendChild(actor);
      //quien es mejor
      let jugador = document.createElement("div");
      jugador.innerText = coder.quienEsMejor;
      card_body.appendChild(jugador);
      //deporte
      let deporte = document.createElement("div");
      deporte.innerText = coder.deporte_favorito;
      card_body.appendChild(deporte);
    }
  });
}
function cienciaFiccion() {
  hacerToggle(7);
  document.getElementById("resultados").innerHTML = "";
  document.getElementById("ubicacion").innerText = "Ciencia Ficcion";
  coders.forEach(function (coder) {
    if (coder.genero[0].nombre == "Ciencia ficción") {
      //Card
      let card = document.createElement("div");
      card.classList.add("card");
      resultados.appendChild(card);
      //imagen
      let img = document.createElement("img");
      img.setAttribute("src", coder.genero[0].imagen_peli);
      img.classList.add("img-fluid");
      img.classList.add("img-thumbnail");
      card.appendChild(img);
      // Imagen actor
      let imgActor = document.createElement("img");
      imgActor.setAttribute("src", coder.imagen_actor[0]);
      imgActor.classList.add("img-fluid");
      imgActor.classList.add("img-thumbnail");
      card.appendChild(imgActor);
      //Card body
      let card_body = document.createElement("div");
      card_body.classList.add("card-content");
      card.appendChild(card_body);
      //nombre
      let nombr = document.createElement("h5");
      nombr.innerText = coder.nombre;
      card_body.appendChild(nombr);
      console.log(nombr);
      // alias
      let alias = document.createElement("div");
      alias.innerText = coder.alias;
      card_body.appendChild(alias);
      //edad
      let edad = document.createElement("div");
      edad.innerText = coder.edad;
      card_body.appendChild(edad);
      // sexo
      let sexo = document.createElement("div");
      sexo.innerText = coder.sexo;
      card_body.appendChild(sexo);
      //color favorito
      let color = document.createElement("div");
      color.innerText = coder.color_favorito;
      card_body.appendChild(color);
      //Comida Favorita
      let comida = document.createElement("div");
      comida.innerText = coder.comida_favorita;
      card_body.appendChild(comida);
      // genero
      let genero = document.createElement("div");
      genero.innerText = coder.genero[0].nombre;
      card_body.appendChild(genero);
      //pelicula
      let pelicula = document.createElement("div");
      pelicula.innerText = coder.genero[0].pelicula_favorita;
      card_body.appendChild(pelicula);
      //2 genero
      let genero2 = document.createElement("div");
      genero2.innerText = coder.genero[1].nombre;
      card_body.appendChild(genero2);
      //actor
      let actor = document.createElement("div");
      actor.innerText = coder.actor;
      card_body.appendChild(actor);
      //quien es mejor
      let jugador = document.createElement("div");
      jugador.innerText = coder.quienEsMejor;
      card_body.appendChild(jugador);
      //deporte
      let deporte = document.createElement("div");
      deporte.innerText = coder.deporte_favorito;
      card_body.appendChild(deporte);
    }
  });
}
function comedia() {
  hacerToggle(7);
  document.getElementById("resultados").innerHTML = "";
  document.getElementById("ubicacion").innerText = "Comedia";
  coders.forEach(function (coder) {
    if (coder.genero[0].nombre == "Comedia") {
      //Card
      let card = document.createElement("div");
      card.classList.add("card");
      resultados.appendChild(card);
      //imagen
      let img = document.createElement("img");
      img.setAttribute("src", coder.genero[0].imagen_peli);
      img.classList.add("img-fluid");
      img.classList.add("img-thumbnail");
      card.appendChild(img);
      // Imagen actor
      let imgActor = document.createElement("img");
      imgActor.setAttribute("src", coder.imagen_actor[0]);
      imgActor.classList.add("img-fluid");
      imgActor.classList.add("img-thumbnail");
      card.appendChild(imgActor);
      //Card body
      let card_body = document.createElement("div");
      card_body.classList.add("card-content");
      card.appendChild(card_body);
      //nombre
      let nombr = document.createElement("h5");
      nombr.innerText = coder.nombre;
      card_body.appendChild(nombr);
      console.log(nombr);
      // alias
      let alias = document.createElement("div");
      alias.innerText = coder.alias;
      card_body.appendChild(alias);
      //edad
      let edad = document.createElement("div");
      edad.innerText = coder.edad;
      card_body.appendChild(edad);
      // sexo
      let sexo = document.createElement("div");
      sexo.innerText = coder.sexo;
      card_body.appendChild(sexo);
      //color favorito
      let color = document.createElement("div");
      color.innerText = coder.color_favorito;
      card_body.appendChild(color);
      //Comida Favorita
      let comida = document.createElement("div");
      comida.innerText = coder.comida_favorita;
      card_body.appendChild(comida);
      // genero
      let genero = document.createElement("div");
      genero.innerText = coder.genero[0].nombre;
      card_body.appendChild(genero);
      //pelicula
      let pelicula = document.createElement("div");
      pelicula.innerText = coder.genero[0].pelicula_favorita;
      card_body.appendChild(pelicula);
      //2 genero
      let genero2 = document.createElement("div");
      genero2.innerText = coder.genero[1].nombre;
      card_body.appendChild(genero2);
      //actor
      let actor = document.createElement("div");
      actor.innerText = coder.actor;
      card_body.appendChild(actor);
      //quien es mejor
      let jugador = document.createElement("div");
      jugador.innerText = coder.quienEsMejor;
      card_body.appendChild(jugador);
      //deporte
      let deporte = document.createElement("div");
      deporte.innerText = coder.deporte_favorito;
      card_body.appendChild(deporte);
    }
  });
}
function aventura() {
  hacerToggle(7);
  document.getElementById("resultados").innerHTML = "";
  document.getElementById("ubicacion").innerText = "Aventura";
  coders.forEach(function (coder) {
    if (coder.genero[0].nombre == "Aventura") {
      //Card
      let card = document.createElement("div");
      card.classList.add("card");
      resultados.appendChild(card);
      //imagen
      let img = document.createElement("img");
      img.setAttribute("src", coder.genero[0].imagen_peli);
      img.classList.add("img-fluid");
      img.classList.add("img-thumbnail");
      card.appendChild(img);
      // Imagen actor
      let imgActor = document.createElement("img");
      imgActor.setAttribute("src", coder.imagen_actor[0]);
      imgActor.classList.add("img-fluid");
      imgActor.classList.add("img-thumbnail");
      card.appendChild(imgActor);
      //Card body
      let card_body = document.createElement("div");
      card_body.classList.add("card-content");
      card.appendChild(card_body);
      //nombre
      let nombr = document.createElement("h5");
      nombr.innerText = coder.nombre;
      card_body.appendChild(nombr);
      console.log(nombr);
      // alias
      let alias = document.createElement("div");
      alias.innerText = coder.alias;
      card_body.appendChild(alias);
      //edad
      let edad = document.createElement("div");
      edad.innerText = coder.edad;
      card_body.appendChild(edad);
      // sexo
      let sexo = document.createElement("div");
      sexo.innerText = coder.sexo;
      card_body.appendChild(sexo);
      //color favorito
      let color = document.createElement("div");
      color.innerText = coder.color_favorito;
      card_body.appendChild(color);
      //Comida Favorita
      let comida = document.createElement("div");
      comida.innerText = coder.comida_favorita;
      card_body.appendChild(comida);
      // genero
      let genero = document.createElement("div");
      genero.innerText = coder.genero[0].nombre;
      card_body.appendChild(genero);
      //pelicula
      let pelicula = document.createElement("div");
      pelicula.innerText = coder.genero[0].pelicula_favorita;
      card_body.appendChild(pelicula);
      //2 genero
      let genero2 = document.createElement("div");
      genero2.innerText = coder.genero[1].nombre;
      card_body.appendChild(genero2);
      //actor
      let actor = document.createElement("div");
      actor.innerText = coder.actor;
      card_body.appendChild(actor);
      //quien es mejor
      let jugador = document.createElement("div");
      jugador.innerText = coder.quienEsMejor;
      card_body.appendChild(jugador);
      //deporte
      let deporte = document.createElement("div");
      deporte.innerText = coder.deporte_favorito;
      card_body.appendChild(deporte);
    }
  });
}
function suspenso() {
  hacerToggle(7);
  document.getElementById("resultados").innerHTML = "";
  document.getElementById("ubicacion").innerText = "Suspenso";
  coders.forEach(function (coder) {
    if (coder.genero[0].nombre == "Suspenso") {
      //Card
      let card = document.createElement("div");
      card.classList.add("card");
      resultados.appendChild(card);
      //imagen
      let img = document.createElement("img");
      img.setAttribute("src", coder.genero[0].imagen_peli);
      img.classList.add("img-fluid");
      img.classList.add("img-thumbnail");
      card.appendChild(img);
      // Imagen actor
      let imgActor = document.createElement("img");
      imgActor.setAttribute("src", coder.imagen_actor[0]);
      imgActor.classList.add("img-fluid");
      imgActor.classList.add("img-thumbnail");
      card.appendChild(imgActor);
      //Card body
      let card_body = document.createElement("div");
      card_body.classList.add("card-content");
      card.appendChild(card_body);
      //nombre
      let nombr = document.createElement("h5");
      nombr.innerText = coder.nombre;
      card_body.appendChild(nombr);
      console.log(nombr);
      // alias
      let alias = document.createElement("div");
      alias.innerText = coder.alias;
      card_body.appendChild(alias);
      //edad
      let edad = document.createElement("div");
      edad.innerText = coder.edad;
      card_body.appendChild(edad);
      // sexo
      let sexo = document.createElement("div");
      sexo.innerText = coder.sexo;
      card_body.appendChild(sexo);
      //color favorito
      let color = document.createElement("div");
      color.innerText = coder.color_favorito;
      card_body.appendChild(color);
      //Comida Favorita
      let comida = document.createElement("div");
      comida.innerText = coder.comida_favorita;
      card_body.appendChild(comida);
      // genero
      let genero = document.createElement("div");
      genero.innerText = coder.genero[0].nombre;
      card_body.appendChild(genero);
      //pelicula
      let pelicula = document.createElement("div");
      pelicula.innerText = coder.genero[0].pelicula_favorita;
      card_body.appendChild(pelicula);
      //2 genero
      let genero2 = document.createElement("div");
      genero2.innerText = coder.genero[1].nombre;
      card_body.appendChild(genero2);
      //actor
      let actor = document.createElement("div");
      actor.innerText = coder.actor;
      card_body.appendChild(actor);
      //quien es mejor
      let jugador = document.createElement("div");
      jugador.innerText = coder.quienEsMejor;
      card_body.appendChild(jugador);
      //deporte
      let deporte = document.createElement("div");
      deporte.innerText = coder.deporte_favorito;
      card_body.appendChild(deporte);
    }
  });
}
function accion() {
  hacerToggle(7);
  document.getElementById("resultados").innerHTML = "";
  document.getElementById("ubicacion").innerText = "Acciòn";
  coders.forEach(function (coder) {
    if (coder.genero[0].nombre == "Accion") {
      //Card
      let card = document.createElement("div");
      card.classList.add("card");
      resultados.appendChild(card);
      //imagen
      let img = document.createElement("img");
      img.setAttribute("src", coder.genero[0].imagen_peli);
      img.classList.add("img-fluid");
      img.classList.add("img-thumbnail");
      card.appendChild(img);
      // Imagen actor
      let imgActor = document.createElement("img");
      imgActor.setAttribute("src", coder.imagen_actor[0]);
      imgActor.classList.add("img-fluid");
      imgActor.classList.add("img-thumbnail");
      card.appendChild(imgActor);
      //Card body
      let card_body = document.createElement("div");
      card_body.classList.add("card-content");
      card.appendChild(card_body);
      //nombre
      let nombr = document.createElement("h5");
      nombr.innerText = coder.nombre;
      card_body.appendChild(nombr);
      console.log(nombr);
      // alias
      let alias = document.createElement("div");
      alias.innerText = coder.alias;
      card_body.appendChild(alias);
      //edad
      let edad = document.createElement("div");
      edad.innerText = coder.edad;
      card_body.appendChild(edad);
      // sexo
      let sexo = document.createElement("div");
      sexo.innerText = coder.sexo;
      card_body.appendChild(sexo);
      //color favorito
      let color = document.createElement("div");
      color.innerText = coder.color_favorito;
      card_body.appendChild(color);
      //Comida Favorita
      let comida = document.createElement("div");
      comida.innerText = coder.comida_favorita;
      card_body.appendChild(comida);
      // genero
      let genero = document.createElement("div");
      genero.innerText = coder.genero[0].nombre;
      card_body.appendChild(genero);
      //pelicula
      let pelicula = document.createElement("div");
      pelicula.innerText = coder.genero[0].pelicula_favorita;
      card_body.appendChild(pelicula);
      //2 genero
      let genero2 = document.createElement("div");
      genero2.innerText = coder.genero[1].nombre;
      card_body.appendChild(genero2);
      //actor
      let actor = document.createElement("div");
      actor.innerText = coder.actor;
      card_body.appendChild(actor);
      //quien es mejor
      let jugador = document.createElement("div");
      jugador.innerText = coder.quienEsMejor;
      card_body.appendChild(jugador);
      //deporte
      let deporte = document.createElement("div");
      deporte.innerText = coder.deporte_favorito;
      card_body.appendChild(deporte);
    }
  });
}
//console.log(coders[0].genero[0].pelicula_favorita);
