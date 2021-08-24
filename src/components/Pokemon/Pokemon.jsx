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

import { useDispatch, useSelector } from 'react-redux'

import { useStyles } from './Pokemon.styles'

import { convertedId } from './../../helpers/index'
import { addPokemonToCart } from '../../store/Pokemons/Pokemons.actions'
import {
  selectAllCartItems,
  selectAllPokemons
} from '../../store/Pokemons/Pokemons.selector'

export const Pokemon = (props) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const cartList = useSelector(selectAllCartItems)
  const { list } = useSelector(selectAllPokemons)

  const [pokemonInfo, setPokemonInfo] = useState(null)

  const {
    pokemonId,
    isCartItem,
    pokemon
  } = props

  const fetchData = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(({ data }) => {
      setPokemonInfo({
        ...list.find(p => p.id === pokemonId),
        name: data.name,
        id: data.id,
        types: data.types,
      })
    })
  }

  useEffect(fetchData, [list, pokemonId])

  const handlePokemonClickEvent = () => {

    if(!isCartItem){
      dispatch(addPokemonToCart(pokemon))
    }else {

    }
  }

  return (
    <Box
      onClick={handlePokemonClickEvent}
      component="div"
      className={`${classes.pokemonWrapper} ${isCartItem ? classes.cartStyle : ''}`}
    >
      {(pokemonInfo !== null)
        ?  (
          <>
            <Paper
              className={`${isCartItem ? classes.cartImageWrapperStyle : ''} ${classes.imageWrapper} ${classes.types} ${pokemonInfo.types[0].type.name}`}
            >
              {isCartItem ? (
                <Typography variant="caption" className={classes.amountSpan} component="span" >{cartList[pokemonId]}</Typography>
              ): ''}
              <img
                className={classes.image}
                src={require(`./../../assets/sprites/sprites/pokemon/other/official-artwork/${pokemonId}.png`).default}
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
                {pokemonInfo.types.map((t, index) => (
                  <Box
                    display="flex"
                    className={`${classes.typesWrapper} ${classes.types} ${t.type.name}`}
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