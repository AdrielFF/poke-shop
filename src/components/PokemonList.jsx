import React, { useEffect, useState } from 'react'

import { Box } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

import axios from 'axios'

import Pokemon from './Pokemon'

const useStyles = makeStyles({
  list: {
    width: '100%',
    flexGrow: 1,
    boxShadow: '12px 0 8px -13px rgba(0, 0, 0, 0.8), -12px 0 8px -13px rgba(0, 0, 0, 0.8)',
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    margin: '4em auto',
    maxWidth: 800,
    padding: '2em 0',
  }

})

const PokemonList = () => {
  const classes = useStyles()

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon').then(res => {
      setPokemons(res.data.results)
    })
  }, [])

  return (
    <Box className={classes.list}>
        {pokemons.map(p =>(
          <Pokemon key={p.name} url={p.url}/>
        ))}
    </Box>
  )
}

export default PokemonList