import BookIcon from '@mui/icons-material/Book';
import HomeIcon from '@mui/icons-material/Home';
import MessageIcon from '@mui/icons-material/Message';
import { Button, Avatar } from "@mui/material";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import { useNavigate } from "react-router";


const BotomNav = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    return ( 
        <div className="navbar-bottom">
                <Button onClick = {() => navigate("/")}> <HomeIcon /> </Button>
                <Button onClick = {() => navigate("/bible")}> <BookIcon /> </Button>
                <Button onClick = {() => navigate("/sessions")}> <MessageIcon /> </Button>
                <Button> <Avatar src = { user?.photoURL } /> </Button>
        </div>
     );
}
 
export default BotomNav;