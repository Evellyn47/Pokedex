const PokemonName = document.querySelector ('.pokemon__name');
const PokemonNumber = document.querySelector ('.pokemon__number');
const PokemonImage = document.querySelector ('.pokemon__image');

                  // BOTÕES

const Form = document.querySelector ('form');
const Input = document.querySelector ('.input__search');
const buttonPrev = document.querySelector ('.btn-prev');
const buttonNext = document.querySelector ('.btn-next');
         
      let searchPokemon = 1;

// Quando criar uma class no const coloque o primeiro nome como a class. Por exemplo input__search     Coloque o nome da class como Input para facilitar na hora de lembra.

const fetchPokemon= async(pokemon) => {
   const APIResponse = await fetch(` https://pokeapi.co/api/v2/pokemon/${pokemon}`)
   
    if (APIResponse.status == 200) {
      const data=  await APIResponse.json();   
      return data
      
  } 
 }

  const renderPokemon = async (pokemon)=> {

    PokemonNumber.innerHTML = '';
    PokemonName.innerHTML = 'Loading...' ;    // Enquanto estiver renderizando o pokemon na tela ele vai exibir     "Loading"

         
      const data = await fetchPokemon (pokemon);

    if (data){          // SE tiver dados do Pokemon renderilar ele na tela
      PokemonImage.style.display = 'block';     
      PokemonName.innerHTML = data.name;
      PokemonNumber.innerHTML = data.id;
      PokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
      Input.value ="";

    }  
    else { 
      PokemonImage.style.display = 'none';                // SE NÃO  tiver dados do pokemon exibir na tela:
      PokemonName.innerHTML = 'Not found pokemon :(';
      PokemonNumber.innerHTML = " ";

    }    
    
}
    
 Form.addEventListener('submit', (event) => {
     event.preventDefault();
        renderPokemon(Input.value.toLowerCase());
     Input.value = '';
 });

    buttonPrev.addEventListener('click', () => {
      searchPokemon -= 1; 
      renderPokemon (searchPokemon); 
   });

     buttonNext.addEventListener('click', () => {
      searchPokemon += 1; 
      renderPokemon (searchPokemon); 

 });
   renderPokemon  ('searchPokemon');   // Mostrar o primeiro pokemon na tela, dessa forma quando alguém acessar a Pokedex ela não vai aparecer vazia.




