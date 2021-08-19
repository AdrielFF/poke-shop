import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Box } from '@material-ui/core'

import axios from 'axios'

import Pokemon from '../Pokemon/index'
import { selectAllPokemons } from '../../store/Pokemons/Pokemons.selector'
import { mountPokemonList } from '../../store/Pokemons/Pokemons.actions'

import { useStyles } from './PokemonList.styles'

export const PokemonList = () => {
  const classes = useStyles()
  const pokemons = useSelector(selectAllPokemons)
  const dispatch = useDispatch()

  useEffect(() => {
    if (pokemons.isFilled === false) {
      axios.get('https://pokeapi.co/api/v2/pokemon?limit=60').then(res => {
        dispatch(mountPokemonList(res.data.results))
      })
    }
  })

  return (
    <Box className={classes.listWrapper}>
      <Box className={classes.list}>
          {pokemons.list.map(pokemon =>(
            <Pokemon key={pokemon.name} pokemon={pokemon} />
          ))}
      </Box>
    </Box>
  )
}