import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How Career Connect Works !</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <p>Create Your Free Profile</p>
              <p>
                Sign up in seconds and unlock personalized job recommendations, saved searches, and more.
              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <p>Discover Jobs or Post Opportunities</p>
              <p>
                Browse thousands of job listings or post your own vacancies to connect with the right talent instantly.
              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <p>Apply Easily or Hire the Best</p>
              <p>
                Apply with a click or manage applicants with smart filters and tools — all in one platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
