import React from 'react'

import { Paper } from '@material-ui/core'

import { useStyles } from './ShoppingCart.styles'

import ShoppingCartHeader from './ShoppingCartHeader'
import ShoppingCartBody from './ShoppingCartBody'
import ShoppingCartFooter from './ShoppingCartFooter'

export const ShoppingCart = () => {
  const classes = useStyles()

  return (
    <Paper elevation={3} className={classes.wrapper}>
      <ShoppingCartHeader />
      <ShoppingCartBody />
      <ShoppingCartFooter />
    </Paper>
  )
}