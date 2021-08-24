import { combineReducers, createStore } from 'redux'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import {
  pokemonReducer,
  cartReducer,
} from './Pokemons/Pokemons.reducer'

const persistConfig ={
  key: 'root',
  storage
}

const rootReducer = combineReducers({
  pokemons: pokemonReducer,
  cartList: cartReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer)
export const persistedStore = persistStore(store)