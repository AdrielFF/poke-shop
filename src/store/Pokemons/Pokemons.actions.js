export const mountPokemonList = (apiResult) => {
  return {
    type: 'CREATE_POKEMON_LIST',
    payload: apiResult
  }
}