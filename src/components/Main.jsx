import React from 'react'

import Filters from './Filters'

import { makeStyles } from '@material-ui/core/styles'

import PokemonList from './PokemonList'

const useStyles = makeStyles({
  mainWrapper: {
    width: '100%',
    padding: '6em',
    display: 'flex',
    flexDirection: 'column'
  }
})

const Main = () => {
  const classes = useStyles()

  return(
    <div className={classes.mainWrapper}>
      <Filters />
      <PokemonList />
    </div>
  )
}

export default Main