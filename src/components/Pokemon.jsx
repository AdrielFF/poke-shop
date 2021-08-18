import React from 'react'

import {
  Paper,
  Typography,
  Box,
  CircularProgress
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

import pokeballBackground from './../assets/images/pokeball.png'

import axios from 'axios'

import {
  useState,
  useEffect
} from 'react'

const useStyles = makeStyles({
  pokemonWrapper: {
    width: 170,
    height: 246,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer',
    margin: '11px',
    userSelect: 'none',
    '&:hover': {
      '& img': {
        transform: 'scale(1)',
      }
    }
  },
  imageWrapper: {
    width: 170,
    height: 170,
    backgroundColor: '#F2F2F2',
    boxShadow: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url(${pokeballBackground})`,
    backgroundSize: 'contain',
  },
  image: {
    width: '100%',
    transform: 'scale(.9)',
    transition: 'all .1s ease-in-out',
    userDrag: 'none',
  },
  text: {
    fontWeight: 'bolder',
    textTransform: 'uppercase',
    fontFamily: 'Flexo-Caps, arial,sans-serif',
    textAlign: 'left'
  },
  textWrapper: {
    textAlign: 'left',
    width: '100%',
    maxWidth: 146,
    marginLeft: '2em',
  },
  typesWrapper:{
    backgroundColor: '#cccccc',
    padding:'0 8px',
    marginRight: 5,
    borderRadius: 4
  },
  types:{
    color: '#fff',
    '&.grass': {
      backgroundColor: '#98f1dc',
    },
    '&.fire': {
      backgroundColor: '#ef9999',
    },
    '&.water': {
      backgroundColor: '#92cafd',
    },
    '&.bug': {
      backgroundColor: '#b4d292',
    },
    '&.poison': {
      backgroundColor: '#dabce2',
    },
    '&.electric': {
      backgroundColor: '#f7eb9e',
    },
    '&.ground': {
      backgroundColor: '#e0d5a5',
    },
    '&.fighting': {
      backgroundColor: '#fbbc95',
    },
    '&.fairy': {
      backgroundColor: '#ffe5f7',
    },
  }
})

const Pokemon = (props) => {
  const classes = useStyles()

  const [pokemon, setPokemon] = useState({
    id: null,
    imageUrl: '',
    types: [],
  })

  useEffect(() => {
    if(pokemon.imageUrl === '') {
      axios.get(props.apiUrl).then(({ data }) => {
        setPokemon({
          ...pokemon,
          imageUrl: data.sprites.front_default,
          name: data.name,
          id: data.id,
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
                src={require(`./../assets/sprites/sprites/pokemon/other/official-artwork/${pokemon.id}.png`).default}
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
                  {pokemon.id}
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
            </div>
          </>
        )
        : (<CircularProgress />)
      }
    </Box>
  )
}

export default Pokemon