import BookIcon from '@mui/icons-material/Book';
import HomeIcon from '@mui/icons-material/Home';
import MessageIcon from '@mui/icons-material/Message';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from "@mui/material";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';

const BotomNav = () => {
    const [user] = useAuthState(auth);

    return ( 
        <div className="navbar-bottom">
                <Button> <HomeIcon /> </Button>
                <Button> <BookIcon /> </Button>
                <Button> <MessageIcon /> </Button>
                <Button> <AccountCircleIcon src = { user.photoURL } /> </Button>
        </div>
     );
}
 
export default BotomNav;