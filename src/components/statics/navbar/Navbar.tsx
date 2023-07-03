import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { createStyles, alpha, Theme, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Box, FormControlLabel, FormGroup, Switch } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {TokenState} from "../../../store/tokens/tokensReducer.ts";
import { InfoOutlined } from '@material-ui/icons';
import {addToken} from "../../../store/tokens/actions.ts";



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

export default function Navbar() {

  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
      (state) => state.tokens
  );
  const dispatch = useDispatch();
  function goLogout() {
    dispatch(addToken(''))
    alert("Tchau, até logo mais")
    navigate('/login')
    
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

  var navbarComponent ;

  if (token != ''){

    navbarComponent = (
      <div className={classes.root}>
        <AppBar position="static" className="fundoappbar">
          <Toolbar>
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    checked={auth}
                    onChange={handleChange}
                    aria-label="login switch"
                  />
                }
                label={auth ? "Sair" : "tchau!!"}
              />
            </FormGroup>

            <Box onClick={goLogout} mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                logout
              </Typography>
            </Box>

            <Box display="flex" justifyContent="start">
              <Link to="/home" className="text-decorator-none">
                <Box mx={1} className="cursor">
                  <Typography variant="h6" color="inherit">
                    home
                  </Typography>
                </Box>
              </Link>

              <Link to="/posts" className="text-decorator-none">
                <Box mx={1} className="cursor">
                  <Typography variant="h6" color="inherit">
                    postagens
                  </Typography>
                </Box>
              </Link>

              <Link to="/temas" className="text-decorator-none">
                <Box mx={1} className="cursor">
                  <Typography variant="h6" color="inherit">
                    temas
                  </Typography>
                </Box>
              </Link>

              <Link to="/formularioTema" className="text-decorator-none">
                <Box mx={1} className="cursor">
                  <Typography variant="h6" color="inherit">
                    cadastrar tema
                  </Typography>
                </Box>
              </Link>

              

              <Link to="/about" className="text-decorator-none">
                <Box mx={3} className="cursor">
                  <Typography className={classes.title}variant="h6" noWrap  color="inherit"  >
                    info
                  </Typography>
                </Box>
              </Link>

              <Link to="/profile" className="text-decorator-none">
                <Box mx={1} className="cursor">
                  <Typography variant="h6" color="inherit">
                    profile
                  </Typography>
                </Box>
              </Link>
              
            </Box>
            <div className="searchPosition">
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
            </div>
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