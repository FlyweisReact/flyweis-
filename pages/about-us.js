import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import About from "../components/AboutOne/About";
import MakeYourBusiness from "../components/Common/MakeYourBusiness";
import Testimonials from "../components/Common/Testimonials";
import TeamTwo from "../components/Common/TeamTwo";
import Partner from "../components/Common/Partner";
import Footer from "../components/Layouts/Footer";
import PartnerSlider from "../components/Common/PartnerSlider";
import Head from "next/head";

class About1 extends Component {
  render() {
    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>About-Us</title>
        </Head>
        <Navbar />

        <div className="banner_blog">
          <img loading="lazy" src="/images/PagesImage/about.png" alt="" />
        </div>

        {/* <PageBanner 
                    pageTitle="About Style One" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="About Style One" 
                /> */}

        <About />
        <MakeYourBusiness />
        <Testimonials />
        {/* <TeamTwo /> */}
        <div className="pb-50">
          {/* <Partner /> */}
          <PartnerSlider />
        </div>
        <Footer />
      </>
    );
  }
}

export default About1;
