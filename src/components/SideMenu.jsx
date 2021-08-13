import React from 'react'

import { Drawer } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  drawer: {
    height: '100%',
    backgroundColor: '#fff',
    width: 240,
  },
  logo: {
    margin: '0 auto',
    display: 'block',

  },
  drawerPaper: {
    width: 240,
    padding: '6em 0',
  }
})

const SideMenu = () => {
  const classes = useStyles()

  return (
    <Drawer 
      className={classes.drawer} 
      variant="permanent"
      classes={{
        paper: classes.drawerPaper
      }}
    >
    </Drawer>
  )
}

export default SideMenu