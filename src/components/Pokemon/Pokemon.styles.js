import { makeStyles } from '@material-ui/core/styles'
import pokeballBackground from './../../assets/images/pokeball.png'

export const useStyles = makeStyles({
  pokemonWrapper: {
    width: 170,
    height: 272,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer',
    margin: '11px',
    userSelect: 'none',
    '&:hover': {
      '& img': {
        transform: 'scale(1)',
      }
    }
  },
  cartStyle: {
    flexDirection: 'row',
    width: '100%',
    height: 106,
    marginBottom: '2em',
    '& img': {
      height: '100%',
    }
  },
  imageWrapper: {
    width: 170,
    height: 170,
    backgroundColor: '#F2F2F2',
    boxShadow: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url(${pokeballBackground})`,
    backgroundSize: 'contain',
  },
  cartImageWrapperStyle: {
    position: 'relative',
    height: 106,
    width: 106,
  },
  image: {
    width: '100%',
    transform: 'scale(.9)',
    transition: 'all .1s ease-in-out',
    userDrag: 'none',
  },
  text: {
    fontWeight: 'bolder',
    textTransform: 'uppercase',
    fontFamily: 'Flexo-Caps, arial,sans-serif',
    textAlign: 'left'
  },
  textWrapper: {
    textAlign: 'left',
    width: '100%',
    maxWidth: 146,
    marginLeft: '2em',
  },
  typesWrapper:{
    backgroundColor: '#cccccc',
    padding:'0 8px',
    marginRight: 5,
    borderRadius: 4
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
  amountSpan: {
    backgroundColor: 'red',
    height: 16,
    minWidth: 16,
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 8,
    right: 8,
    zIndex: 1,
  }
})