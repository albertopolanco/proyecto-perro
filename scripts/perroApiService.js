// const razasUrl = 'https://api.thedogapi.com/v1/breeds';
// const imagenesUrl = 'https://dog.ceo/api/breeds/image';

'use strict';

async function fetchImagesDogs(raza) {
    const response = await fetch(`https://api.thedogapi.com/v1/breeds/search?name=${raza}`);
    const dogJson = await response.json(); 
      const dogId = dogJson.map(async function(dog){
        const id= dog.id;
        const getImage = await fetch(`https://api.thedogapi.com/v1/images/search?breed_id=${id}`);
        const getImageJson = await getImage.json()
    return {...getImageJson}
    })
  return Promise.all(dogId);
  }
  fetchImagesDogs('Shiba Inu')









































// 'use strict';

// function getPokemons () {

//   const section = document.querySelector(".pokemon-list");


//   for (let i = 0; i < 21; i++) {
//     // cada pokemon lleva su propio indice
//     // tenemos que añadir el indice al fin de URL de la API
//     fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}`)
//       .then((response) => {
//         // convertiremos la respuesta a un objeto legible,
//         // porque los datos de la respuesta (response.body) están codificados

//         return response.json(); // response.json() es tambien una operacion asincrona
//       })
//       .then((data) => {
        
//         const article = document.createElement('article');
//         article.innerHTML = `
//           <img src="${data.sprites.front_default}" alt="${data.name}"/>
//           <h3>${data.name}</h3>
//         `;

//         section.appendChild(article);
//       })
//       .catch((err) => {})
//   }
// }


// async function getPokemonsAA () {
//   const section = document.querySelector(".pokemon-list");

//   for (let i = 0; i < 21; i++) {
//     try {
//       const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}`);
//       const data = await response.json();
  
//       const article = document.createElement('article');
//       article.innerHTML = `
//         <img src="${data.sprites.front_default}" alt="${data.name}"/>
//         <h3>${data.name}</h3>
//       `;
  
//       section.appendChild(article);
//     } catch (err) {
      
//     }
//   }
// }

// getPokemonsAA();