import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

import "../css/Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer">
          <div>
            <ul className="foot-nav">
              <li>
                <Link to="/#">Home</Link>
              </li>
              <li>
                {" "}
                <Link to="/#">About</Link>
              </li>
              <li>
                {" "}
                <Link to="/#">Contact</Link>
              </li>
              <li>
                {" "}
                <Link to="/#">Cookbook</Link>
              </li>
            </ul>
            <div>
              <ul className="social-foot">
                <li>
                  <FaFacebook />
                </li>
                <li>
                  <RiInstagramFill />
                </li>
                <li>
                  <FaYoutube />
                </li>
                <li>
                  <AiFillTwitterCircle />
                </li>
              </ul>
            </div>
          </div>

          <div className="copyright">Copyright 2023 | Kokboken & co</div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
