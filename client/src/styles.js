import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
        fontWeight: 'bold',
      },
      grow: {
        flexGrow: 1,
      },
      customizeToolbar: {
          minHeight:100
      },
      customizeAppbar: {
        color: 'white'
    },
    customMenuButton: {
        color: '#2EA3F2',
    },
    customMenu : {
        minWidth:1000
    }
    
    }));