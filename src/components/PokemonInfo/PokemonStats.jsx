import React from 'react'

import { useStyles } from './PokemonInfo.styles'

import { convertedId } from './../../helpers/index'

import {
  Box,
  Typography
} from '@material-ui/core'

export const PokemonStats = (props) => {
  const classes = useStyles()

  return (
    <Box className={classes.infoWrapper}>
      <Box className={classes.statsHeader}>
        <Typography  variant="h2" component="span">{props.pokemon.name}</Typography>
        <Typography
          style={{
            color: '#919191',
            marginLeft: '1em',
          }}
          variant="h3"
          component="span"
        >
            Nº
            {convertedId(props.pokemon.id)}
        </Typography>
      </Box>
      <Box display="flex">
        {props.pokemon.types.map((t, index) => (
          <Box
            key={index}
            display="flex"
            className={`${classes.typesWrapper} ${classes.types} ${t.type.name}`}
          >
            <Box component="span" fontSize="2rem" >{t.type.name}</Box>
          </Box>
        ))}
      </Box>
      <Typography className={classes.price} variant="h2" >R$ {props.pokemon.price}</Typography>
    </Box>
  )
}