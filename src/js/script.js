const pokemonName = document.querySelector(".pokemon__name");
const pokemonNumber = document.querySelector(".pokemon__number");
const pokemonImage = document.querySelector(".pokemon__images");
const form = document.querySelector(".form");
const input = document.querySelector(".input__search");


const fetchpokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);


    if (APIResponse.status == 200) {
        
        const data = await APIResponse.json();
        
        return data;
    } 

};

const renderPokemon = async (pokemon) => {
    pokemonName.textContent = "loading...";
    pokemonNumber.textContent = '';
    pokemonImage.src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fimgur.com%2Fgallery%2Fnew-premium-loading-screen-with-pokemon-skin-enabled-n3Z7uCC&psig=AOvVaw3NEuI8OzXy0Y5oCRqmoe0v&ust=1729972277145000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCICkiYynqokDFQAAAAAdAAAAABA4"
    const data = await fetchpokemon(pokemon);
    console.log(data);


    if (data) {
        pokemonImage.computedStyleMap.width = '25%';
        pokemonImage.src = data.sprites.versions["generation-v"]["black-white"].animated.front_default;
        pokemonNumber.innerHTML = data.id;
        pokemonName.innerHTML = data.name;
        input.value = "";
    } else {
        pokemonNumber.textContent = "";
        pokemonName.textContent = "not found :(";
        pokemonImage.src = 'https://media1.giphy.com/media/UHAYP0FxJOmFBuOiC2/200w.gif?cid=6c09b952skrq0arnmf37um33zwkts3ywxxmje0paojqs2511&ep=v1_gifs_search&rid=200w.gif&ct=g';
        pokemonImage.computedStyleMap.width = '35%';
    }
    
    

}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    renderPokemon(input.value.toLowerCase());

})


renderPokemon(20);