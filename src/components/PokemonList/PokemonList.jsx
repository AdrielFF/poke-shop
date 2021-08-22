import React, { useEffect, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { Box } from '@material-ui/core'
import { Pagination } from '@material-ui/lab'

import axios from 'axios'

import Pokemon from '../Pokemon/index'
import { selectAllPokemons } from '../../store/Pokemons/Pokemons.selector'
import { mountPokemonList } from '../../store/Pokemons/Pokemons.actions'

import {
  Link
  } from 'react-router-dom'

import { useStyles } from './PokemonList.styles'

export const PokemonList = () => {
  const classes = useStyles()
  const pokemons = useSelector(selectAllPokemons)
  const dispatch = useDispatch()

  const [currentPage, setCurrentPage] = useState(1)

  const MAX_ITEM_PER_PAGE = 12

  useEffect(() => {
    if (pokemons.isFilled === false) {
      axios.get('https://pokeapi.co/api/v2/pokemon?limit=60').then(res => {
        dispatch(mountPokemonList(res.data.results))
      })
    }
  })

  const handlePageChange = (e, page) => {
    setCurrentPage(page)
  }

  const paginatedPokemons = () => {
    const lastPageItem = currentPage * MAX_ITEM_PER_PAGE
    const firstPageItemIndex = lastPageItem - MAX_ITEM_PER_PAGE
    return pokemons.list.slice(firstPageItemIndex, lastPageItem)
  }

  const maxPages = () => (pokemons.list.length / MAX_ITEM_PER_PAGE)

  return (
    <Box className={classes.listWrapper}>
      <Box className={classes.list}>
          {paginatedPokemons().map(pokemon =>(
            <Link
              key={pokemon.name}
              className={classes.link}
              to={`/poke-shop/pokemon/${pokemon.name}`}
              >
              <Pokemon pokemon={pokemon} />
            </Link>
          ))}
      </Box>
      <Pagination
        className={classes.paginationWrapper}
        count={maxPages()}
        page={currentPage}
        onChange={handlePageChange}
      />
    </Box>
  )
}