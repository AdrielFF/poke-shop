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

export const toggleItemAmountModal = (itemModalInfo) => {
  return {
    type: 'TOGGLE_ITEM_AMOUNT_MODAL',
    payload: {pokemonId: itemModalInfo.pokemonId, open: itemModalInfo.open}
  }
}