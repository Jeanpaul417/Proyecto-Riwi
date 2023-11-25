/* function capturarImput() {
    var input = document.getElementById("input").value;
    console.log(input)
    document.getElementById("input").value = ""
    console.log(input.toUpperCase())
}

function capturarInfo() {
    var color = document.getElementById("color").value
    console.log(color)
    document.getElementById("cuadrocolor").style.backgroundColor = color
} */


/* function mostrarInfo() {
    var mostrarPaisaje = document.getElementById("paisaje").value
    document.getElementById("paisaje").style.displayshow
    
}*/

/*  trailer peliculas

function atras() {
    let nuevoVideo = "https://www.youtube.com/embed/9KrLYAhxqag?autoplay=1&mute=1"
    document.getElementById("video").setAttribute("src", nuevoVideo)
}
function centro() {
    let nuevoVideo = "https://www.youtube.com/embed/WEl4As2yriA?autoplay=1&mute=1"
    document.getElementById("video").setAttribute("src", nuevoVideo)
}

function adelante(){
    let nuevoVideo = "https://www.youtube.com/embed/GeR3YxTv_zU?autoplay=1&mute=1"
    document.getElementById("video").setAttribute("src", nuevoVideo)
} */
/* //Botones sumar y resta
function sumar(){
    let dato1 = document.getElementById('dato1').value;
    let dato2 = document.getElementById("dato2").value
    let resultado = parseInt(dato1) + parseInt(dato2)
    console.log(`El resultado de la suma es: ${resultado}`)
    document.write(`El resultado de la suma es: ${resultado}`)
       
 }

 function restar(){
    let dato1 = document.getElementById('dato1').value;
    let dato2 = document.getElementById("dato2").value
    let resultado = parseInt(dato1) - parseInt(dato2)
    console.log(`El resultado de la resta es: ${resultado}`)
    document.write(`El resultado de la resta es: ${resultado}`)
       
 } */

 function operaciones(){
   
    let operaciones = document.getElementById('operacion').value;
    let dato1 = document.getElementById('numero1').value ;
    let dato2 = document.getElementById("numero2").value;
    
    if(dato1 == ""){
        document.getElementById('numero1').focus();
        document.getElementById("numero1").classList.add("is-invalid")
        document.getElementById("numero1").classList.remove("is-valid")
    }else if(dato2 == ""){
        document.getElementById('numero2').focus();
        document.getElementById("numero2").classList.add("is-invalid")
        document.getElementById("numero2").classList.remove("is-valid")
    }else if(operaciones.value == "defe"){
        document.getElementById('operacion').focus();
        document.getElementById("operacion").classList.add("is-invalid")
    }
        

    
    

    if(operaciones == 'suma'){
        let resultado = parseInt(dato1) + parseInt(dato2)
        console.log(`El resultado de la suma es: ${resultado}`)
        document.getElementById("total").innerText = `El resultado de 
        la operacion entre (" ${dato1} ") y (" ${dato2} ") es = ${resultado}`
        document.getElementById("numero1").value = "";
        document.getElementById("numero2").value = "";
        document.getElementById("operacion").value = "defe"
    }
    if(operaciones == 'resta'){
        let resultado = parseInt(dato1) - parseInt(dato2)
        console.log(resultado)
        document.getElementById("total").innerText = `El resultado de la 
        resta entre (" ${dato1} ") y (" ${dato2} ") es = ${resultado}`
    }
    if(operaciones == 'multi'){
        let resultado = parseInt(dato1) * parseInt(dato2)
        console.log(resultado)
        document.getElementById("total").innerText = `El resultado de 
        la multiplicacion entre (" ${dato1} ") y (" ${dato2} ") es = ${resultado}`
    }

    if(operaciones == 'divi'){
        let resultado = parseInt(dato1) / parseInt(dato2)
        console.log(resultado)
        document.getElementById("total").innerText = `El resultado de
         la division entre (" ${dato1} ") y (" ${dato2} ") es = ${resultado}`
    }
    if(operaciones == 'expo'){
        let resultado = parseInt(dato1) ** parseInt(dato2)
        console.log(resultado)
        document.getElementById("total").innerText = `El resultado de 
        la exponenciacion entre (" ${dato1} ") y (" ${dato2} ") es = ${resultado}`
    }

    

}

