import React from 'react'

import { Box } from '@material-ui/core'

import Pokemon from '../Pokemon'

import { useStyles } from './ShoppingCart.styles'

import { useSelector } from 'react-redux'

import {
  selectAllCartItems,
  selectAllPokemons
} from '../../store/Pokemons/Pokemons.selector'

const ShoppingCartHeader = () => {
  const classes = useStyles()
  const cartList = useSelector(selectAllCartItems)
  const pokemons = useSelector(selectAllPokemons)
  return(
    <Box className={classes.shoppingCartBody}>
      {Object.keys(cartList).map(cartitemId => {
        return <Pokemon key={cartitemId} pokemonId={cartitemId} isCartItem={true} pokemon={pokemons.list[cartitemId]} />
      })}
    </Box>
  )
}

export default ShoppingCartHeader