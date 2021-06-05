//creo una variable y como valor le asigno el elemento de id formulario1. 
//Ahora cuando llame a la variable formulario, va a hacer referencia a mi elemento form de html.
//En lugar de llamarlo con el ID lo podría traer por tipo de elemento con document.querySelector('form') ; pero en este caso estaría haciendo referencias a todos los elementos form que contenga mi html.
const formulario = document.querySelector('form')
const nombre = document.querySelector('#Usuario')
const password = document.querySelector('#Contraseña')
let validacion1 = false 
let validacion2 = false

//al elemento form le agrego el método eventListener que va a ejecutar una función cuando se produzca el evento que introducimos en el parámetro. En este caso 'Submit'
formulario.addEventListener('submit',(event) => {
    //el evento que capturé se guarda en la variable event. Ahora le aplico la propiedad PreventDefault, para que al producirse el evento, no ejecute la función prestablecida. 
    event.preventDefault()
 
    //Valido usuario
    if (nombre.value == "") {
        window.alert('Debe completar el campo usuario');      
    } else if (nombre.value.includes('@')) {
        validacion1 = true
    } else {
        window.alert('El campo Usuario debe contener @');
    }
    
    //Valido Password
    if (password.value != ""){
        validacion2 = true
    } else{
        window.alert("Debe completar el campo contraseña")
    }

    //Valido que ambos campos sean correctos
  
    if (validacion1 && validacion2){
        formulario.submit()
        window.alert('Formulario enviado correctamente')
    }
    validacion1 = false
    validacion2 = false
})