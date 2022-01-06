import { Avatar, Button, MenuItem, Menu } from "@mui/material";
import { useEffect, useState } from 'react';
import BottomNav from "./BottomNav";
import { Link } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../../firebase";
import { signOut } from '@firebase/auth';

const Navbar = () => {
    const [show, setShow] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [user] = useAuthState(auth);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
      signOut(auth);
    };

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                setShow(true);
            }
            else {
                setShow(false)
            }
        })
        return () => {
            window.removeEventListener("scroll"); 
        }
    }, [])

    return ( 
        <>
            <div className = {`navbar ${show && "nav-scroll"}`} >
                <div className = "navbar-left">
                    <div className="nav-links d-flex justify-content-space-between align-items-center container">
                        <Link to= "/" className = "navbar-links"> Home </Link>
                        <Link to= "/" className = "navbar-links"> Bible </Link>
                        <Link to= "/sessions" className = "navbar-links"> Sessions </Link>
                        <Link to= "/" className = "navbar-links"> Contact </Link>
                    </div>
                </div>
            
                <div className = "profile-pic">
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
                        <MenuItem onClick = { handleClose }>Profile</MenuItem>
                        <MenuItem onClick = { handleClose }>Logout</MenuItem>
                    </Menu>
                </div>
            </div>

            <BottomNav />
        </>
     );
}
 
export default Navbar;