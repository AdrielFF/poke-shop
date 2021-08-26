import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  wrapper:{
    position: 'relative',
    width: '100%',
    height: '100%',
    maxWidth: 380,
    maxHeight: 1010,
    marginLeft: '1em',
  },
  shoppingCartFooter: {
    width:'100%',
    minHeight: 240,
    backgroundColor: '#fff',
    marginTop: '1em',
    borderRadius: '4px 4px 0 0'
  },
  shoppingCartBody: {
    width:'100%',
    height: 696,
    maxHeight: 696,
    backgroundColor: '#fff',
    overflowY: 'auto',
    overflowX: 'hidden',
  },
  shoppingCartHeader: {
    borderRadius: ' 0 0 4px 4px',
    marginBottom: '1em',
    width: '100%',
    zIndex: 1,
    minHeight: 74,
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    '& h4': {
      display: 'flex',
      alignItems: 'center',
    },
    '& svg': {
      marginLeft: '.6em',
    }
  },
  shoppingCartAmountControlWrapper: {
    position: 'absolute',
    left: '50%',
    bottom: '50%',
    transform: 'translate(-50%, 50%)',
    width: 400,
    height: 200,
    zIndex: 1,
    outline: 'none',
  }
})