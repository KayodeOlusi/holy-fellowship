import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Avatar, Button, MenuItem, Menu } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';


const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const closeNav = () => {
        document.getElementById("mySidenav").style.width = "0";
    };
    const openNav = () => {
        document.getElementById("mySidenav").style.width = "250px";
    };

    return ( 
        <div className = "navbar">
            <div id="mySidenav" class="sidenav">
                <CloseIcon onClick = { closeNav } className = "closebtn" />
                <h4>Bible</h4>
                <h4>Sessions</h4>
                <h4>About</h4>
                <h4>Prayers</h4>
                <h4>Contact</h4>
            </div>
            <div className="drawer">
                <IconButton>
                    <MenuIcon onClick = { openNav } />
                </IconButton>
            </div>
            
            <div className = "profile-pic">
                <Button
                    id = "demo-positioned-button"
                    aria-controls = "demo-positioned-menu"
                    aria-haspopup = "true"
                    aria-expanded = { open ? 'true' : undefined }
                    onClick = { handleClick }
                >
                    <Avatar />
                </Button>
                <Menu
                    id = "demo-positioned-menu"
                    aria-labelledby = "demo-positioned-button"
                    anchorEl = { anchorEl }
                    open = { open }
                    onClose = { handleClose }
                    anchorOrigin = {{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    transformOrigin = {{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                    <MenuItem onClick = { handleClose }>Profile</MenuItem>
                    <MenuItem onClick = { handleClose }>Logout</MenuItem>
                </Menu>
            </div>
        </div>
     );
}
 
export default Navbar;