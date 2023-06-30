import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { createStyles, alpha, Theme, makeStyles } from '@material-ui/core/styles';
import { Link, useNavigate } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import { Box } from '@material-ui/core';
import './Navbar.css'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
import imagem from '../../../assets/Imagem/unsplash_OhKElOkQ3RE.svg'
import { DomainDisabled, Info, InfoOutlined } from '@material-ui/icons';
import useLocalStorage from 'react-use-localstorage';
import { toast } from 'react-toastify';
import { addToken } from '../../../store/tokens/actions';
import { useDispatch } from 'react-redux';

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

function Navbar() {
  const classes = useStyles, [token, setToken] = useLocalStorage('token');
  let navigate = useNavigate();
  const dispatch = useDispatch();
  
  function goLogout(){
    dispatch(addToken(''));
      toast.info('Usuário deslogado', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined   
       });
     navigate('/login')
  };

    
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className='fundonavbar'>
          <Box display="flex" justifyContent="start">
            <Link to="/home" className="text-decorator-none">
              <Box mx={3} className="cursor">
              <HomeIcon />  
              </Box>
            </Link>

            <Link to="" className="text-decorator-none">
              <Box mx={3} className="cursor">
              <AddIcon />  
              </Box>
            </Link>

            <Link to="/about" className="text-decorator-none">
              <Box mx={3} className="cursor">
              <InfoOutlined />  
              </Box>
            </Link>

            <Link to="/nowhere" className="text-decorator-none">
              <Box mx={3} className="cursor">
              <DomainDisabled />  
              </Box>
            </Link>
            <Link to="/posts" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    postagens
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/temas" className="text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                temas
                            </Typography>
                        </Box>
                        </Link>
                        <Link to="/formularioTema" className="text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                cadastrar tema
                            </Typography>
                        </Box>
                        </Link>
                      
                            <Box mx={1} className='cursor' onClick={goLogout}>
                                <Typography variant="h6" color="inherit">
                                    logout
                                </Typography>
                            </Box>
                        

            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Oque você quer achar?"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </Box>

          

          <Link to="/profile" className="text-decorator-none">
            <Box mx={1} className="cursor">
              <img src={imagem} alt="Foto de Perfil" />
            </Box>
          </Link>
          <Link to="/login" className="text-decorator-none">
            <Box mx={1} className="cursor">
              <ExitToAppIcon />
            </Box>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
} export default Navbar;
