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
  IconButton
} from '@material-ui/core'

import {
  Remove,
  Add as AddIcon
} from '@material-ui/icons'

import {
  selectItemAmountModalInfo,
  selectAllPokemons,
  selectAllCartItems
} from '../../store/Pokemons/Pokemons.selector'
import { toggleItemAmountModal } from '../../store/Pokemons/Pokemons.actions'
import { useDispatch ,useSelector } from 'react-redux'

export const ShoppingCartAmountModal = () => {
  const dispatch = useDispatch()
  const itemAmountModalInfo = useSelector(selectItemAmountModalInfo)
  const pokemons = useSelector(selectAllPokemons)
  const cartList = useSelector(selectAllCartItems)
  const pokemon = pokemons.list.find(p => p.id === parseInt(itemAmountModalInfo.pokemonId) )

  const [amount, setAmount] = useState(cartList[pokemon.id])
  const [modalCurrentItemPrice, setModalCurrentItemPrice] = useState((pokemon.price *  amount).toFixed(2))

  const classes = useStyles()

  const handleClose = () => {
    dispatch(toggleItemAmountModal({pokemon: null, open: false}))
  }

  const handleAddButton = () => {
    setAmount(amount + 1)
    setModalCurrentItemPrice((pokemon.price * (amount + 1)).toFixed(2))
  }

  const handleRemoveButton = () => {
    setAmount(amount - 1)
    setModalCurrentItemPrice((pokemon.price * (amount - 1)).toFixed(2))
  }

  const handleUpdateCart = () => {

  }

  return (
    <Dialog
      open={itemAmountModalInfo.open}
      onClose={handleClose}
    >
      <div className={classes.amounUpdateWrapper}>
          <DialogTitle onClose={handleClose}>
            {pokemon.name}
          </DialogTitle>
          <DialogContent>
            <img
              className={classes.modalImage}
              src={require(`./../../assets/sprites/sprites/pokemon/other/official-artwork/${pokemon.id}.png`).default}
              alt={pokemon.name}
            />
          </DialogContent>
          <DialogActions className={classes.amountUpdateActionsWrapper} >
            <span className={classes.customDivider}></span>
            <Paper className={classes.amountControlWrapper}>
              <IconButton disabled={amount <= 0} onClick={handleRemoveButton}>
                <Remove  fontSize="small" />
              </IconButton>
                <Typography className={classes.amountUpdate} component="span">{amount}</Typography>
              <IconButton disabled={amount >= 100} onClick={handleAddButton}>
                <AddIcon fontSize="small" />
              </IconButton>
            </Paper>
            <Button onClick={handleUpdateCart} className={classes.amountSubmitButton}>
              <Typography color="inherit">{amount <= 0 ? 'Remove' : 'Update'}</Typography>
              {
                (modalCurrentItemPrice > 0) && (
                  <Typography component="span">R$ {modalCurrentItemPrice}</Typography>
                )
              }
            </Button>
          </DialogActions>
        </div>
    </Dialog>
  )
}