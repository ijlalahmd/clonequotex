import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import SchoolIcon from '@mui/icons-material/School';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import WifiTetheringOutlinedIcon from '@mui/icons-material/WifiTetheringOutlined';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
//import { Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Logo from "../../Asset/Images/Logo/logo1.png"
import LogoText from "../../Asset/Images/Logo/logoText.png"

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(9)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function MiniDrawer() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const navigate = useNavigate();
    const styles = theme => ({
        icon: {
          color: 'white',
        }
      });
    const itemsList = [
        {
            text: "Help",
            icon: <LiveHelpIcon />,
            onClick:(() => navigate('/Deposit'))       
         },
        {
            text: "Trade",
            icon: <SignalCellularAltIcon />,

        },
        {
            text: "Demo",
            icon: <SchoolIcon/>,
        },
        {
            text: "Account",
            icon: <AccountCircleIcon/>,
        },
        {
            text: "Analytics",
            icon: <DonutLargeIcon/>,
        },
        {
            text: "Top",
            icon: <LeaderboardIcon/>
        },
        {
            text: "Signals",
            icon: <WifiTetheringOutlinedIcon/>,
        },
        {
            text: "Market",
            icon: <MonetizationOnIcon/>,
        },
    ];

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} elevation={0}  sx={{ backgroundColor: '#1c1f2d' }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: '36px',
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                       <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        edge="start"
                     >
                        <img src={Logo} alt="Logo i" height={50} width={50} />
                        
                    <Typography variant="h6" noWrap component="div"  sx={{
                            marginLeft: '16px',
                        }}>
                     
                       FX OPTION.IO
                    </Typography>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent"  open={open}  PaperProps={{
    sx: {
      backgroundColor: "#1c1f2d",
      border:"none"
    }
  }}>
                <DrawerHeader >
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                
                <List >
                    {itemsList.map((item, index) => {
                        const { text, icon, onClick } = item;
                        return (
                            <ListItem button key={text} onClick={onClick}>
                                {icon && <ListItemIcon style={{color:"white"}}>{icon}</ListItemIcon>}
                                <ListItemText primary={text} />
                                </ListItem>
                                
                                );
                        })};
                            </List>
        {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <LiveHelpIcon /> : <SignalCellularAltIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3,color:"white" }}>
                <DrawerHeader />

            </Box>
        </Box>
    );
}
