import BookIcon from '@mui/icons-material/Book';
import HomeIcon from '@mui/icons-material/Home';
import MessageIcon from '@mui/icons-material/Message';
import { Button, Avatar, Menu, MenuItem } from "@mui/material";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import { useNavigate } from "react-router";
import { useState } from 'react';
import { signOut } from 'firebase/auth';


const BotomNav = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const logOut = () => {
        signOut(auth);
    };

    return ( 
        <div className="navbar-bottom">
                <Button onClick = {() => navigate("/")}> <HomeIcon /> </Button>
                <Button onClick = {() => navigate("/bible")}> <BookIcon /> </Button>
                <Button onClick = {() => navigate("/sessions")}> <MessageIcon /> </Button>
                <Button
                    id = "demo-positioned-button"
                    aria-controls = "demo-positioned-menu"
                    aria-haspopup = "true"
                    aria-expanded = { open ? 'true' : undefined }
                    onClick = { handleClick }
                >
                    <Avatar src = { user?.photoURL } />
                </Button>
                <Menu
                        id = "demo-positioned-menu"
                        aria-labelledby = "demo-positioned-button"
                        anchorEl = { anchorEl }
                        open = { open }
                        onClose = { handleClose }
                        anchorOrigin = {{
                            vertical: 'top',
                            horizontal: 'left'
                        }}
                        transformOrigin = {{
                            vertical: 'top',
                            horizontal: 'left'
                        }}
                    >
                        <MenuItem onClick = { logOut }>Logout</MenuItem>
                    </Menu>
        </div>
     );
}
 
export default BotomNav;