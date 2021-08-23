import React, { useState } from 'react'

import { useSelector } from 'react-redux'

import { Box } from '@material-ui/core'
import { Pagination } from '@material-ui/lab'

import Pokemon from '../Pokemon/index'
import { selectAllPokemons } from '../../store/Pokemons/Pokemons.selector'

import { useStyles } from './PokemonList.styles'

export const PokemonList = () => {
  const classes = useStyles()
  const pokemons = useSelector(selectAllPokemons)

  const [currentPage, setCurrentPage] = useState(1)

  const MAX_ITEM_PER_PAGE = 12

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
            <Pokemon key={pokemon.name} pokemon={pokemon} />
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