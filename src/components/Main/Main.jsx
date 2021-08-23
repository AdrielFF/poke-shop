import React, { useEffect } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import { Paper } from '@material-ui/core'

import PokemonList from './../PokemonList/index'
import { PokemonInfo } from './../PokemonInfo/index'
import { selectAllPokemons } from '../../store/Pokemons/Pokemons.selector'
import { mountPokemonList } from '../../store/Pokemons/Pokemons.actions'

import { useStyles } from './Main.styles'
import { useDispatch, useSelector } from 'react-redux'

import axios from 'axios'

export const Main = () => {
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

  return(
    <div className={classes.mainWrapper}>
      <Paper className={classes.paper} >
        <Router>
          <Switch>
            <Route exact path={process.env.PUBLIC_URL + '/'} component={PokemonList} />
            <Route path={process.env.PUBLIC_URL + '/pokemon/:name'} component={PokemonInfo} />
          </Switch>
        </Router>
      </Paper>
    </div>
  )
}