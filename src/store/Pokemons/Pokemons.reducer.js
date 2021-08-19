export const pokemonReducer = (state = {list: [], isFilled: false}, action) => {
  switch (action.type){
    case 'CREATE_POKEMON_LIST':
      return {
        list: action.payload.map(i => {
          return {
            ...i,
            price: (Math.round((Math.floor(Math.random() * (100 - 20 + 1)) + 20) * 100) / 100).toFixed(2)
          }
        }),
        isFilled: true,
      }
    default:
      return state
  }
}