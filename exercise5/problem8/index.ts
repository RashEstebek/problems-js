// type Person = {
//   name: string;
//   films: string[];
// }

async function fetchCharacterWithMovies(characterId: number) {
  const api = "https://swapi.dev/api";
  const characterUrl = `${api}/people/${characterId}/`;

  try {
    const characterResponse = await fetch(characterUrl);

    if (!characterResponse.ok) {
      throw new Error("smth went wrong");
    }

    const characterData = await characterResponse.json();
    const films = await Promise.all(
      characterData.films.map(async (filmUrl: string) => {
        const filmResponse = await fetch(filmUrl);

        if (!filmResponse.ok) {
          throw new Error("smth went wrong");
        }

        const filmData = await filmResponse.json();
        return filmData.title;
      })
    );

    return {
      name: characterData.name,
      films,
    };
  } catch (error) {
    return Promise.reject(new Error("smth went wrong"));
  }
}

fetchCharacterWithMovies(1)
// {
//   name: "Luke Skywalker",
//   films: ["A New Hope", "The Empire Strikes Back", "Return of the Jedi", "Revenge of the Sith"]
// }

fetchCharacterWithMovies(150)
// Error: smth went wrong

export default fetchCharacterWithMovies;
