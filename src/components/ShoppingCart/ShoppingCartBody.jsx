import React from 'react'

import { Box } from '@material-ui/core'

import Pokemon from '../Pokemon'

import { useStyles } from './ShoppingCart.styles'

import { useSelector } from 'react-redux'

import { selectAllCartItems } from '../../store/Pokemons/Pokemons.selector'

const ShoppingCartHeader = () => {
  const classes = useStyles()
  const cartList = useSelector(selectAllCartItems)
  return(
    <Box className={classes.shoppingCartBody}>
      {Object.keys(cartList).map(cartitemId => {
        return <Pokemon key={cartitemId} pokemonId={parseInt(cartitemId)} isCartItem={true} />
      })}
    </Box>
  )
}

export default ShoppingCartHeader