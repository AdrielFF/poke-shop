import React from 'react'

import {
  Box,
  Button,
  Divider,
  Paper,
  Typography
} from '@material-ui/core'

import { useStyles } from './ShoppingCart.styles'

import {
  useSelector,
  useDispatch
} from 'react-redux'

import {
  selectAllPokemons,
  selectAllCartItems
} from '../../store/Pokemons/Pokemons.selector'

import {
  clearCart,
  openCheckoutDialog
} from '../../store/Pokemons/Pokemons.actions'

const ShoppingCartFooter = () => {
  const classes = useStyles()
  const cartItems = useSelector(selectAllCartItems)
  const pokemons = useSelector(selectAllPokemons)

  const dispatch = useDispatch()

  let total = 0

  Object.entries(cartItems).map((item) => total = total + (parseInt(pokemons.list[item[0]].price) * item[1]))

  return (
    <Paper
      elevation={3}
      className={classes.shoppingCartFooter}
    >
      <Typography variant="h6"><strong>Total:</strong>${total.toFixed(2).replace(/\./g, ',')}</Typography>
      <Divider orientation="horizontal" variant="fullWidth" />
      <Box
        display="flex"
        marginTop="1em"
      >
        <Button
          className={classes.submitButton}
          onClick={() => {
            dispatch(openCheckoutDialog())
            dispatch(clearCart())
          }}
          disabled={total <= 0}
        >
          Check-out
        </Button>
      </Box>

    </Paper>
  )
}

export default ShoppingCartFooter