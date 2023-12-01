/** @format */

import React, { useState } from "react";
import axios from "axios";
import Router from "next/router";
import Head from "next/head";
import { store } from "react-notifications-component";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import services from "../public/images/servicesThree.jpg";
const EnquiryOne = () => {
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
      // let url = "https://nameless-sea-13764.herokuapp.com/addContactData";
      let url = "http://148.66.128.190:3000/addContactData";
      //   let url = "http://mern.online:5252/addContactData";

      let temp = {
        name,
        email,
        phone,
        subject: message,
      };
      axios.post(url, temp).then(
        (res) => {
          store.addNotification({
            title: "",
            message: `${res.data.msg}`,
            type: "success",
            insert: "bottom-right",
            container: "bottom-right",
            dismiss: {
              duration: 5000,
              onScreen: true,
            },
          });
          if (res.data.msg === "Message send successfully") {
            setLoading(false);
            Router.push("/thankyou");
          }

          setemail("");
          setmessage("");
          setphone("");
          setname("");

          // alert(res.data.message)
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
      {/* <nav class="navbar navbar-expand-lg main_header ">
        <div className="container">
          <img class="enquiy_logo" src="/images/flyweis_logo.png" alt="logo" />
        </div>
      </nav> */}
      <Navbar />

      <div className="blog_img_banner">
        <img src="/images/banner2.png" alt="" className="" />
      </div>
      <div style={{ width: "100%" }}>
        <div className="row">
          <div className="col-sm">
            <img
              src="/images/servicesThree.jpg"
              alt=""
              className="w-100 h-100 object-fit"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className=" col-sm ">
            <div>
              <div
                className="ask-question   col-lg-12 col-md-12"
                style={{ boxShadow: "none" }}
              >
                <h3 className="enquiry_heading">
                  DO YOU HAVE PROJECT IN MIND?
                </h3>
                <p className="text-center  fs-5 text-justify">
                  Our Expert will Assist You About Your Project and Develop as
                  Per Your Requirement. You Can Build Your Application on any of
                  the Platform either Android, IOS or Web. We are here to
                  Transform Your Vision into Reality.
                </p>
                <form onSubmit={SendContactData}>
                  <div className="row">
                    <div className="col-lg-12 col-sm-12">
                      <div className="form-group fs-5">
                        <input
                          style={{ backgroundColor: "#D3D3D3" }}
                          type="text"
                          name="name"
                          id="name"
                          autoComplete="off"
                          className="form-control py-2 radius-8 fs-6 placeholder"
                          placeholder="Your Name"
                          required
                          value={name}
                          onChange={(e) => {
                            setname(e.target.value);
                          }}
                          maxLength={20}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          style={{ backgroundColor: "#D3D3D3" }}
                          autoComplete="off"
                          type="text"
                          required
                          name="phone_number"
                          id="phone_number"
                          className="form-control  py-2 radius-8 fs-6 placeholder"
                          placeholder="Your Phone"
                          value={phone}
                          onChange={(e) => {
                            setphone(e.target.value);
                          }}
                          maxLength={12}
                          minLength={10}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-sm-12">
                      <div className="form-group">
                        <input
                          style={{ backgroundColor: "#D3D3D3" }}
                          type="email"
                          autoComplete="off"
                          name="email"
                          id="email"
                          className="form-control  py-2 radius-8 fs-6 placeholder"
                          placeholder="Your Email"
                          value={email}
                          onChange={(e) => {
                            setemail(e.target.value);
                          }}
                          maxLength={30}
                        />
                      </div>

                      <div className="form-group">
                        <textarea
                          style={{ backgroundColor: "#D3D3D3" }}
                          rows="3"
                          autoComplete="off"
                          className="form-control py-2 radius-8 fs-6 placeholder"
                          placeholder="Description"
                          value={message}
                          onChange={(e) => {
                            setmessage(e.target.value);
                          }}
                          maxLength={500}
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <button className="default-btn btn-two">
                        <span className="btn-whatsapp-pulse">
                          <i class="bx bxl-whatsapp"></i>
                        </span>
                        <span className="label fs-6">
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
      </div>
      <Footer />
    </>
  );
};

export default EnquiryOne;
