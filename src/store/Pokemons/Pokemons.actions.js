export const mountPokemonList = (apiResult) => {
  return {
    type: 'CREATE_POKEMON_LIST',
    payload: apiResult
  }
}

export const addPokemonToCart = (pokemon) => {
  return {
    type: 'ADD_POKEMON_TO_CART',
    payload: pokemon
  }
}