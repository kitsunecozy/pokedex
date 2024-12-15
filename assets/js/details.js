// Função para obter o parâmetro de ID da URL
function getPokemonIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

// Função para carregar os detalhes do Pokémon
function loadPokemonDetails(pokemonId) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .then(response => response.json())
        .then(pokemon => {
            const detailsContainer = document.getElementById('pokemonDetails');

            // Renderizar detalhes do Pokémon
            detailsContainer.innerHTML = `
                <h2>${pokemon.name} (#${pokemon.id})</h2>
                <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
                <p><strong>Tipos:</strong> ${pokemon.types.map(t => t.type.name).join(', ')}</p>
                <p><strong>Altura:</strong> ${pokemon.height / 10} m</p>
                <p><strong>Peso:</strong> ${pokemon.weight / 10} kg</p>
                <p><strong>Habilidades:</strong> ${pokemon.abilities.map(a => a.ability.name).join(', ')}</p>
            `;
        });
}

// Capturar o ID do Pokémon e carregar os detalhes
const pokemonId = getPokemonIdFromUrl();
if (pokemonId) {
    loadPokemonDetails(pokemonId);
}

// Botão de voltar
document.getElementById('backButton').addEventListener('click', () => {
    window.history.back();
});