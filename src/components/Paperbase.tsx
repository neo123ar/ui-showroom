import React, {Context, Dispatch} from 'react';
import {
  createMuiTheme,
  createStyles,
  ThemeProvider,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Navigator from './Navigator';
import Content from './Content';
import Header from './Header';
import {RouteComponentProps} from "@reach/router";
import {
  authReducer,
  componenetReducer,
  ComponentActionType,
  initialAuthState,
  initialStateComponent
} from "../reducers/authReducer";
import componentContext, {Provider, StateComponentType} from "../state/component.context";
import Calendar from "./Calendar";
import {AppointmentModel} from "@devexpress/dx-react-scheduler";
import TableauContainer from "../containers/TableauContainer";
import Factory from '../factories/componentFactory'
import Notifier from './Notifier'



let theme = createMuiTheme({
  palette: {
    primary: {
      light: '#63ccff',
      main: '#009be5',
      dark: '#006db3',
    },
  },
  typography: {
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5,
    },
  },
  shape: {
    borderRadius: 8,
  },
  props: {
    MuiTab: {
      disableRipple: true,
    },
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
});

theme = {
  ...theme,
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: '#18202c',
      },
    },
    MuiButton: {
      label: {
        textTransform: 'none',
      },
      contained: {
        boxShadow: 'none',
        '&:active': {
          boxShadow: 'none',
        },
      },
    },
    MuiTabs: {
      root: {
        marginLeft: theme.spacing(1),
      },
      indicator: {
        height: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        backgroundColor: theme.palette.common.white,
      },
    },
    MuiTab: {
      root: {
        textTransform: 'none',
        margin: '0 16px',
        minWidth: 0,
        padding: 0,
        [theme.breakpoints.up('md')]: {
          padding: 0,
          minWidth: 0,
        },
      },
    },
    MuiIconButton: {
      root: {
        padding: theme.spacing(1),
      },
    },
    MuiTooltip: {
      tooltip: {
        borderRadius: 4,
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: '#404854',
      },
    },
    MuiListItemText: {
      primary: {
        fontWeight: theme.typography.fontWeightMedium,
      },
    },
    MuiListItemIcon: {
      root: {
        color: 'inherit',
        marginRight: 0,
        '& svg': {
          fontSize: 20,
        },
      },
    },
    MuiAvatar: {
      root: {
        width: 32,
        height: 32,
      },
    },
  },
};

const drawerWidth = 256;

const styles = createStyles({
  root: {
    display: 'flex',
    minHeight: '100vh',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  app: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    flex: 1,
    padding: theme.spacing(6, 4),
    background: '#eaeff1',
  },
  footer: {
    padding: theme.spacing(2),
    background: '#eaeff1',
  },
});

export interface PaperbaseProps extends WithStyles<typeof styles> {}

export interface NavigatorContext {
  component: string;
  setCurrentComponent: (component: string) => void;
}

const appointments: Array<AppointmentModel> = [{
  startDate: '2018-10-31T10:00',
  endDate: '2018-10-31T11:15',
  title: 'audience 1',
  type: 'private',
}, {
  startDate: '2018-10-31T07:30',
  endDate: '2018-10-31T09:00',
  title: 'audience 2',
  type: 'work',
}];

interface ComponentMapper {
  component: string,
  element: JSX.Element,
}
const componentUndefined: ComponentMapper ={component: 'Undefined', element: <div>Undefined</div>}
const componentMap: Array<ComponentMapper> =  [
  {component: 'Calendrier', element: <Calendar appointments={appointments}/>},
  {component: 'AutoComplete', element: <div>Autocomplte</div>},
  {component: 'Listing', element: <TableauContainer />},
  componentUndefined,
]
const  Paperbase: React.FC<RouteComponentProps & PaperbaseProps> = (props: PaperbaseProps) => {
  const { classes } = props;
  const [state, dispatch] = React.useContext<[StateComponentType, Dispatch<ComponentActionType>]>(componentContext);
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <nav className={classes.drawer}>
            <Navigator PaperProps={{ style: { width: drawerWidth } }} />
        </nav>
        <div className={classes.app}>
          <Header  />
          <main className={classes.main}>
            <Factory component={state.component} />
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default withStyles(styles)(Paperbase);
