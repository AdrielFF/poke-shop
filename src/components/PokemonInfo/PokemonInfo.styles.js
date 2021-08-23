import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  wrapper: {
    padding: '1em',
    display: 'flex',
    fontFamily: 'Flexo-Caps, arial,sans-serif',
  },
  infoWrapper: {
    flexGrow: '1',
    padding: '2em',
  },
  statsHeader: {
    display: 'flex',
    alignItems: 'center'
  }
})