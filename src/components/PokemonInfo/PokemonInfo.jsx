import React, { useState, useEffect } from 'react'

import {
  CircularProgress,
  Paper,
} from '@material-ui/core'

import axios from 'axios'

import { useStyles } from './PokemonInfo.styles'

import { PokemonStats } from './index'

export const PokemonInfo = (props) => {
  const classes = useStyles()
  const [pokemonInfo, setPokemonInfo] = useState(null)

  useEffect(() => {
    if(pokemonInfo === null)
      axios.get(`https://pokeapi.co/api/v2/pokemon/${props.match.params.name}`).then(({data}) => {
        setPokemonInfo({...data})
      })
  })

  return(
    <Paper className={classes.wrapper}>
      {console.log(pokemonInfo)}
      {pokemonInfo
        ? (
          <>
            <img
              src={require(`./../../assets/sprites/sprites/pokemon/other/official-artwork/${pokemonInfo.id}.png`).default}
              alt={pokemonInfo.name}
            />
            <PokemonStats pokemon={pokemonInfo} />
          </>
        )
        : (
          <CircularProgress />
        )
      }
    </Paper>
  )
}