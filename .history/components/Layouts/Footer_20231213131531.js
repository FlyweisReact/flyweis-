/** @format */

import React, { useEffect } from "react";
import Link from "next/link";
import {
  Button,
  Modal,
  ModalFooter,
  ModalHeader,
  ModalBody,
  Table,
  Container,
  Card,
  Row,
  CardTitle,
  CardBody,
  Col,
} from "reactstrap";
const Footer = () => {
  const [modal, setModal] = React.useState(false);
  const [modalTwo, setModalTwo] = React.useState(false);
  const [modalThree, setModalThree] = React.useState(false);
  const toggle = () => setModal(!modal);
  const toggleTwo = () => setModalTwo(!modalTwo);
  const toggleThree = () => setModalThree(!modalThree);

  const color = {
    color: "white",
    fontWeight: "700",
  };
  const spaceCanada = {
    color: "white",
    fontWeight: "700",
    marginBottom: "20px",
  };

  const paraStyle = {
    wordWrap: "breakWord",
  };

  const cardStyle = {
    width: "12rem",
    minHeight: "10rem",
  };

  const textStyle = {
    fontSize: "xx-small !important",
  };

  let currentYear = new Date().getFullYear();

  return (
    <div>
      <footer className="footer-top-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-widget">
                <a href="/" className="logo">
                  <img
                    loading="lazy"
                    src="/images/flyweis_logo.png"
                    alt="Image"
                  />
                </a>

                <p>
                  In the span of 5 years Flyweis Technology has successfully
                  helped a number of Businesses to grow from the bottom and
                  helped them to achieve their goals. Many Businesses has shown
                  trust on Flyweis Technology either for generating Leads,
                  Website or any kind of a customised software which helped them
                  to grow and sustain competitively in the market.
                </p>

                <ul className="social-icon">
                  <li>
                    <a
                      href="https://www.facebook.com/Flyweis.Technology/?ref=py_c"
                      target="_blank"
                    >
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/FlyweisT" target="_blank">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/flyweis.technology/?hl=en"
                      target="_blank"
                    >
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-widget">
                <h3>Services</h3>
                <ul>
                  <li>
                    <Link href="/services/crm">
                      <a>
                        <i className="right-icon bx bx-chevrons-right"></i>
                        CRM
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/chatsoftware">
                      <a>
                        <i className="right-icon bx bx-chevrons-right"></i>
                        Chat Software
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/customizedsoftware">
                      <a>
                        <i className="right-icon bx bx-chevrons-right"></i>
                        Customized Software
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/websitedevelopment">
                      <a>
                        <i className="right-icon bx bx-chevrons-right"></i>
                        Website Development
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/appdevelopment">
                      <a>
                        <i className="right-icon bx bx-chevrons-right"></i>
                        App Development
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/orm">
                      <a>
                        <i className="right-icon bx bx-chevrons-right"></i>
                        Online Reputation Management (ORM)
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/services/seo">
                      <a>
                        <i className="right-icon bx bx-chevrons-right"></i>
                        Local SEO
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/leadgeneration">
                      <a>
                        <i className="right-icon bx bx-chevrons-right"></i>
                        Lead Generation
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/socialmediamarketing">
                      <a>
                        <i className="right-icon bx bx-chevrons-right"></i>
                        Social Media Marketing
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-widget">
                <h3>Important Links</h3>

                <ul>
                  <li>
                    <Link href="/about-us">
                      <a>
                        <i className="right-icon bx bx-chevrons-right"></i>
                        About Us
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services">
                      <a>
                        <i className="right-icon bx bx-chevrons-right"></i>
                        Services
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/portfolio">
                      <a>
                        <i className="right-icon bx bx-chevrons-right"></i>
                        Portfolio
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq">
                      <a>
                        <i className="right-icon bx bx-chevrons-right"></i>
                        FAQ
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>
                        <i className="right-icon bx bx-chevrons-right"></i>
                        Support
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      <a>
                        <i className="right-icon bx bx-chevrons-right"></i>
                        Blog
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/privacy-policy">
                      <a>
                        <i className="right-icon bx bx-chevrons-right"></i>
                        Privacy Policy
                      </a>
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="/pricing">
                      <a>
                        <i className="right-icon bx bx-chevrons-right"></i>
                        Pricing
                      </a>
                    </Link>
                  </li> */}

                  <li>
                    <Link href="/terms-conditions">
                      <a>
                        <i className="right-icon bx bx-chevrons-right"></i>
                        Terms & Conditions
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/payment">
                      <a>
                        <i className="right-icon bx bx-chevrons-right"></i>
                        Pay Now
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-widget">
                <h3>Information</h3>

                <ul className="information ">
                  <li className="address information_color infoContent">
                    <i className="flaticon-call"></i>
                    <span className="information_color">Phone</span>
                    <span className="d-flex">
                      <img
                        loading="lazy"
                        src="/images/india.png"
                        alt="Image"
                        style={{
                          height: "22px",
                          width: "27px",
                          marginRight: "10px",
                          marginTop: "8px",
                        }}
                      />
                      <a
                        href="tel:+91 95992 93491"
                        style={{ color: "#1dd3f8" }}
                      >
                        {/* +91 9811124632 */}
                        +91 95992 93491
                      </a>
                    </span>

                    {/* <span className="d-flex">
                      <img
                        loading="lazy"
                        src="/images/usa.png"
                        alt="Image"
                        style={{
                          height: "22px",
                          width: "27px",
                          marginRight: "10px",
                          marginTop: "8px",
                        }}
                      />
                      <a href=" tel:+18562132132" style={{ color: "#1dd3f8" }}>
                        +18562132132
                      </a>
                    </span> */}

                    <span className="d-flex" style={{ paddingLeft: "40px" }}>
                      {/* <img
                        loading="lazy"
                        src="/images/Canadian_Flag.png"
                        alt="Image"
                        style={{
                          height: "22px",
                          width: "27px",
                          marginRight: "10px",
                          marginTop: "8px",
                        }}
                      /> */}
                      <a
                        href=" tel:+17092605591"
                        style={{ color: "#1dd3f8", alignSelf: "flex-end" }}
                      >
                        011204340655
                      </a>
                    </span>
                  </li>

                  <li className="address emailContent">
                    <i className="flaticon-envelope "></i>
                    <span>Email</span>
                    info@flyweis.technology
                    <br />
                    support@flyweis.technology
                  </li>

                  <li className="address addressText">
                    <i className="flaticon-maps-and-flags"></i>

                    <span>Address</span>
                  </li>

                  <div className="allhere">
                    <div onClick={toggle} className="country  ">
                      <Container>
                        <Row>
                          <Col>
                            <span className="d-flex" style={color}>
                              <img
                                loading="lazy"
                                src="/images/india.png"
                                alt="Image"
                                style={{
                                  height: "22px",
                                  width: "27px",
                                  marginRight: "10px",
                                  marginTop: "6px",
                                }}
                              />
                              <span style={{ color: "orange" }}>I</span>
                              <span style={{ color: "white" }}>N</span>
                              <span style={{ color: "green" }}>D</span>
                              <span style={{ color: "orange" }}>I</span>
                              <span style={{ color: "white" }}>A</span>
                            </span>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <span
                              className="spanWeight"
                              style={{ color: "#1DD3F8" }}
                            >
                              Click Here
                            </span>
                          </Col>
                        </Row>
                      </Container>
                    </div>

                    {/* <div onClick={toggleTwo} className="country">
                      <Container>
                        <Row>
                          <Col>
                            <span style={color} className="d-flex mt-2">
                              <img
                                loading="lazy"
                                src="/images/usa.png"
                                alt="Image"
                                style={{
                                  height: "22px",
                                  width: "27px",
                                  marginRight: "10px",
                                  marginTop: "5px",
                                }}
                              />
                              <span style={{ color: "blue" }}>U</span>
                              <span style={{ color: "red" }}> S</span>
                              <span style={{ color: "white" }}>A</span>
                            </span>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <span
                              className="spanWeight"
                              style={{ color: "#1DD3F8" }}
                            >
                              Click Here
                            </span>
                          </Col>
                        </Row>
                      </Container>
                    </div> */}
                    {/* <div onClick={toggleThree} className="pointer">
                      <Container>
                        <Row>
                          <Col>
                            <span
                              onClick={toggleThree}
                              style={color}
                              className="d-flex btn"
                            >
                              <img
                                loading="lazy"
                                src="/images/Canadian_Flag.png"
                                alt="Image"
                                style={{
                                  height: "22px",
                                  width: "27px",
                                  marginRight: "10px",
                                  marginTop: "5px",
                                }}
                              />
                              <span style={{ color: "red" }}>C</span>
                              <span>A</span>
                              <span style={{ color: "red" }}>N</span>
                              <span>A</span>
                              <span style={{ color: "red" }}>D</span>
                              <span>A</span>
                            </span>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <span
                              className="spanWeight"
                              style={{ color: "#1DD3F8", marginLeft: "8px" }}
                            >
                              Click Here
                            </span>{" "}
                          </Col>
                        </Row>
                      </Container>
                    </div> */}
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Modal isOpen={modal} toggle={toggle} centered className="modal">
          <Card>
            <h4 className="text-center mt-1">India</h4>
            <ModalBody>
              <Container>
                <Row className="mt-1">
                  <div className="col d-flex justify-content-center">
                    <Card style={cardStyle} className="indiaAddressCard">
                      <h6 className="text-center">Delhi-</h6>
                      <p className="text-center">
                        A-66, Third floor Sector-63, Noida - 201301
                      </p>
                    </Card>
                  </div>
                </Row>
                <Row className="mt-3">
                  <div className="col d-flex justify-content-center">
                    <Card style={cardStyle} className="indiaAddressCard">
                      <h6 className="text-center">Mumbai-</h6>
                      <p className="text-center">
                        Lal Bahadur Shastri Rd, Bhandup, Sadan wadi, Bhandup
                        West, Mumbai, Maharashtra 400078
                      </p>
                    </Card>
                  </div>
                </Row>
                {/* <Row className="mt-3">
                  <div className="col d-flex justify-content-center">
                    <Card style={cardStyle} className="indiaAddressCard">
                      <h6 className="text-center">Hyderabad</h6>
                      <p className="text-center">
                        Hyderabad-205 2nd Floor,Hiline Building,RoadNo.12,
                        Banajara Hills,Hyderabad, Telangana 500034
                      </p>
                    </Card>
                  </div>
                </Row> */}
                <Row className="mt-3">
                  <div className="col d-flex justify-content-center">
                    <Card style={cardStyle} className="indiaAddressCard">
                      <h6 className="text-center">Bangalore</h6>
                      <p className="text-center">
                        Bangalore Address - Mahatma Gandhi Road, opposite to 1MG
                        Mall, Bengaluru, Karnataka 560042
                      </p>
                    </Card>
                  </div>
                </Row>
              </Container>
            </ModalBody>
          </Card>
        </Modal>
        <Modal isOpen={modalTwo} toggle={toggleTwo} centered>
          <h4 className="text-center">USA</h4>

          <ModalBody>
            <div className="col d-flex justify-content-center">
              <Card className="addressCard">
                <p className="text-center">
                  1104 Avenue C Bayonne, New Jersey-07002, USA
                </p>
              </Card>
            </div>
          </ModalBody>
        </Modal>
        <Modal isOpen={modalThree} toggle={toggleThree} centered>
          <h4 className="text-center">Canada</h4>
          <ModalBody>
            <div className="col d-flex justify-content-center">
              <Card style={{ width: "12rem" }} className="addressCard">
                <p className="text-center">
                  4792, Factory Lane, Lumsden,Newfoundland & Labrador
                </p>
              </Card>
            </div>
          </ModalBody>
        </Modal>
        <div className="footer-shape">
          <img
            loading="lazy"
            src="/images/shape/footer-shape-one.png"
            alt="Image"
          />
          <img
            loading="lazy"
            src="/images/shape/footer-shape-two.png"
            alt="Image"
          />
        </div>
      </footer>
      <footer className="footer-bottom-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="copy-right">
                <p>
                  Copyright &copy; {2016} Flyweis Technology. All Rights
                  Reserved
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="privacy">
                <ul>
                  <li>
                    <Link href="/privacy-policy">
                      <a>Privacy Policy</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="designed">
                <p>
                  Help <i className="bx bx-heart"></i>
                  <Link href="/faq">
                    <a>FAQ</a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
