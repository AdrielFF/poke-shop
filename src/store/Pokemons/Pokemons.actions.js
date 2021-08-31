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

export const setPokemonAmount = (id, newAmount) => {
  return {
    type: 'SET_POKEMON_AMOUNT',
    payload: {id, newAmount}
  }
}

export const removePokemonFromCart = (pokemon) => {
  return {
    type: 'REMOVE_POKEMON_FROM_CART',
    payload: pokemon
  }
}

export const toggleItemAmountDialog = (itemDialogInfo) => {
  return {
    type: 'TOGGLE_ITEM_AMOUNT_DIALOG',
    payload: {pokemonId: itemDialogInfo.pokemonId, open: itemDialogInfo.open}
  }
}

export const openCheckoutDialog = () => {
  return {
    type: 'OPEN_CHECKOUT_DIALOG',
    payload: {}
  }
}

export const closeCheckoutDialog = () => {
  return {
    type: 'CLOSE_CHECKOUT_DIALOG',
    payload: {}
  }
}

export const clearCart = () => {
  return {
    type: 'CLEAR_CART',
    payload: {}
  }
}