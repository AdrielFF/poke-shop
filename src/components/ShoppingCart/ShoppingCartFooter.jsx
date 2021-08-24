import React from 'react'

import { Paper } from '@material-ui/core'

import { useStyles } from './ShoppingCart.styles'

const ShoppingCartFooter = () => {
  const classes = useStyles()

  return (
    <Paper
      elevation={3}
      className={classes.shoppingCartFooter}
    >
    </Paper>
  )
}

export default ShoppingCartFooter