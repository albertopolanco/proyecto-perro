const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all';//define una propiedad con el valor de la url de la api.

const select = document.querySelector('.breeds');//define una propiedad con el elemento con la clase 'breeds' del DOM.

fetch(BREEDS_URL)//hace una llamada a la api declada con BREEDS_URL
  .then(res => {//cuando acabes de hacer la llamada me devuelves res.json
    return res.json();
  })
  .then(data => {//cuando me es devuelto el resultado de la api hazme esto
    const breedsObject = data.message;//define una propiedad con el objeto message de la respuesta de la api
    const breedsArray = Object.keys(breedsObject);//define una propiedad de tipo array con todas las keys del objeto breedsObject
    for (let i = 0; i < breedsArray.length; i++) {//un bucle que recorrera todos los elementos del breedsArray
      const option = document.createElement('option');// define una propiedad con un elemento nuevo de tipo option
      option.value = breedsArray[i];//setea el value al elemnto option que acabamos de crear 
      option.innerText = breedsArray[i];//setea el texto al elemento option que acabamos de crear
      select.appendChild(option);//añade el elemento opton que acabamos de crear al elemento select definido en la linea 3
    }
    console.log(breedsArray);// te pinta en consola el objeto breedsArray
  });

select.addEventListener('change', event => {//define un escuchador del evento change para el elemnto select definido en la linea 3
  //este codigo se ejecutara cuando se dispare el evento change del elemento select
  let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`;//define una variable con la url donde ira a buscar las imagenes
  getDoggo(url);//ejecuta la funcion getDoggo
});

const img = document.querySelector('.dog-img');//define una propiedad con el elemento con la clase 'dog-img' del DOM
const spinner = document.querySelector('.spinner');//define una propiedad con elemento con la clase 'spinner' del DOM

const getDoggo = url => {//define la funcion getDoggo el cual espera el parametro url
  spinner.classList.add('show');//añade la clase'show' al elemnto spinner definido en la linea 27
  img.classList.remove('show');//elimina la clase 'show' del elemento img definido en la linea 26
  fetch(url)//hace una llamada a la api declarada con url
    .then(res => {////cuando acabes dehacer la llamada me devuelves res.json
      return res.json();
    })
    .then(data => {//cuando me es devuelto el resultado de la api hazme esto
      img.src = data.message;//setea en el atributo src del elemento img definido en la linea 26 el valor de la propiedad mssage de la rspesta de la llamada a la api
    });
};

img.addEventListener('load', () => {//define un escuchador del evento load para el elemento img definido en la linea 26 
  //este codigo se ejecutara cuando se dispare el evento load sobre el elemnto img
  spinner.classList.remove('show');//elimina la clase'show' del elemento spinner definido en la linea 27
  img.classList.add('show');//añade la clase show al elemento img definido en la linea 26
});