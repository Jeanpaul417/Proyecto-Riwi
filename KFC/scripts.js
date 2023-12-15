function actualizarTheme() {
  
    let theme = document.getElementById("select_theme").value;
  
    if (theme == "dark") {
      localStorage.setItem("theme", "dark");
      document.getElementById("body").classList.remove("theme-ligth");
      document.getElementById("body").classList.add("theme-dark");
    } else {
      document.getElementById("body").classList.remove("theme-dark");
      document.getElementById("body").classList.add("theme-ligth");
      localStorage.setItem("theme", "clear");
    }
  }
  if ((localStorage.getItem("theme")) == "dark") {
    document.getElementById("body").classList.remove("theme-ligth");
    document.getElementById("body").classList.add("theme-dark");
    localStorage.setItem("theme", "dark");
  }else{
      document.getElementById("body").classList.remove("theme-dark");
      document.getElementById("body").classList.add("theme-ligth");
      localStorage.setItem("theme", "clear");
  }

  function cambiarIdioma() {
    var idioma = document.getElementById("select_idioma").value;
    if (idioma == "en"){
      let compra = document.querySelectorAll(".btn")
      for (let i = 0; i < compra.length; i++) {
        compra[i].innerHTML = "Buy"
        
      } 
        localStorage.setItem("idioma", "ingles")
        document.getElementById("sele").innerText = "Languague"
        document.getElementById("cambi").innerText = "Theme"
        document.getElementById("lig").innerText = "Ligth"
        document.getElementById("dar").innerText = "Dark"
        document.getElementById("Espa").innerText = "Spanish"
        document.getElementById("ingl").innerText = "English"
        document.getElementById("hambu1").innerText = "1 BBQ Crunch Sandwich (1 breaded chicken fillet)"
        document.getElementById("hambu2").innerText = "1 Kentucky hamburger / Sandwich (1 breaded chicken breast fillet, pickles,..."
        document.getElementById("hambu3").innerText = "1 BBQ Crunch Sandwich (1 Breaded Chicken Fillet) + 1 Small Potato + 1 PET Soda..."
        document.getElementById("hambu4").innerText = "1 Kentucky Colonel Burger / Sandwich (1 Breaded Chicken Breast Fillet, Salad...)"
        document.getElementById("hambu5").innerText = "1 Kentucky hamburger/Sandwich (1 breaded chicken breast fillet, pickles,...)"
        document.getElementById("hambu6").innerText = "1 Kentucky Colonel burger / Sandwich (1 breaded chicken breast fillet, Salad...)."
        document.getElementById("hambu7").innerText = "1 Crispy BBQ Sandwich (1 extra large breast fillet, triple breaded, crispy onion...)."       
        document.getElementById("hambu8").innerText = "1 Crispy BBQ Sandwich (1 extra large breast fillet, triple breaded, crispy onion...)."
    }else{
      let compra = document.querySelectorAll(".btn")
      for (let i = 0; i < compra.length; i++) {
        compra[i].innerHTML = "Compra"
        
      }
        localStorage.setItem("idioma","español")
        document.getElementById("sele").innerText = "Idioma"
        document.getElementById("cambi").innerText = "Fondo"
        document.getElementById("lig").innerText = "Claro"
        document.getElementById("dar").innerText = "Oscuro"
        document.getElementById("Espa").innerText = "Español"
        document.getElementById("ingl").innerText = "Ingles"

        document.getElementById("hambu1").innerText = "1 Sandwich BBQ Crunch (1 Filete de pollo apanado)"
        document.getElementById("hambu2").innerText = "1 Kentucky hamburguesa / Sandwich(1 Filete de pechuga de pollo apanado, pepinillos,...)"
        document.getElementById("hambu3").innerText = "1 Sandwich BBQ Crunch (1 Filete de pollo apanado) + 1 Papa Pequeña + 1 Gaseosa PET ..."
        document.getElementById("hambu4").innerText = "1 Kentucky Coronel hamburguesa / Sandwich (1 Filete de pechuga de pollo apanado, Ensalada...)"
        document.getElementById("hambu5").innerText = "1 Kentucky hamburguesa /Sandwich (1 Filete de pechuga de pollo apanado, pepinillos,...)"
        document.getElementById("hambu6").innerText = "1 Kentucky Coronel hamburguesa / Sandwich (1 Filete de pechuga de pollo apanado, Ensalada...)."
        document.getElementById("hambu7").innerText = "1 Sandwich Crispy BBQ (1 Filete de pechuga extra grande, triple empanizado, cebolla crisp...)."
        document.getElementById("hambu8").innerText = "1 Sandwich Crispy BBQ (1 Filete de pechuga extra grande, triple empanizado, cebolla crisp...)"    
      }
  }

  