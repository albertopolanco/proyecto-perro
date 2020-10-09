'use strict';
//quitar raza


class Signup {
constructo(){

    this.nameInput = document.querySelector("#name");
    this.SpeechGrammarListInput = document.querySelector("#email");
    this.passwordInput = document.querySelector("#password");
    this.repeatPasswordInput = document.querySelector("#repeat-password");
    this.buttonInput = document.querySelector("#signup-button");
    this.messageWraper = document.querySelector("#.message-container");

    
    
}

// metodo para manejar la informacion que insertaremos en el input


handleEmailInput = (event) => {
    const email = event.target.value;
    console.log(email)
}

handlePasswordInput = (event) => {
    const password = event.target.value;
}

handleRepeatPasswordInput = (event) => {
    const repeatPassword = event.target.value;
}


saveData = (event) => {
// este metodo de event previene el comportamiento por default y no permite cargar a la pagina.
    event.preventDefault();
    
    const name = this.nameInput.value;
    const email = this.emailInput.value;
    const password = this.passwordInput.value;

    // function createUser (name, email, password){
    //     const userObj = {
    //         name: name,
    //         email: email,
    //         password: password
    //     }
    //     return userObj;
    // }


    // const newUser = createUser(name, email, password)

const newUser = new User(name, email, password);



// guardar el usuario en la base de datos
/*
database.createNewUser(newUser)
*/

//vaciar formulario

this.nameInput.value = '';
this.emailInput.value = '';
this.passwordInput.value = '';
this.repeatPasswordInput.value = '';
}

//metodos para cada uno de los input


addListeners = () => {

 // Vincula lo que ocurre en el input   

    this.emailInput.addEventListener('input', this.handleEmailInput);

    this.passwordInput.addEventListener('input', this.handlePasswordInput);

    this.repeatPasswordInput.addEventListener('input', this.handleRepeatPasswordInput);

    this.buttonInput.addEventListener('input', this.saveData);


}




}



const signup = new Signup();

//Cuando termine de cargar, registra todos los eventos
window.addEventListener('load', signup.addListeners);





















// class Signup {
//   constructor () {
//     this.nameInput = document.querySelector("#name");
//     this.pokemonInput = document.querySelector("#pokemon");
//     this.typeInput = document.querySelector("#type");
//     this.emailInput = document.querySelector("#email");
//     this.passwordInput = document.querySelector("#password");
//     this.repeatPasswordInput = document.querySelector("#repeat-password");

//     this.buttonInput = document.querySelector("#signup-button");
//     this.errorsWrapper = document.querySelector(".message-container");

//   }


//   // gestionar cambios del input "email"
//   handleEmailInput = (event) => {
//     const email = event.target.value;

//     // validar el texto del input email
//     validator.validateValidEmail(email);

//     const errors = validator.getErrors();

//     // si el nombre del email es valido
//     if (!errors.invalidEmailError) {
//       // comprueba si el email es unico
//       validator.validateUniqueEmail(email);
//     }

//     this.setErrorMessages();

//     // comprobar si hay errores, si no hay errores activa el boton Sign up (disabled = false)
//     this.checkButton();
//   }

//   // gestionar cambios del input "password"
//   handlePasswordInput = (event) => {
//     const password = event.target.value;
//     const passwordRepeat = this.repeatPasswordInput.value;


//     // validar el texto del input password
//     validator.validatePassword(password);
//     validator.validatePasswordRepeat(password, passwordRepeat);

//     this.setErrorMessages();

//     // comprobar si hay errores, si no hay errores activa el boton Sign up (disabled = false)
//     this.checkButton();
//   }

//   // gestionar cambios del input "repeat-password"
//   handleRepeatPasswordInput = (event) => {
//     const passwordRepeat = event.target.value;
//     const password = this.passwordInput.value;

//     // validar el texto del input password
//     // validar el texto del input repeatPassword
//     validator.validatePassword(password);
//     validator.validatePasswordRepeat(password, passwordRepeat);

//     this.setErrorMessages();

//     // comprobar si hay errores, si no hay errores activa el boton Sign up (disabled = false)
//     this.checkButton();
//   }

//   // gestionar el envio de los datos (submit)
//   saveData = (event) => {
//     // Cuando el evento ocurre, cancelalo y no recargue la pagina
//     event.preventDefault();
//     // recoger los valores de cada input
//     const name = this.nameInput.value;
//     const pokemon = this.pokemonInput.value;
//     const type = this.typeInput.value;
//     const email = this.emailInput.value;
//     const password = this.passwordInput.value;
//     const repeatPassword = this.repeatPasswordInput.value;

//     const newUser = new User(name, pokemon, type, email, password);

//     // guardar el nuevo usuario en la base de datos ( simulada :D )
//     db.saveNewUser( newUser );



//     // vaciar el form
//     this.nameInput.value = "";
//     this.pokemonInput.value = "";
//     this.typeInput.value = "";
//     this.emailInput.value = "";
//     this.passwordInput.value = "";
//     this.repeatPasswordInput.value = "";

//     this.showSuccessMessage();
//     this.removeMessages();

//     // reiniciar los errores del `validator`
//     validator.resetValidator();
//     // desactivar el botón Sign Up de nuevo
//     this.buttonInput.disabled = true;
//   }

//   // registarar funciones para cada input/campo
//   addListeners = () => {
//     // escucha para los cambios de texto
//     this.emailInput.addEventListener("input", this.handleEmailInput );
//     this.passwordInput.addEventListener("input", this.handlePasswordInput);
//     this.repeatPasswordInput.addEventListener("input", this.handleRepeatPasswordInput);

//     this.buttonInput.addEventListener("click", this.saveData);

//   }

//   showSuccessMessage = () => {
//     // vacia los errores para que no se sumen
//     this.errorsWrapper.innerHTML = "";

//     const errorsObj = validator.getErrors();
//     // convertir el objeto a un array de strings
//     const errorsStringsArr = Object.values(errorsObj);

//     if (errorsStringsArr.length > 1) {
//       return;
//     }

//     const successMessageP = document.createElement('p');
//     successMessageP.innerHTML = "La cuenta ha sido creada con exito";

//     this.errorsWrapper.appendChild(successMessageP);

//   }

  
//   // activar o desactivar el botón de envio (Sign Up)
//   checkButton = () => {
//     const errorsObj = validator.getErrors();
//     const errorsArr = Object.values(errorsObj);
    

//     if(errorsArr.length > 0) {
//       this.buttonInput.disabled = true;
//     }
//     else {
//       this.buttonInput.disabled = false;
//     }
//   }

//   removeMessages = () => {
//     setTimeout( () => {
//       this.errorsWrapper.innerHTML = "";
//     }, 2000)
//   }


//   setErrorMessages = () => {
//     // vacia los errores para que no se sumen
//     this.errorsWrapper.innerHTML = "";
    
//     const errorsObj = validator.getErrors();

//     // convertir el objeto a un array de strings
//     const errorsStringsArr = Object.values(errorsObj);

//     errorsStringsArr.forEach( (errorStr) => {
//       const errorMessageP = document.createElement('p');
//       errorMessageP.innerHTML = errorStr;

//       this.errorsWrapper.appendChild(errorMessageP);
//     })

//   }
// }

// // crear una nueva instanica del Signup (objeto)
// const signup = new Signup();

// window.addEventListener("load", signup.addListeners );