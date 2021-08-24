import React from 'react'

import { Box, Paper } from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { useStyles } from './ShoppingCart.styles'

const ShoppingCartHeader = () => {
  const classes = useStyles()

  return(
    <Paper
      elevation={3}
      className={classes.shoppingCartHeader}
    >
      <Box
        display="flex"
        alignItems="center"
        fontSize="1.2rem"
      >
        Shopping Cart
      <ShoppingCartIcon/></Box>
    </Paper>
  )
}

export default ShoppingCartHeader