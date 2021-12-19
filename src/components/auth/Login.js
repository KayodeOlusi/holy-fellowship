import GoogleIcon from '@mui/icons-material/Google';

const Login = () => {
    return ( 
        <div className="login text-white">
            <div id="myCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner container">
                    <div className="carousel-item active">
                        <div className="texts">
                            <h1>Welcome To Holy-Fellowship</h1>
                            <h5> A platform for everyone to read God's word and enjoy his prescence. Discover people who are eager to know more about God and enjoy the moment.</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="texts">
                            <h1>What is this all about?</h1>
                            <h5 className = "lead"> We are determined to know more about God and his Kingdom. Join us on this exciting quest as we make it easy to connect with people around the world while reading God's word.</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="texts">
                            <h1>Enjoy God's Prescence</h1>
                            <h5 className = "lead">You cannot touch on the greatness of God without his glory manifesting. This is your time. Start Today. Enjoy with your friends and family. </h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sign-in container">
                <div className="btn btn-lg sign-in-btn">
                    Sign In With Google
                    <GoogleIcon />
                </div>
            </div>
        </div>
     );
}
 
export default Login;