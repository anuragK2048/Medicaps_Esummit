import React, { useState } from "react";
import "./styles/ContactUs.style.css";

function ContactUs() {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateForm = () => {
    const { name, phone, email, message } = formData;

    if (name.trim() === "") {
      alert("Please enter your name");
      return false;
    }

    if (phone.trim() === "") {
      alert("Please enter your phone number");
      return false;
    }

    if (email.trim() === "") {
      alert("Please enter your email");
      return false;
    }

    if (message.trim() === "") {
      alert("Please enter your message");
      return false;
    }

    return true; // All fields are valid
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Proceed with form submission, e.g., sending data to an API
      console.log("Form data submitted:", formData);
    }
  };

  return (
    <div className="container" data-component="contact-us">
      <h1>Contact Us</h1>
      <p>Fill up the form to get in touch with us.</p>

      <div className="contact-box">
        <div className="container-left">
          <h3>Fill the Form*</h3>
          <form id="contactForm" onSubmit={handleSubmit}>
            <div className="input-row">
              <div className="input-group">
                <label>Name*</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <label>Phone*</label>
                <input
                  type="text"
                  id="phone"
                  placeholder="+91 1234567890"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="input-row">
              <div className="input-group">
                <label>Email*</label>
                <input
                  type="email"
                  id="email"
                  placeholder="youremail@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <label>Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Inquiry"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
            </div>

            <label>Message*</label>
            <textarea
              rows="10"
              id="message"
              placeholder="Enter your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit">SEND MESSAGE</button>
          </form>
        </div>

        <div className="container-right">
          <h3>Reach Us</h3>
          <table>
            <tbody>
              <tr>
                <td>Email: </td>
                <td>vansh@medicaps.ac.in</td>
              </tr>
              <tr>
                <td>Phone: </td>
                <td>+91 8319936161</td>
              </tr>
              <tr>
                <td>Address: </td>
                <td>
                  MII FOUNDATION MEDICAPS UNIVERSITY <br />
                  Pigdamber, Rau, <br />
                  Madhya Pradesh - 453331, India
                </td>
              </tr>
            </tbody>
          </table>

          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.8782181395513!2d75.8035907!3d22.621022399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962f958dcb7169d%3A0xd877c12078e50f0f!2sMedi-Caps%20University!5e0!3m2!1sen!2sin!4v1729613337559!5m2!1sen!2sin"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
