import { MdEmail } from "react-icons/md";
import { GrFacebook } from "react-icons/gr";
import { BsFillTelephoneFill } from "react-icons/bs";

function Footer() {
  return (
    <div className="container-fluid footer">
      <footer class="py-2  navbar-expand-lg">
        <div class="container">
          <p class="text-center text-dark fw-bold m-0 ">
            Copyright © DevTech Solutions 2022
          </p>
        </div>
        <div className="d-flex justify-content-around footer-item">
          <div className="d-flex m2">
            <div>
              <MdEmail className=" footer-icon" />
            </div>
            <div>
              <p className="footer-content">devtech@gmail.com</p>
            </div>
          </div>
          <div className="d-flex m-2">
            <div>
              <GrFacebook className=" footer-icon" />
            </div>
            <div>
              <p className="footer-content">facebook</p>
            </div>
          </div>
          <div className="d-flex m-2">
            <div>
              <BsFillTelephoneFill className=" footer-icon" />
            </div>
            <div>
              <p className="footer-content">+63998234566</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
