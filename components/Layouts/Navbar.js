import React, { Component } from "react";
import Link from "../../utils/ActiveLink";
import { FaHeadset } from "react-icons/fa";
import Router from "next/router";
import Head from "next/head";

class Navbar extends Component {
  // Navbar
  _isMounted = false;
  state = {
    display: false,
    collapsed: true,
  };
  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  componentDidMount() {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);

    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init("871703863421050");
        ReactPixel.pageView();

        Router.events.on("routeChangeComplete", () => {
          ReactPixel.pageView();
        });
      });
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { collapsed } = this.state;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";

    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Flyweis Technology</title>
          <meta
            name="keywords"
            content="Flyweis Services Pvt.Ltd, Flyweis Services, Flyweis, Flyweis Group, Flyweis Technology, Flyweis Services Private Limited"
          />
          <meta
            name="description"
            content="Flyweis Technology Provides Complete IT Solutions to Businesses, Services Related to APP Development, Website Development, Artificial Intelligence, Cyber Secuirity, etc"
          />
        </Head>
        <div id="navbar" className="navbar-area fixed-top">
          <nav className="navbar navbar-expand-md navbar-light">
            <div className="container">
              <Link href="/">
                <a className="navbar-brand">
                  <img loading="lazy"   src="/images/flyweis_logo.png" alt="logo"  />
                </a>
              </Link>

              <button
                onClick={this.toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav m-auto">
                  <li className="nav-item">
                    <Link href="/" activeClassName="active">
                      <a className="nav-link">
                        Home
                        {/* <i className='bx bx-chevron-down'></i> */}
                      </a>
                    </Link>

                    {/* <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/" activeClassName="active">
                                                    <a className="nav-link">Home One</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/index-2" activeClassName="active">
                                                    <a className="nav-link">Home Two</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/index-3" activeClassName="active">
                                                    <a className="nav-link">Home Three</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/index-4" activeClassName="active">
                                                    <a className="nav-link">Home Four</a>
                                                </Link>
                                            </li>
                                            
                                            <li className="nav-item">
                                                <Link href="/index-5" activeClassName="active">
                                                    <a className="nav-link">Home Five</a>
                                                </Link>
                                            </li>
                                        </ul> */}
                  </li>

                  <li className="nav-item">
                    <Link href="/about-us">
                      <a className="nav-link">
                        About
                        {/* <i className='bx bx-chevron-down'></i> */}
                      </a>
                    </Link>

                    {/* <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/about-1" activeClassName="active">
                                                    <a className="nav-link">About Style One</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/about-2" activeClassName="active">
                                                    <a className="nav-link">About Style Two</a>
                                                </Link>
                                            </li>
                                        </ul> */}
                  </li>

                  <li className="nav-item">
                    <Link href="/services" activeClassName="active">
                      <a className="nav-link">
                        Services
                        {/* <i className='bx bx-chevron-down'></i> */}
                      </a>
                    </Link>

                    {/* <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/services" activeClassName="active">
                                                    <a className="nav-link">Services Style One</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/services-2" activeClassName="active">
                                                    <a className="nav-link">Services Style Two</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/services-3" activeClassName="active">
                                                    <a className="nav-link">Services Style Three</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/services-4" activeClassName="active">
                                                    <a className="nav-link">Services Style Four</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/service-details" activeClassName="active">
                                                    <a className="nav-link">Service Details</a>
                                                </Link>
                                            </li>
                                        </ul> */}
                  </li>

                  {/* <li className="nav-item"> */}
                  {/* <Link href="/">
                                            <a className="nav-link" onClick={e => e.preventDefault()}>
                                                Pages <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link> */}

                  {/* <ul className="dropdown-menu"> */}
                  {/* <li className="nav-item">
                                                <Link href="/pricing" activeClassName="active">
                                                    <a className="nav-link">Pricing</a>
                                                </Link>
                                            </li> */}

                  {/* <li className="nav-item">
                                                <Link href="/team" activeClassName="active">
                                                    <a className="nav-link">Team</a>
                                                </Link>
                                            </li> */}
                  {/* 
                                            <li className="nav-item">
                                                <Link href="/testimonials" activeClassName="active">
                                                    <a className="nav-link">Testimonials</a>
                                                </Link>
                                            </li> */}

                  {/* <li className="nav-item">
                                                <Link href="/faq" activeClassName="active">
                                                    <a className="nav-link">Faq</a>
                                                </Link>
                                            </li> */}

                  {/* <li className="nav-item">
                                                <Link href="/">
                                                    <a className="nav-link" onClick={e => e.preventDefault()}>
                                                        User <i className='bx bx-chevron-down'></i>
                                                    </a>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link href="/login" activeClassName="active">
                                                            <a className="nav-link">Login</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/sign-up" activeClassName="active">
                                                            <a className="nav-link">Sign Up</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li> */}

                  {/* <li className="nav-item">
                                                <Link href="/terms-conditions" activeClassName="active">
                                                    <a className="nav-link">Terms & Conditions</a>
                                                </Link>
                                            </li>  */}

                  {/* <li className="nav-item">
                                                <Link href="/privacy-policy" activeClassName="active">
                                                    <a className="nav-link">Privacy Policy</a>
                                                </Link>
                                            </li> */}

                  {/* <li className="nav-item">
                                                <Link href="/coming-soon" activeClassName="active">
                                                    <a className="nav-link">Coming Soon</a>
                                                </Link>
                                            </li> */}

                  {/* <li className="nav-item">
                                                <Link href="/login" activeClassName="active">
                                                    <a className="nav-link">Log In</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/sign-up" activeClassName="active">
                                                    <a className="nav-link">Sign Up</a>
                                                </Link>
                                            </li>  */}

                  {/* <li className="nav-item">
                                                <Link href="/404" activeClassName="active">
                                                    <a className="nav-link">404 error</a>
                                                </Link>
                                            </li> */}
                  {/* </ul>
                                    </li> */}

                  <li className="nav-item">
                    <Link href="/blog" activeClassName="active">
                      <a className="nav-link">
                        BLOG
                        {/* <i className='bx bx-chevron-down'></i> */}
                      </a>
                    </Link>

                    {/* <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/news-grid" activeClassName="active">
                                                    <a className="nav-link">News Grid</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/news-right-sidebar" activeClassName="active">
                                                    <a className="nav-link">News Right Sidebar</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/news-details" activeClassName="active">
                                                    <a className="nav-link">News Details</a>
                                                </Link>
                                            </li>
                                        </ul> */}
                  </li>

                  <li className="nav-item">
                    <Link href="/portfolio">
                      <a className="nav-link">
                        PORTFOLIO
                        {/* <i className='bx bx-chevron-down'></i> */}
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/contact">
                      <a className="nav-link">
                        Contact
                        {/* <i className='bx bx-chevron-down'></i> */}
                      </a>
                    </Link>

                    {/* <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/contact" activeClassName="active">
                                                    <a className="nav-link">Contact Style One</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/contact-2" activeClassName="active">
                                                    <a className="nav-link">Contact Style Two</a>
                                                </Link>
                                            </li>
                                        </ul> */}
                  </li>
                </ul>

                <div className="others-options">
                  <Link href="https://flyweis.technology/thankingyou?id=Information">
                    <a className="default-btn">SUPPORT</a>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </>
    );
  }
}

export default Navbar;
