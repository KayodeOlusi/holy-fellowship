import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const BottomPage = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
 
    return ( 
        <div className = "bottom-page container">
            <div className = "row d-flex justify-content-center align-items-center text-center" data-aos = "fade-up">
                <div className = "col-sm-12 col-md-12 col-lg-6 mt-3 p-3">
                    <img src = "https://images.pexels.com/photos/159935/pexels-photo-159935.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=300" alt = "" className= "bottom-page-image" />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 bottom-page-text mt-3 p-3">
                    <h2>WHEN YOU ARE HERE <br /> YOU ARE FAMILY </h2> <hr className = "mb-3" />
                    <h5 className = "lead">Our great passion and love for Christ compels us to introduce others to his love, help them to see and feel and learn what it is to be a follower of Christ</h5>
                </div>
            </div>

            <div className="row d-flex justify-content-center align-items-center text-center mt-3" data-aos = "zoom-out-up">
                <div className="col-sm-12 col-md-12 col-lg-6 mt-3 p-3">
                    <img src="https://images.pexels.com/photos/8383495/pexels-photo-8383495.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=300" alt="" className = "bottom-page-image" />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 mt-3 p-3 bottom-page-text">
                    <h2>SESSIONS</h2> <hr className = "mb-3" />
                    <h5 className = "lead" >Join our bible sessions everyday and connect with different people around the world</h5>
                </div>
            </div>
        </div>
     );
}
 
export default BottomPage;