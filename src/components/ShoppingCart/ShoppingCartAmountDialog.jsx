import React, { useState } from 'react'

import { useStyles } from './ShoppingCart.styles'

import {
  DialogTitle ,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Paper,
  IconButton,
  Divider
} from '@material-ui/core'

import {
  Remove,
  Add as AddIcon
} from '@material-ui/icons'

import {
  selectItemAmountDialogInfo,
  selectAllPokemons,
  selectAllCartItems
} from '../../store/Pokemons/Pokemons.selector'
import {
  toggleItemAmountDialog,
  removePokemonFromCart,
  setPokemonAmount
} from '../../store/Pokemons/Pokemons.actions'
import { useDispatch ,useSelector } from 'react-redux'

export const ShoppingCartAmountDialog = () => {
  const dispatch = useDispatch()
  const itemAmountDialogInfo = useSelector(selectItemAmountDialogInfo)
  const pokemons = useSelector(selectAllPokemons)
  const cartList = useSelector(selectAllCartItems)
  const pokemon = pokemons.list.find(p => p.id === parseInt(itemAmountDialogInfo.pokemonId) )

  const [amount, setAmount] = useState(cartList[pokemon.id])
  const [dialogCurrentItemPrice, setDialogCurrentItemPrice] = useState((pokemon.price *  amount).toFixed(2))

  const classes = useStyles()

  const handleClose = () => {
    dispatch(toggleItemAmountDialog({pokemon: null, open: false}))
  }

  const handleAddButton = () => {
    setAmount(amount + 1)
    setDialogCurrentItemPrice((pokemon.price * (amount + 1)).toFixed(2))
  }

  const handleRemoveButton = () => {
    setAmount(amount - 1)
    setDialogCurrentItemPrice((pokemon.price * (amount - 1)).toFixed(2))
  }

  const handleUpdateCart = () => {
    handleClose()
    if (amount <= 0 ){
      return dispatch(removePokemonFromCart(pokemon))
    }

    dispatch(setPokemonAmount(pokemon.id, amount))
  }

  return (
    <Dialog
      open={itemAmountDialogInfo.open}
      onClose={handleClose}
      className={classes.amounUpdateWrapper}
      maxWidth="lg"
    >
      <DialogTitle onClose={handleClose}>
        {pokemon.name}
      </DialogTitle>
      <DialogContent>
        <img
          className={classes.dialogImage}
          src={require(`./../../assets/sprites/sprites/pokemon/other/official-artwork/${pokemon.id}.png`).default}
          alt={pokemon.name}
        />
      </DialogContent>
      <Divider variant="middle" />
      <DialogActions className={classes.amountUpdateActionsWrapper} >
        <Paper className={classes.amountControlWrapper}>
          <IconButton disabled={amount <= 0} onClick={handleRemoveButton}>
            <Remove  fontSize="small" />
          </IconButton>
            <Typography className={classes.amountUpdate} component="span">{amount}</Typography>
          <IconButton disabled={amount >= 100} onClick={handleAddButton}>
            <AddIcon fontSize="small" />
          </IconButton>
        </Paper>
        <Button
          classes={{root: classes.submitButton}}
          onClick={handleUpdateCart}
        >
          <Typography color="inherit">{amount <= 0 ? 'Remove' : 'Update'}</Typography>
          {
            (dialogCurrentItemPrice > 0) && (
              <Typography component="span">${dialogCurrentItemPrice}</Typography>
            )
          }
        </Button>
      </DialogActions>
    </Dialog>
  )
}