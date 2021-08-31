import { combineReducers, createStore } from 'redux'

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import {
  pokemonReducer,
  cartReducer,
  itemAmountDialogInfoReducer,
  checkoutDialogReducer
} from './Pokemons/Pokemons.reducer'

const persistConfig ={
  key: 'poke-shop@1.1',
  storage,
  stateReconciler: autoMergeLevel2,
  blacklist: [
    'itemAmountDialogInfo',
    'checkOutDialog'
  ]
}

const rootReducer = combineReducers({
  pokemons: pokemonReducer,
  cartList: cartReducer,
  itemAmountDialogInfo: itemAmountDialogInfoReducer,
  checkOutDialog: checkoutDialogReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer)
export const persistedStore = persistStore(store)