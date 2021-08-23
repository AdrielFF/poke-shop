import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  wrapper: {
    padding: '1em',
    display: 'flex',
    fontFamily: 'Flexo-Caps, arial,sans-serif',
    margin: '0 auto',
    maxWidth: 1070,
    boxShadow: 'none',
  },
  infoWrapper: {
    flexGrow: '1',
    padding: '2em',
  },
  statsHeader: {
    display: 'flex',
    alignItems: 'center'
  },
  typesWrapper:{
    backgroundColor: '#cccccc',
    padding:'0 8px',
    marginRight: 5,
    borderRadius: 4,
  },
  types:{
    color: '#fff',
    '&.grass': {
      backgroundColor: '#98f1dc',
    },
    '&.fire': {
      backgroundColor: '#ef9999',
    },
    '&.water': {
      backgroundColor: '#92cafd',
    },
    '&.bug': {
      backgroundColor: '#b4d292',
    },
    '&.poison': {
      backgroundColor: '#dabce2',
    },
    '&.electric': {
      backgroundColor: '#f7eb9e',
    },
    '&.ground': {
      backgroundColor: '#e0d5a5',
    },
    '&.fighting': {
      backgroundColor: '#fbbc95',
    },
    '&.fairy': {
      backgroundColor: '#ffe5f7',
    },
  },
  price: {
    marginTop: '.5em',
  }
})