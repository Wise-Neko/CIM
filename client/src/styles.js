import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginBottom: 15,
    float: 'right',
  },
  heading: {
    color: 'rgba(0,0,0, 1)',
  },
  image: {
    marginLeft: '15px',
  },
}));