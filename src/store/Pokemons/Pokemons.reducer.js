export const pokemonReducer = (state = {list: [], isFilled: false}, action) => {
  switch (action.type){
    case 'CREATE_POKEMON_LIST':
      return {
        list: (
          Object.values(action.payload).map(p => {
            return {
              id: parseInt(p.url.replace(/(.*pokemon\/)([0-9]+)\/(.*)/, "$2")),
              url: p.url,
              name: p.name,
              price :(Math.floor(Math.random() * (30 - 5 + 1)) + 5).toFixed(2),
            }
          })
        ),
        isFilled: true,
      }
    default:
      return state
  }
}

export const cartReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_POKEMON_TO_CART':
      return {
        ...state,
        [action.payload.id]: (state[action.payload.id] || 0) + 1
      }
      case 'SET_POKEMON_AMOUNT':
        return {
          ...state,
          [action.payload.id]: action.payload.newAmount
        }
    case 'REMOVE_POKEMON_FROM_CART':
      const newState = {
        ...state
      }
      delete newState[action.payload.id]
      return newState
    case 'CLEAR_CART':
      return {}
    default:
      return state
  }
}

export const itemAmountDialogInfoReducer = (state = { pokemonId: null, open: false}, action) => {
  switch (action.type) {
    case 'TOGGLE_ITEM_AMOUNT_DIALOG':
      return {
        ...state,
        open: action.payload.open,
        pokemonId: action.payload.pokemonId,
      }
    default:
      return state
  }
}

export const checkoutDialogReducer = (state = {open: false}, action) => {
  switch(action.type){
    case 'OPEN_CHECKOUT_DIALOG':
      return {open: true}
    case 'CLOSE_CHECKOUT_DIALOG':
      return {open: false}
    default:
      return state
  }
}