import React, { useEffect } from 'react'

import PokemonList from '../PokemonList/index'
import ShoppingCart from '../ShoppingCart'
import {
  selectAllPokemons,
  selectItemAmountDialogInfo
} from '../../store/Pokemons/Pokemons.selector'
import { mountPokemonList } from '../../store/Pokemons/Pokemons.actions'

import { useStyles } from './Main.styles'
import { useDispatch, useSelector } from 'react-redux'

import axios from 'axios'

import { Paper } from '@material-ui/core'
import { ShoppingCartAmountDialog } from '../ShoppingCart/ShoppingCartAmountDialog'
import { ShoppginCartCheckOutDialog } from '../ShoppingCart/ShoppingCartCheckOutDialog'

export const Main = () => {
  const classes = useStyles()
  const pokemons = useSelector(selectAllPokemons)
  const pokemonDialogInfo = useSelector(selectItemAmountDialogInfo)
  const dispatch = useDispatch()

  useEffect(() => {
    if (pokemons.isFilled === false) {
      axios.get('https://pokeapi.co/api/v2/pokemon?limit=60').then(res => {
        dispatch(mountPokemonList(res.data.results))
      })
    }
  })

  return(
    <Paper className={classes.mainWrapper} >
      <PokemonList />
      <ShoppingCart />
      {pokemonDialogInfo.pokemonId && (
        <ShoppingCartAmountDialog />
      )}
      <ShoppginCartCheckOutDialog />
    </Paper>
  )
}