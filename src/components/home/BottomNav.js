import BookIcon from '@mui/icons-material/Book';
import HomeIcon from '@mui/icons-material/Home';
import MessageIcon from '@mui/icons-material/Message';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from "@mui/material";

const BotomNav = () => {
    return ( 
        <div className="navbar-bottom">
                <Button> <HomeIcon /> </Button>
                <Button> <BookIcon /> </Button>
                <Button> <MessageIcon /> </Button>
                <Button> <AccountCircleIcon /> </Button>
        </div>
     );
}
 
export default BotomNav;