type Pokemon = {
    id: number;
    name?: string;
    height?: number;
    weight?: number;
    image?: string;
};

async function fetchPokemon(pokemonName: string) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  
      if (!response.ok) {
        return await Promise.reject(
            new Error(
                `Error: smth went wrong`
            )
        );
      };
  
      const pokemonInfo = await response.json();
  
      const jsonSpecificPokemon: Pokemon = {
        id: pokemonInfo.id,
        name: pokemonInfo.name,
        height: pokemonInfo.height,
        weight: pokemonInfo.weight,
        image: pokemonInfo.sprites.front_default,
      };
      console.log(jsonSpecificPokemon);
      return jsonSpecificPokemon;
    } catch (error) {
      return Promise.reject(new Error("smth went wrong"));
    }
  }

  fetchPokemon("clefairy");
  
  export default fetchPokemon;