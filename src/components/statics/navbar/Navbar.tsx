import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { createStyles, alpha, Theme, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { BottomNavigation, BottomNavigationAction, Box, FormControlLabel, FormGroup, Switch } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer.ts";
import { InfoOutlined } from '@material-ui/icons';
import { addToken } from "../../../store/tokens/actions.ts";
import CategoryOutlinedIcon from '@material-ui/icons/CategoryOutlined';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ReorderRoundedIcon from '@material-ui/icons/ReorderRounded';
import PlaylistAddCheckRoundedIcon from '@material-ui/icons/PlaylistAddCheckRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import { blue, red } from '@material-ui/core/colors';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded';
import { toast } from 'react-toastify';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      display: 'flex',
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }),
);
// BottomNavigation Style
const useStylesB = makeStyles({
  root: {
    width: 5,
    color: 'red',
  },
});

export default function Navbar() {

  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  const dispatch = useDispatch();
  function goLogout() {
    dispatch(addToken(''))
    toast.info('Tchau Tchau! Até logo', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    navigate('/login')
    setAuth(true)

  }

  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //BottomNavigation Rules

  const classesB = useStylesB();
  const [value, setValue] = React.useState('home');

  const handleChangeBottom = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };



  var navbarComponent;

  if (token != '') {

    navbarComponent = (
      <div className={classes.root}>
        <AppBar position="static" className="fundoappbar">
          <Toolbar>
            <Box className={"navigation"}>
              


                <Link to="/home" className="text-decorator-none">
                  <BottomNavigation
                    value={value}
                    onChange={handleChangeBottom}
                    className={"navigation"}
                  >
                    <BottomNavigationAction
                      label="Home"
                      value="home"
                      icon={<HomeRoundedIcon />}
                      className={"navigationBtnCor"}
                      
                    />
                  </BottomNavigation>
                </Link>

                <Link to="/posts" className="text-decorator-none">
                  <Box mx={1} className="cursor">
                    <BottomNavigation
                      value={value}
                      onChange={handleChangeBottom}
                      className={"navigation"}
                    >
                      <BottomNavigationAction
                        label="Posts"
                        value="post"
                        icon={<CategoryOutlinedIcon  />}
                        className={"navigationBtnCor"}
                       
                      />
                    </BottomNavigation>
                  </Box>
                </Link>

                <Link to="/temas" className="text-decorator-none">
                  <Box mx={0} className="cursor">
                    <BottomNavigation
                      value={value}
                      onChange={handleChangeBottom}
                      className={"navigation"}
                    >
                      <BottomNavigationAction
                        label="Temas"
                        value="temas"
                        icon={<ReorderRoundedIcon />}
                        className={"navigationBtnCor"}
                      />
                    </BottomNavigation>
                  </Box>
                </Link>

                <Link to="/formularioTema" className="text-decorator-none">
                  <Box mx={1} className="cursor">
                    <BottomNavigation
                      value={value}
                      onChange={handleChangeBottom}
                      className={"navigation"}
                    >
                      <BottomNavigationAction
                        label="+ Tema"
                        value="tema"
                        icon={<PlaylistAddCheckRoundedIcon />}
                        className={"navigationBtnCor"}
                      />
                    </BottomNavigation>
                  </Box>
                </Link>

                <Link to="/about" className="text-decorator-none">
                  <Box mx={1} className="cursor">
                    <BottomNavigation
                      value={value}
                      onChange={handleChangeBottom}
                      className={"navigation"}
                    >
                      <BottomNavigationAction
                        label="About"
                        value="about"
                        icon={<InfoOutlined />}
                        className={"navigationBtnCor"}
                      />
                    </BottomNavigation>
                  </Box>
                </Link>

                <Link to="/profile" className="text-decorator-none">
                  <Box mx={1} className="cursor">
                    <BottomNavigation
                      value={value}
                      onChange={handleChangeBottom}
                      className={"navigation"}
                    >
                      <BottomNavigationAction
                        label="Perfil"
                        value="perfil"
                        icon={<PersonOutlineRoundedIcon />}
                        className={"navigationBtnCor"}
                      />
                    </BottomNavigation>
                  </Box>
                </Link>


              

              <Box mx={1}>
                <div className="searchPosition">
                  <div className={classes.search}>
                    <div className={classes.searchIcon}>
                      <SearchIcon />
                    </div>
                    <InputBase
                      placeholder="Digite um tema..."
                      classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                      }}
                      inputProps={{ "aria-label": "search" }}
                    />
                  </div>
                </div>
              </Box>

              <Box mx={1}>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={auth}
                        onChange={handleChange}
                        onAnimationEnd={goLogout}
                        aria-label="login switch"
                      />
                    }
                    label={auth ? "Sair" : "Tchau👋"}
                  />
                </FormGroup>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

  return (
    <>
      {navbarComponent}
    </>
  );
}