import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import { Paper } from '@material-ui/core'

const useStyles = makeStyles({
  filtersWrapper: {
    height: 80,
    backgroundColor: '#fff',
    marginBottom: '4em',
  }
})

const Filters = () => {
  const classes = useStyles()

  return(
    <Paper className={classes.filtersWrapper}>

    </Paper>
  )
}

export default Filters