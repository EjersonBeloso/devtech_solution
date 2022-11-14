import React from "react";
import { useForm, ValidationError } from "@formspree/react";
function ContactForm() {
  const [state, handleSubmit] = useForm("xlevbroz");
  if (state.succeeded) {
    return <p>Thanks You for your time.</p>;
  }
  return (
    <section className="contact-section">
      <div className="contactform form p-5 mt-5">
        <div>
          <h1 className="contact-headline">Get in touch</h1>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                className="form-control"
                id="name"
                type="text"
                name="name"
                placeholder="Enter your Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                className="form-control"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your Email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Preferred Time and Date</label>
              <input
                className="form-control"
                id="date"
                type="date"
                name="date"
              />
            </div>
            <div className="form-group">
              <label htmlFor="service">Choose Service</label>
              <select id="service" name="service">
                <option value="format">Format and Reformat</option>
                <option value="software-install">Software Installation</option>
                <option value="ssd-upgrade">
                  SSD Upgrade and Installation
                </option>
                <option value="computer-chkup">Computer Checkup</option>
                <option value="computer-repair">Computer Repair</option>
                <option value="ram-upgrade">
                  RAM Upgrade and Installation
                </option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="messege">Enter messege</label>
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <textarea
                id="message"
                name="message"
                placeholder="Please add text"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <button
              type="submit"
              className="hero-btn"
              disabled={state.submitting}
            >
              Submit
            </button>
          </form>
        </div>
        <div className="contactlist"></div>
      </div>
    </section>
  );
}
function ContactUs() {
  return <ContactForm />;
}
export default ContactUs;
