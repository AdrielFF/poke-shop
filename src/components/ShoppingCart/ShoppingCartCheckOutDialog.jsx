import React from 'react'
import {
 Divider,
 Dialog,
 DialogTitle,
 DialogContent,
 DialogActions,
 Button,
} from '@material-ui/core'

import {
  selectAllCartItems,
  selectAllPokemons,
  selectCheckouDialog
  } from '../../store/Pokemons/Pokemons.selector'

import {
  useSelector,
  useDispatch
} from 'react-redux'

import { closeCheckoutDialog } from '../../store/Pokemons/Pokemons.actions'
import { useStyles } from './ShoppingCart.styles'

export const ShoppginCartCheckOutDialog = () => {
  const classes = useStyles()
  const dialogInfo = useSelector(selectCheckouDialog)
  const dispatch = useDispatch()
  const cartItems = useSelector(selectAllCartItems)
  const pokemons = useSelector(selectAllPokemons)
  let total = 0

  Object.entries(cartItems).map((item) => total = total + (parseInt(pokemons.list[item[0]].price) * item[1]))

  return (
    <Dialog
      open={dialogInfo.open}
      onClose={() => dispatch(closeCheckoutDialog())}
    >
      <DialogTitle>
        Purchase of <strong>${total}</strong> completed successfully
      </DialogTitle>
      <DialogContent>
        <img
          className={classes.dialogImage}
          src={require(`./../../assets/sprites/sprites/pokemon/other/dream-world/25.svg`).default}
          alt="Pikachu gretting"
        />
      </DialogContent>
      <Divider variant="middle" />
      <DialogActions className={classes.amountUpdateActionsWrapper} >
        <Button
          classes={{root: classes.submitButton}}
          onClick={() => dispatch(closeCheckoutDialog())}
        >
          come back to buy more
        </Button>
      </DialogActions>

    </Dialog>
  )
}