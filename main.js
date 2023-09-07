document.addEventListener("DOMContentLoaded", function() {
    const baseUrl = "https://pokeapi.co/api/v2/pokemon/";

    const pokedataButton = document.getElementById("pokedataButton");
    const pokemonNameInput = document.getElementById("pokemonNameInput");
    const pokeDiv = document.getElementById("pokeDiv");

    pokedataButton.addEventListener("click", function() {
    const pokemonName = pokemonNameInput.value.toLowerCase(); 
    const url = baseUrl + pokemonName;

    fetch(url)
        .then(response => {
            if (!response.ok) {
            throw new Error('Pokémon no encontrado');
        }
            return response.json();
        })
        .then(json => {

        pokeDiv.innerHTML = JSON.stringify(json, null, 2);
        })
        .catch(error => {

        pokeDiv.innerHTML = "Error: " + error.message;
        });
    });
});
