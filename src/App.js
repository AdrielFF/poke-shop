import React from 'react'

import Main from './components/Main/index'

import { Provider } from 'react-redux'

import {store, persistedStore} from './store/store'

import { PersistGate } from 'redux-persist/integration/react'

import {
  makeStyles,
  useTheme
} from '@material-ui/core/styles'

const useStyles = makeStyles({
  app: {
    width: '100%',
    height: '100%',
    minHeight: '100vh',
    backgroundColor: (props) => props.palette.lightgrey,
  },
})

const App = () => {
  const theme = useTheme()
  const classes = useStyles(theme)

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <div className={classes.app}>
          <Main />
        </div>
      </PersistGate>
    </Provider>
  )
}

export default App