import React from 'react'

import { useStyles } from './ShoppingCart.styles'

import { Modal, Paper } from '@material-ui/core'

export const ShoppingCartAmountControl = () => {
  const classes = useStyles()

  return (
    <Modal open={false}>
      <Paper className={classes.shoppingCartAmountControlWrapper}>

      </Paper>
    </Modal>
  )
}