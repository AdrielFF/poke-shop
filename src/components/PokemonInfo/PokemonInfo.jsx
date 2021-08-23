import React, { useState, useEffect } from 'react'

import {
  CircularProgress,
  Paper,
} from '@material-ui/core'

import axios from 'axios'

import { useStyles } from './PokemonInfo.styles'

import { PokemonStats } from './index'

import { useSelector } from 'react-redux'
import { selectAllPokemons } from '../../store/Pokemons/Pokemons.selector'

export const PokemonInfo = (props) => {
  const classes = useStyles()
  const [pokemonInfo, setPokemonInfo] = useState(null)
  const pokemonsPrices = useSelector(selectAllPokemons)

  useEffect(() => {
    if(pokemonInfo === null)
      axios.get(`https://pokeapi.co/api/v2/pokemon/${props.match.params.name}`).then(({data}) => {
        setPokemonInfo({
          ...data,
          price: pokemonsPrices.list.find(i => i.name === data.name).price
        })
      })
  })

  return(
    <Paper className={classes.wrapper}>
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