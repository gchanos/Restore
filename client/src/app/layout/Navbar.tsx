import { DarkMode, LightMode, ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, List, ListItem, Toolbar, Typography } from "@mui/material"
import { NavLink } from "react-router-dom";

const midLinks = [
    {title: 'catalog', path: '/catalog'},
    {title: 'about', path: '/about'},
    {title: 'contact', path: '/contact'},
]

const rightLinks = [
    {title: 'login', path: '/login'},
    {title: 'register', path: '/register'},
]

const navStyles = {
    color: 'inherit', 
    typography: 'h6',
    textDecoration: 'none',
    '&:hover': {
        color: 'grey.500'
    },
    '&.active': {
        color: '#BAECF9'
    }
}

type Props = { 
    darkMode: boolean
    toggleDarkMode: () => void
}

export default function NavBar ({darkMode, toggleDarkMode}: Props) {
    return (
        <AppBar position="fixed">
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Box sx={{alignItems: 'center'}}>
                    <Typography component={NavLink} sx={navStyles} to="/" variant="h6">
                        ReStore
                    </Typography>
                    <IconButton onClick={toggleDarkMode}>
                        {darkMode ? <DarkMode sx={{color: 'yellow'}} />: <LightMode sx={{color: 'yellow'}}/>}
                    </IconButton>
                </Box>


                <Box>    
                    <List sx={{display: 'flex', gap: 8}}>
                        {midLinks.map(({title, path}) => (
                            <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={navStyles}
                            >
                                {title.toUpperCase()}
                            </ListItem>
                        ))}
                    </List>
                </Box>
                    
                <Box sx={{display: 'flex', alignItems: 'center'}}>
                    <IconButton size="large">
                        <Badge badgeContent='4' color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                    <List sx={{display: 'flex'}}>
                        {rightLinks.map(({title, path}) => (
                            <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={navStyles}
                            >
                                {title.toUpperCase()}
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Toolbar>
        </AppBar>
    )
}