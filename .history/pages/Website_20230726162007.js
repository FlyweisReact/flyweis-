/** @format */

import React, { useState } from "react";
import axios from "axios";
import Router from "next/router";
import Head from "next/head";
import { store } from "react-notifications-component";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";

const Website = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [loading, setLoading] = useState(false);
  const [phone, setphone] = useState("");
  const [message, setmessage] = useState("");

  const SendContactData = (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (email === "" && phone == "") {
        return;
      }
      gtag_report_conversion();
      let url = "https://fly-back.vercel.app/api/v1";
      // let temp = {
      //   name,
      //   email,
      //   phone,
      //   subject: message,
      // };

      let temp = {
        name,
        email,
        phone,
        message,
      };
      axios.post(url, temp).then(
        (res) => {
          store.addNotification({
            title: "",
            message: `Message send successfully`,
            type: "success",
            insert: "bottom-right",
            container: "bottom-right",
            dismiss: {
              duration: 5000,
              onScreen: true,
            },
          });
          Router.push("/thankyou");
          setLoading(false);
          setemail("");
          setmessage("");
          setphone("");
          setname("");
          console.log("data response:::", res);
        },
        (error) => {
          store.addNotification({
            title: "",
            message: `${error}`,
            type: "danger",
            insert: "bottom-right",
            container: "bottom-right",
            dismiss: {
              duration: 5000,
              onScreen: true,
            },
          });

          console.log("data response error:::", error);
        }
      );
    } catch (error) {
      store.addNotification({
        title: "",
        message: `${error}`,
        type: "danger",
        insert: "bottom-right",
        container: "bottom-right",
        dismiss: {
          duration: 5000,
          onScreen: true,
        },
      });
      console.log("data response error:::", error);
    }
  };
  function gtag_report_conversion(url) {
    var callback = function () {
      if (typeof url != "undefined") {
        window.location = url;
      }
    };
    gtag("event", "conversion", {
      send_to: "AW-347809802/7YOECM232Z8DEIrQ7KUB",
      event_callback: callback,
    });
    return false;
  }
  return (
    <>
      <Head>
        <script
          async
          custom-element="amp-analytics"
          src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"
        ></script>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-347809802"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'AW-347809802');
          `,
          }}
        />
      </Head>

      <Navbar />

      <div className="main_header_banner">
        <img src=" /images/service/Services.jpg" alt="" />
      </div>
      <div className="container">
        <div className="Card_shadow enruiry_card">
          <div>
            <div className="ask-question col-lg-12 col-md-12">
              <h3 className="enquiry_heading">
                Are You Looking For Website Development?
              </h3>
              <p className="text-center">
                Our Expert will Assist You About Your Project and Develop as Per
                Your Requirement. We Can Build Your Website on all Platform.{" "}
                <br /> We are here to Transform Your Vision into Reality.
              </p>
              <form onSubmit={SendContactData}>
                <div className="row">
                  <div className="col-lg-12 col-sm-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="off"
                        required
                        className="form-control"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => {
                          setname(e.target.value);
                        }}
                        maxLength={100}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        autoComplete="off"
                        type="tel"
                        name="phone_number"
                        id="phone_number"
                        required
                        className="form-control"
                        placeholder="Your Phone"
                        value={phone}
                        onChange={(e) => {
                          setphone(e.target.value);
                        }}
                        maxLength={20}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-sm-12">
                    <div className="form-group">
                      <input
                        type="email"
                        autoComplete="off"
                        name="email"
                        id="email"
                        required
                        className="form-control"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => {
                          setemail(e.target.value);
                        }}
                        maxLength={100}
                      />
                    </div>

                    <div className="form-group">
                      <textarea
                        rows="3"
                        autoComplete="off"
                        className="form-control"
                        placeholder="Description"
                        value={message}
                        onChange={(e) => {
                          setmessage(e.target.value);
                        }}
                        maxLength={1500}
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <button className="default-btn btn-two">
                      <span className="btn-whatsapp-pulse">
                        <i class="bx bxl-whatsapp"></i>
                      </span>
                      <span className="label">
                        {loading ? "Loading..." : "Submit"}
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Website;
