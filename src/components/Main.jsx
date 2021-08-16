import React from 'react'

import { Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import PokemonList from './PokemonList'

const useStyles = makeStyles({
  mainWrapper: {
    width: '100%',
    maxWidth: 1728,
    margin: '0 auto',
    padding: '6em 0',
    display: 'flex',
    flexDirection: 'column'
  },
  paper: {
    height: '100%'
  }
})

const Main = () => {
  const classes = useStyles()

  return(
    <div className={classes.mainWrapper}>
      <Paper className={classes.paper} >
        <PokemonList />
      </Paper>
    </div>
  )
}

export default Main