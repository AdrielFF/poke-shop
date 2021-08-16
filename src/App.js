import React from 'react'

import Main from './components/Main'

import {
  makeStyles,
  useTheme
} from '@material-ui/core/styles'

const useStyles = makeStyles({
  app: {
    width: '100%',
    height: '100%',
    backgroundColor: (props) => props.palette.lightgrey,
  },
})

const App = () => {
  const theme = useTheme()
  const classes = useStyles(theme)

  return (
    <div className={classes.app}>
      <Main />
    </div>
  )
}

export default App