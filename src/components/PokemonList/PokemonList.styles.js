import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  list: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap',
  },
  listWrapper: {
    boxShadow: '12px 0 8px -13px rgba(0, 0, 0, 0.8), -12px 0 8px -13px rgba(0, 0, 0, 0.8)',
    margin: '4em auto',
    maxWidth: 768,
    width: '100%',
    padding: '2em 18px',
  },
  paginationWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2em',
    '& button': {
      fontFamily: 'Flexo-Caps, arial,sans-serif',
    }
  },
  link: {
    textDecoration: 'none',
    color:'unset'
  }
})