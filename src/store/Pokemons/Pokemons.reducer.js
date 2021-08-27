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
              price :(Math.floor(Math.random() * (100 - 20 + 1)) + 20).toFixed(2),
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
    default:
      return state
  }
}

export const itemAmountModalInfoReducer = (state = { pokemonId: null, open: false}, action) => {
  switch (action.type) {
    case 'TOGGLE_ITEM_AMOUNT_MODAL':
      return {
        ...state,
        open: action.payload.open,
        pokemonId: action.payload.pokemonId,
      }
    default:
      return state
  }
}