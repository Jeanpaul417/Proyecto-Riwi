function guardarUsuario() {
    // Recibimos los valores y los guardamos en las variables
  let nombres = document.getElementById("nombres").value;
  let apellidos = document.getElementById("apellidos").value;
  let correo = document.getElementById("correo").value;

    if (nombres != "" || apellidos != "" || correo != "") {
        document.getElementById("nombres").classList.add("is-valid")
        document.getElementById("apellidos").classList.add("is-valid")
        document.getElementById("correo").classList.add("is-valid")
        
    }else {
    document.getElementById("nombres").classList.remove("is-invalid")
    document.getElementById("apellidos").classList.remove("is-invalid")
    document.getElementById("correo").classList.remove("is-invalid")
    }
    if (nombres == "") {
        document.getElementById("nombres").focus()
        document.getElementById("nombres").classList.add("is-invalid")
        document.getElementById("nombres").classList.remove("is-valid")
    }else if (apellidos == "") {
        document.getElementById("apellidos").focus()
        document.getElementById("apellidos").classList.add("is-invalid")
        document.getElementById("apellidos").classList.remove("is-valid")
    }else if (correo == "") {
        document.getElementById("correo").focus()
        document.getElementById("correo").classList.add("is-invalid")
        document.getElementById("correo").classList.remove("is-valid")
    }else{
        // guardamos el id de la tabla en una variable
        let tabla = document.getElementById("tablaContenido");
        let cuerpoTabla = document.getElementById("cuerpoTabla");
        // A la variable cuerpoTabla le insertamos una fila y la guardamos en la variable fila
        let fila = cuerpoTabla.insertRow(-1);
        // creamos variables donde le insertamos la fila creada anteriormente y le insertamos celdas
        let celdaNombre = fila.insertCell(0);
        let celdaApellidos = fila.insertCell(1);
        let celdaCorreo = fila.insertCell(2);
        // a las celdas creadas se le insertan las variables donde tenemos los datos ingresados con el innertext
        
        celdaNombre.innerText = nombres;
        celdaApellidos.innerText = apellidos;
        celdaCorreo.innerText = correo;
        // Limpiamos los elementos para que los cajones queden vacios
        document.getElementById("nombres").value = "";
        document.getElementById("apellidos").value = "";
        document.getElementById("correo").value = "";
    }
}