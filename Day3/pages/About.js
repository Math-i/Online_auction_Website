import { Breadcrumb } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <div className="Aboutus-Section" id="aboutustab">
      <div className="container">
        <div className="Breadcrumb">
          <Breadcrumb>
            <Breadcrumb.Item onClick={() => navigate("/")}>
              Home
            </Breadcrumb.Item>
            &#x3e;
            <Breadcrumb.Item active>About Us</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="Aboutus-Experience">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="Aboutus-Content">
                <h5>ABOUT US</h5>
                <h4>OVER 60</h4>
                <h3>YEARS EXPERIENCE</h3>
                <p>Innovation have made us leaders in auctions platform</p>
                <div className="Aboutus-Award">
                  <div className="Award-Content">
                    <div className="Award-Image">
                      <img src="images/award01.png" alt="about" />
                    </div>
                    <p>AWARD WINNING</p>
                  </div>
                  <div className="Award-Content">
                    <div className="Award-Image">
                      <img src="images/award02.png" alt="about" />
                    </div>
                    <p>AFFILIATIONS</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="Aboutus-Image">
                <img src="images/aboutusleft.png" alt="about_image" />
              </div>
            </div>
          </div>
        </div>
        <div className="ItemAuction">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="Item-AuctionContent">
                <h4>62M</h4>
                <p>ITEMS AUCTIONED</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="Item-AuctionContent">
                <h4>$887M</h4>
                <p>ITEMS AUCTIONED</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="Item-AuctionContent">
                <h4>62M</h4>
                <p>ITEMS AUCTIONED</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="Item-AuctionContent">
                <h4>05K</h4>
                <p>AUCTION EXPERTS</p>
              </div>
            </div>
          </div>
        </div>
        <div className="StartSelling">
          <div className="StartSelling-Image">
            <img src="images/bgtwo.png" alt="background-image" />
          </div>
          <div className="StartSelling-content">
            <h4>Register For Free & Start Selling Now!</h4>
            <p>From cars to diamonds to iPhones, we have it all.</p>
            <a href="#" className="btn Registerbtn" role="button">
              Sell Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
