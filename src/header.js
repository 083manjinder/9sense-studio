import logo from "./images/logo1.png";
import { Link,  scroller } from "react-scroll";

function Header() {
  const handleScrollAndPassProps = () => {
    scroller.scrollTo("about-section", {
      duration: 200,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  
  return (
    <div className="header">
      {/* <!-- Logo --> */}
      <div id="logo">
        <a style={{ cursor: "pointer" }} className="logo" href="/">
          <img src={logo} alt="Canvas Logo" />
        </a>
      </div>
      {/* <!-- logo end --> */}
      <nav className="navbar">
        <ul>
          <li>
          <Link
              to="about-section"
              smooth={true}
              duration={300}
              delay={0}
              style={{ cursor: "pointer", textDecoration: "none" }}
            >About me
            </Link>
          </li>
          <li>
          <Link
              to="work-section"
              smooth={true}
              duration={600}
              delay={0}
              style={{ cursor: "pointer", textDecoration: "none" }}
            >
              Works
            </Link>
          </li>
          <li>
          <Link
              to="footer"
              smooth={true}
              duration={800}
              delay={0}
              style={{ cursor: "pointer", textDecoration: "none" }}
            >
              Contact
            </Link>
          </li>

          <li>
            {" "}
            <a className="emailbtn" href="mailto: email@9sensestudio.in">
              Email Us
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
