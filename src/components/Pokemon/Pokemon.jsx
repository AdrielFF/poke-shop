import React from 'react'

import {
  Paper,
  Typography,
  Box,
  CircularProgress
} from '@material-ui/core'

import axios from 'axios'

import {
  useState,
  useEffect
} from 'react'

import { useStyles } from './Pokemon.styles'

import { convertedId } from './../../helpers/index'

export const Pokemon = (props) => {
  const classes = useStyles()

  const [pokemon, setPokemon] = useState({
    id: null,
    types: [],
  })

  useEffect(() => {
    if(pokemon.id === null) {
      axios.get(props.pokemon.url).then(({ data }) => {
        setPokemon({
          ...pokemon,
          name: data.name,
          id: data.id,
          price: props.pokemon.price,
          types: data.types,
        })
      })
    }
  })

  return (
    <Box component="div" className={classes.pokemonWrapper} >
      {(pokemon.id && pokemon.types)
        ?  (
          <>
            <Paper className={`${classes.imageWrapper} ${classes.types} ${pokemon.types[0].type.name}`}>
              <img
                className={classes.image}
                src={require(`./../../assets/sprites/sprites/pokemon/other/official-artwork/${pokemon.id}.png`).default}
                alt={pokemon.name}
              />
            </Paper>

            <div className={classes.textWrapper}>
              <Typography
                style={{
                  color: '#919191',
                  fontSize:'.7em',
                  margin: '4px 0 1em 0',
                }}
                className={classes.text}
              >
                  Nº
                  {convertedId(pokemon.id)}
              </Typography>
              <Typography className={classes.text}>
                  {pokemon.name}
              </Typography>
              <Box display="flex">
                {pokemon.types.map((t, index) => (
                  <Box
                    display="flex"
                    className={`${classes.typesWrapper} ${classes.types} ${t.type.name} darken`}
                    key={index}
                  >
                    <Typography variant="caption">{t.type.name}</Typography>
                  </Box>
                ))}
              </Box>
              <Box fontFamily="Varela-Round" marginTop={1} >R$ {pokemon.price.replace(/\./g, ',')}</Box>
            </div>
          </>
        )
        : (<CircularProgress />)
      }
    </Box>
  )
}