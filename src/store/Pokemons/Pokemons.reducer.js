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
      const id = action.payload.id
      return {
        ...state,
        [id]: (state[id] || 0) + 1
      }
    default:
      return state
  }
}