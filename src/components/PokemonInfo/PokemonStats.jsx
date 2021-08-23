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
    </Box>
  )
}