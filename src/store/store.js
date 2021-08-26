import { combineReducers, createStore } from 'redux'

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import {
  pokemonReducer,
  cartReducer,
} from './Pokemons/Pokemons.reducer'

const persistConfig ={
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
}

const rootReducer = combineReducers({
  pokemons: pokemonReducer,
  cartList: cartReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer)
export const persistedStore = persistStore(store)