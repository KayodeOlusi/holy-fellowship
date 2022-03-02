import { Facebook, GitHub, LinkedIn, Twitter } from "@mui/icons-material";

const Bottom = () => {
    const openLink = (link) => {
        window.open(link, '_blank').focus();
    }

    return ( 
        <div className="bottom-footer">
            <div className="row container text-center">
                <div className="col-sm-12 col-md-4 col-lg-4 mt-3">holy-fellowship</div>
                <div className="col-sm-12 col-md-4 col-lg-4 mt-3">&#169; Kayode Oluwalusi</div>
                <div className="col-sm-12 col-md-4 col-lg-4 mt-3 the-icons">
                    <GitHub onClick = {() => openLink("https://github.com/KayodeOlusi")} />
                    <Twitter onClick = {() => openLink("https://twitter.com/kayode_olusi")} />
                    <LinkedIn onClick = {() => openLink("https://www.linkedin.com/in/kayode-oluwalusi-59a5691a9/")} />
                    <Facebook onClick = {() => openLink("https://web.facebook.com/kayode.oluwalusi/")} />
                </div>
            </div>
        </div>
     );
}
 
export default Bottom;