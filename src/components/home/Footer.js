const Footer = () => {
  return (
    <div className="footer">
      <div className="newsletter container">
        <div className="row d-flex justify-content-center align-items-center newsletter-content text-center texts">
          <div className="col-sm-12 col-md-6 col-lg-6 mt-3">
            <h2>Subscribe To Our Newsletter</h2>
            <h4>Subcribe Us And Tell Us About Your Story</h4>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 text-center mt-3">
            <form>
              <input type="text" placeholder="Your Email" />
              <button
                className="btn mx-3"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
