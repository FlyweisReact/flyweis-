import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";

class TermsConditions extends Component {
  render() {
    return (
      <>
        <Navbar />

        <div className="blog_img_banner">
          <img loading="lazy"
            src="/images/terms_and_condition.png"
            alt=""
            className="native_image_height"
          />
        </div>
  

        <div className="text-container ptb-100">
          <div className="container">
            <h3>Payment Policy</h3>
            <p>Kindly have a look at the payment details below:</p>

            <p>
              1. Advance Token: 30% at the time of Confirmation the project.
            </p>
            <p>
              2. 1st Installment – 10% after showing the UI/UX to the customer.
            </p>

            <p>
              3. 2nd Installment – 30% after showing the Backend to the
              Customer.
            </p>

            <p>
              4. 3rd Installment – 20% after showing the frontend to the
              customer.
            </p>

            <p>
              5. 4th Installment – 10% after complete testing of the Project.
            </p>

            <h3>Terms and Conditions/Cancellation Policy</h3>
            <p>
              1.If Customer cancels the agreement before and after completion
              ofthe project, all the EMI's or paid amount will be non-refundable
              whatever Customer has paid till date.
            </p>
            <p>
              2.If Customer is unable to pay the instalment on time, then a 7
              days grace period will be given before & after delivering the
              project for each EMI.
            </p>
            <p>
              3.If Customer fails to pay EMI then his/her project will be put on
              haltby the company, until & unless Customer clears his/her pending
              EMI's.
            </p>
            <p>
              4.The Source Code will be handed over to the Customer after
              successful completion of full EMI structure.
            </p>
            <p>
              5.If Customer wants the Source Code, then Company will hand it
              over to Customer after clearing outstanding amount of the project.
            </p>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default TermsConditions;