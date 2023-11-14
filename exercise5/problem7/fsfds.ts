type Pokemon = {
    id: number;
    name?: string;
    height?: number;
    weight?: number;
    image?: string;
  };
  
  async function fetchPokemons(pokemonNames: string[]) {
      try {
        let pokemonFinalArray: object[] = [];
        for (let i = 0; i < pokemonNames.length; i++) {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNames[i]}`);
  
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
          
          pokemonFinalArray.push(jsonSpecificPokemon)
        }
  
        console.log(pokemonFinalArray);
        return pokemonFinalArray;
      } catch (error) {
        return Promise.reject(new Error("smth went wrong"));
      }
  }
  
  fetchPokemons(["clefairy", "ivysaur"])
  
  export default fetchPokemons;
  