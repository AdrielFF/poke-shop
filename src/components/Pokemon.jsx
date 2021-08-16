import React from 'react'

import { Paper } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

import PokemonImage from './PokemonImage'

const useStyles = makeStyles({
  pokemonWrapper: {
    width: 146,
    height: 214,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer',
    margin: '11px',
    padding: '1em',
  }
})


const Pokemon = (props) => {
  const classes = useStyles()

  return (
    <Paper className={classes.pokemonWrapper}>
      <PokemonImage url={props.url} />
    </Paper>
  )
}

export default Pokemon