import React from 'react'

import { Box } from '@material-ui/core'

import Pokemon from '../Pokemon'

import { useStyles } from './ShoppingCart.styles'

import {
  useSelector,
  useDispatch
} from 'react-redux'

import { toggleItemAmountModal } from '../../store/Pokemons/Pokemons.actions'
import { selectAllCartItems } from '../../store/Pokemons/Pokemons.selector'

const ShoppingCartHeader = () => {
  const dispatch = useDispatch()

  const classes = useStyles()
  const cartList = useSelector(selectAllCartItems)
  return(
    <Box className={classes.shoppingCartBody}>
      {Object.keys(cartList).map(cartitemId => (
        <Pokemon
          key={cartitemId}
          pokemonId={parseInt(cartitemId)}
          isCartItem={true}
          handlePokemonClick={() => dispatch(toggleItemAmountModal({pokemonId: parseInt(cartitemId), open: true}))}
        />
      ))}
    </Box>
  )
}

export default ShoppingCartHeader