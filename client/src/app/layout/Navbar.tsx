import { DarkMode, LightMode, ShoppingCart } from '@mui/icons-material';
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  LinearProgress,
  List,
  ListItem,
  Toolbar,
  Typography,
} from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/store';
import { setDarkMode } from './uiSlice';
import { useFetchBasketQuery } from '../../features/basket/basketApi';

const midLinks = [
  { title: 'catalog', path: '/catalog' },
  { title: 'about', path: '/about' },
  { title: 'contact', path: '/contact' },
];

const rightLinks = [
  { title: 'login', path: '/login' },
  { title: 'register', path: '/register' },
];

const navStyles = {
  color: 'inherit',
  typography: 'h6',
  textDecoration: 'none',
  '&:hover': {
    color: 'grey.500',
  },
  '&.active': {
    color: '#BAECF9',
  },
};

export default function NavBar() {
  const { isLoading, darkMode } = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();

  const {data: basket} = useFetchBasketQuery();
  const itemCount = basket?.items.reduce((sum, item) => sum + item.quantity, 0) || 0

  return (
    <AppBar position="fixed">
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box sx={{ alignItems: 'center' }}>
          <Typography component={NavLink} sx={navStyles} to="/" variant="h6">
            ReStore
          </Typography>
          <IconButton onClick={() => dispatch(setDarkMode())}>
            {darkMode ? (
              <DarkMode sx={{ color: 'yellow' }} />
            ) : (
              <LightMode sx={{ color: 'yellow' }} />
            )}
          </IconButton>
        </Box>

        <Box>
          <List sx={{ display: 'flex', gap: 8 }}>
            {midLinks.map(({ title, path }) => (
              <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
                {title.toUpperCase()}
              </ListItem>
            ))}
          </List>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton component={Link} to="/basket" size="large">
            <Badge badgeContent={itemCount} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
          <List sx={{ display: 'flex' }}>
            {rightLinks.map(({ title, path }) => (
              <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
                {title.toUpperCase()}
              </ListItem>
            ))}
          </List>
        </Box>
      </Toolbar>
      {isLoading && (
        <Box sx={{ width: '100%' }}>
          <LinearProgress color="secondary" />
        </Box>
      )}
    </AppBar>
  );
}
