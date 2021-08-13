import React, { useEffect } from 'react'

import { Paper } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

import axios from 'axios'

const useStyles = makeStyles({
  wrapper: {
    width: '100%',
    flexGrow: 1,
  }

})

const PokemonList = () => {
  const classes = useStyles()

  useEffect(() => {
    
    axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
    });

  },[])

  return (
    <Paper className={classes.wrapper}>

    </Paper>
  )
}

export default PokemonList