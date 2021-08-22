import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import { Paper } from '@material-ui/core'

import PokemonList from './../PokemonList/index'
import PokemonInfo from './../PokemonInfo/index'

import { useStyles } from './Main.styles'

export const Main = () => {
  const classes = useStyles()

  return(
    <div className={classes.mainWrapper}>
      <Paper className={classes.paper} >
        <Router>
          <Switch>
            <Route exact path="/" component={PokemonList} />
            <Route path="/pokemon/:name" component={PokemonInfo} />
          </Switch>
        </Router>
      </Paper>
    </div>
  )
}