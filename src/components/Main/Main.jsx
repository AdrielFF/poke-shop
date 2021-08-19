import React from 'react'

import { Paper } from '@material-ui/core'

import PokemonList from './../PokemonList/index'

import { useStyles } from './Main.styles'

export const Main = () => {
  const classes = useStyles()

  return(
    <div className={classes.mainWrapper}>
      <Paper className={classes.paper} >
        <PokemonList />
      </Paper>
    </div>
  )
}