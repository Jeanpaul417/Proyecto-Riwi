function actualizarTheme() {
  var theme = document.getElementById("select_theme").value;

  if (theme == "dark") {
    document.getElementById("body").classList.remove("theme-ligth");
    document.getElementById("body").classList.add("theme-dark");
  } else {
    document.getElementById("body").classList.remove("theme-dark");
    document.getElementById("body").classList.add("theme-ligth");
  }
}

function cambiarIdioma() {
  var idioma = document.getElementById("select_idioma").value;
  if (idioma == "en") {
    document.getElementById("inicio").innerText = "Home";
    document.getElementById("sobreno").innerText = "About Us";
    document.getElementById("gale").innerText = "Galery";
    document.getElementById("come").innerText = "Coments";
    document.getElementById("servi").innerText = "Services";
    document.getElementById("conta").innerText = "Contact";
    document.getElementById("cambi").innerText = "Change Theme";
    document.getElementById("lig").innerText = "Ligth";
    document.getElementById("dar").innerText = "Dark";

    document.getElementById("lema").innerText = "The best journey it is the next one.";
    document.getElementById("sobreno1").innerText = "About Us";
    document.getElementById("sobreno2").innerText = "The Best Tours";
    document.getElementById("sobreno3").innerText =
      "Make your dreams come true with our tour guide services. This way you will have the best tours and highly qualified staff. Travel safely and responsibly with us!!";
    document.getElementById("sobreno4").innerText = "Experience";
    document.getElementById("sobreno5").innerText =
      "We are a travel agency located in Medellin that provides sales services for customizable tourist plans. Within Medellin and its surroundings, we have trained guides in different foreign languages and with a excellent human quality in addition to having exceptional agreements for the best provision of our services.";
    document.getElementById("gale1").innerText = "Galery";
    document.getElementById("come1").innerText = "What are our customers saying";
    document.getElementById("servi1").innerText = "Our Services";
    document.getElementById("servi2").innerText = "City tour";
    document.getElementById("servi3").innerText = "Description";
    document.getElementById("servi4").innerText =
      "Comuna 13 Electric Stairs, Graffiti, Graffitour, Metro, Metrocable, Parque de los Deseos, Parque de los Pies Descalzos, Plaza Botero, Pueblito Paisa";
    document.getElementById("servi5").innerText = "Quote here !!";
  } else {
    document.getElementById("inicio").innerText = "Inicio";
    document.getElementById("sobreno").innerText = "Sobre Nosotros";
    document.getElementById("gale").innerText = "Galeria";
    document.getElementById("come").innerText = "Comentarios";
    document.getElementById("servi").innerText = "Servicios";
    document.getElementById("conta").innerText = "Contacto";
    document.getElementById("cambi").innerText = "Cambiar tema";
    document.getElementById("lig").innerText = "Claro";
    document.getElementById("dar").innerText = "Oscuro";
    document.getElementById("lema").innerText = "El mejor viaje es el proximo.";
    document.getElementById("sobreno1").innerText = "Sobre Nosotros";
    document.getElementById("sobreno2").innerText = "Los mejores Tours";
    document.getElementById("sobreno3").innerText =
      "Haz que tus sueños se hagan realidad con nuestros servicios de guia turisticos. De esta manera contaras con los mejores servicios y personal altamente calificado. ¡¡ Viaja de forma segura y responsable con nostros!!";
    document.getElementById("sobreno4").innerText = "Trayectoria";
    document.getElementById("sobreno5").innerText =
      "Somos una agencia de viaje ubicada en Medellin que presta servicio de venta de planes turisticos personalizables dentro de Medellin y sus alrededores, contamos con guias capacitados en diferentes idiomas extranjeros y con una excelente calidad humana ademas de contar con convenios excepcionales para la mejor prestacion de nuestros servicios.";
    document.getElementById("gale1").innerText = "Galeria";
    document.getElementById("come1").innerText = "Que dicen nuestros clientes";
    document.getElementById("servi1").innerText = "Nuestros Servicios";
    document.getElementById("servi2").innerText = "Tour por la ciudad";
    document.getElementById("servi3").innerText = "Descripcion";
    document.getElementById("servi4").innerText =
      "Escaleras Eléctricas Comuna 13, Graffitis, Graffitour, Metro, Metrocable, Parque de los Deseos, Parque de los Pies Descalzos, Plaza, Plaza Botero, Pueblito Paisa";
    document.getElementById("servi5").innerText = "Cotiza tu plan";
  }
}
