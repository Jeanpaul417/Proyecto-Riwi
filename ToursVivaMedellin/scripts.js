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
    //NAP
    document.getElementById("inicio").innerText = "Home";
    document.getElementById("sobreno").innerText = "About Us";
    document.getElementById("gale").innerText = "Galery";
    document.getElementById("come").innerText = "Coments";
    document.getElementById("servi").innerText = "Services";
    document.getElementById("conta").innerText = "Contact";
    document.getElementById("cambi").innerText = "Change Theme";
    document.getElementById("lig").innerText = "Ligth";
    document.getElementById("dar").innerText = "Dark";
    //PAGINA PRINCIPAL
    document.getElementById("lema").innerText = "The best journey it is the next one.";
    //SOBRE NOSOTROS
    document.getElementById("sobreno1").innerText = "About Us";
    document.getElementById("sobreno2").innerText = "The Best Tours";
    document.getElementById("sobreno3").innerText =
      "Make your dreams come true with our tour guide services. This way you will have the best tours and highly qualified staff. Travel safely and responsibly with us!!";
    document.getElementById("sobreno4").innerText = "Experience";
    document.getElementById("sobreno5").innerText =
      "We are a travel agency located in Medellin that provides sales services for customizable tourist plans. Within Medellin and its surroundings, we have trained guides in different foreign languages and with a excellent human quality in addition to having exceptional agreements for the best provision of our services.";
    //GALERIA
    document.getElementById("gale1").innerText = "Galery";
    // QUE DICEN NUESTROS CLIENTES
    document.getElementById("come1").innerText = "What are our customers saying";
    // NUESTROS SERVICIOS

    document.getElementById("servi1").innerText = "Our Services";
    // CITY TOUR
    document.getElementById("servi2").innerText = "City tour";
    document.getElementById("servi3").innerText = "Description";
    document.getElementById("servi4").innerText =
      "Comuna 13 Electric Stairs, Graffiti, Graffitour, Metro, Metrocable, Parque de los Deseos, Parque de los Pies Descalzos, Plaza Botero, Pueblito Paisa";
    document.getElementById("servi5").innerText = "Quote here !!";
    //HACIENDA NAPOLES
    document.getElementById("servi6").innerText = "Description";
    document.getElementById("servi7").innerText =
      "Enjoy an unique experience on the tour to Hacienda Napoles, meet animals native from Africa and live a true safari a few hours from Medellin.";
    document.getElementById("servi8").innerText = "Quote here !!";
    //GUATAPE
    document.getElementById("servi9").innerText = "Description";
    document.getElementById("servi10").innerText =
      "Guatapé it is a beautiful village in the region of the reservoirs of Antioquia. Its icon is, in fact, this huge 220 meter high rock that stands like a visible jewel.";
    document.getElementById("servi11").innerText = "Quote here !!";
    // TOUR SANTAFE DE ANTIOQUIA
    document.getElementById("servi12").innerText = "Description";
    document.getElementById("servi13").innerText =
      "In the tour of Santafe de Antioquia we will make a historical tour through the colonial streets, the western bridge and the Juan del corral museum.";
    document.getElementById("servi14").innerText = "Quote here !!";
    //PARAPENTE
    document.getElementById("servi15").innerText = "Paragliding";
    document.getElementById("servi16").innerText = "Description";
    document.getElementById("servi17").innerText =
      "We want you to know Antioquia from the air. Fly from incredible mountains and live the magic without airplanes. With quality and safety.";
    document.getElementById("servi18").innerText = "Quote here !!";
    //SENDERISMO
    document.getElementById("servi19").innerText = "Trekking";
    document.getElementById("servi20").innerText = "Description";
    document.getElementById("servi21").innerText =
      "Be amazed by the richness of the water that forms impressive waterfalls due to its mountainous relief. We will walk through pine, fog and eucalyptus forests.";
    document.getElementById("servi22").innerText = "Quote here !!";

    //FOOTER
    document.getElementById("footcel").innerText = "Cellphone";
    document.getElementById("footcor").innerText = "E-mail";
    document.getElementById("footubi").innerText = "Location";
    document.getElementById("footred").innerText = "Social Media";
  } else {
    //NAP
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
    //SOBRE NOSOTROS
    document.getElementById("sobreno1").innerText = "Sobre Nosotros";
    document.getElementById("sobreno2").innerText = "Los mejores Tours";
    document.getElementById("sobreno3").innerText =
      "Haz que tus sueños se hagan realidad con nuestros servicios de guia turisticos. De esta manera contaras con los mejores servicios y personal altamente calificado. ¡¡ Viaja de forma segura y responsable con nostros!!";
    document.getElementById("sobreno4").innerText = "Trayectoria";
    document.getElementById("sobreno5").innerText =
      "Somos una agencia de viaje ubicada en Medellin que presta servicio de venta de planes turisticos personalizables dentro de Medellin y sus alrededores, contamos con guias capacitados en diferentes idiomas extranjeros y con una excelente calidad humana ademas de contar con convenios excepcionales para la mejor prestacion de nuestros servicios.";
    //GALERIA
    document.getElementById("gale1").innerText = "Galeria";
    //QUE DICEN NUESTROS CLIENTES
    document.getElementById("come1").innerText = "Que dicen nuestros clientes";
    document.getElementById("servi1").innerText = "Nuestros Servicios";
    //TOUR POR LA CIUDAD
    document.getElementById("servi2").innerText = "Tour por la ciudad";
    document.getElementById("servi3").innerText = "Descripcion";
    document.getElementById("servi4").innerText =
      "Escaleras Eléctricas Comuna 13, Graffitis, Graffitour, Metro, Metrocable, Parque de los Deseos, Parque de los Pies Descalzos, Plaza, Plaza Botero, Pueblito Paisa";
    document.getElementById("servi5").innerText = "Cotiza tu plan";
    //HACIENDA NAPOLES
    document.getElementById("servi6").innerText = "Descripcion";
    document.getElementById("servi7").innerText =
      " Disfruta una experiencia unica en el tour a la hacienda napoles desde Medellin conoce animales originarios de África y vive un verdadero safari a pocas horas de Medellin.";
    document.getElementById("servi8").innerText = "Cotiza tu plan";
    //GUATAPE
    document.getElementById("servi9").innerText = "Descripcion";
    document.getElementById("servi10").innerText =
      "Guatapé es un pueblo bellísimo de la región Embalses de Antioquia. Su ícono es, en efecto, este enorme batolito de 220 metros de altura que se alza como una joya visible.";
    document.getElementById("servi11").innerText = "Cotiza tu plan";
    //TOUR SANTAFE DE ANTIOQUIA
    document.getElementById("servi12").innerText = "Descripcion";
    document.getElementById("servi13").innerText =
      ">En el tour de Santafe de Antioquia realizaremos un recorrido historico por las calles coloniales, el puente de occidente y el museo Juan del corral.";
    document.getElementById("servi14").innerText = "Cotiza tu plan";
    //PARAPENTE
    document.getElementById("servi15").innerText = "Parapente";
    document.getElementById("servi16").innerText = "Descripcion";
    document.getElementById("servi17").innerText =
      "Queremos que conozcas Antioquia desde el aire. Vuela desde increibles montañas y vive la magia sin aviones. Con calidad y seguridad.";
    document.getElementById("servi18").innerText = "Cotiza tu plan";
    //SENDERISMO
    document.getElementById("servi19").innerText = "Senderismo";
    document.getElementById("servi20").innerText = "Descripcion";
    document.getElementById("servi21").innerText =
      "Asombrate con la riqueza hídrica que por su relieve montañoso forma impresionantes cascadas caminaremos a través de bosques de pinos,de niebla y eucaliptos";
    document.getElementById("servi22").innerText = "Cotiza tu plan";
    //FOOTER
    document.getElementById("footcel").innerText = "Celular";
    document.getElementById("footcor").innerText = "Correo Electronico";
    document.getElementById("footubi").innerText = "Ubicacion";
    document.getElementById("footred").innerText = "Redes Sociales";
  }
}
