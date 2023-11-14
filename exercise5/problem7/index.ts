type Pokemon = {
  id: number;
  name?: string;
  height?: number;
  weight?: number;
  image?: string;
};

async function fetchPokemons(pokemonNames: string[]) {
  try {
    const pokemonPromises = pokemonNames.map(async (name) => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

      if (!response.ok) {
        return Promise.reject(new Error(`smth went wrong`));
      }

      const pokemonInfo = await response.json();

      const jsonSpecificPokemon: Pokemon = {
        id: pokemonInfo.id,
        name: pokemonInfo.name,
        height: pokemonInfo.height,
        weight: pokemonInfo.weight,
        image: pokemonInfo.sprites.front_default,
      };

      return jsonSpecificPokemon;
    });

    const pokemonFinalArray = await Promise.all(pokemonPromises);

    console.log(pokemonPromises);
    return pokemonFinalArray;
  } catch (error) {
    return Promise.reject(new Error("smth went wrong"));
  }
}

fetchPokemons(["clefairy", "ivysaur"])

export default fetchPokemons;
