import React, { useContext, useEffect, useState } from "react";
import MenuContext from "../context/MenuContext";

function Contact() {
  const { setIsShowMenu } = useContext(MenuContext);
  useEffect(() => {
    setIsShowMenu(false);
  }, [setIsShowMenu]);

  const initialForm = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };
  const [form, setForm] = useState(() => {
    const savedItem = localStorage.getItem("form");
    const parsedItem = JSON.parse(savedItem);
    return parsedItem || initialForm;
  });

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    localStorage.setItem("form", JSON.stringify(form));
  }, [form]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm(initialForm);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setForm(initialForm);
  };

  return (
    <div id="Contact" className="text-center">
      <section>
        <h1 className="section-title">CONTACT ME</h1>
        <div className="border-bottom"></div>
        <form
          name="contact"
          action="https://formspree.io/f/mrgvbqaj"
          method="POST"
          className="form"
        >
          <input
            onChange={handleForm}
            type="text"
            name="name"
            value={form.name}
            placeholder="Name"
            className="name"
            required
          />

          <input
            onChange={handleForm}
            type="email"
            name="email"
            value={form.email}
            placeholder="Email"
            className="email"
            required
          />

          <input
            onChange={handleForm}
            type="text"
            name="subject"
            value={form.subject}
            placeholder="Subject"
            className="subject"
          />

          <input
            onChange={handleForm}
            type="tel"
            name="phone"
            value={form.phone}
            placeholder="Phone"
            className="phone"
          />

          <textarea
            onChange={handleForm}
            name="message"
            cols="20"
            rows="10"
            placeholder="Enter your message"
            value={form.message}
            className="message"
            required
          ></textarea>

          <button className="btn-light" onClick={handleSubmit} type="submit">
            Send
          </button>
          <button className="btn-light" type="reset" onClick={handleReset}>
            Reset
          </button>
          <div data-netlify-recaptcha="true"></div>
        </form>
      </section>

      <section id="contact-b" class="bg-primary py-1">
        <div className="container">
          <div className="contact-info">
            <div>
              <a
                target="_blank"
                href="mailto:oeztuerk.oezguer@icloud.com"
                rel="noopener noreferrer"
              >
                <h3>Email</h3>
                <p>oeztuerk.oezguer@icloud.com</p>
              </a>
            </div>

            <div>
              <a href="tel:+15254364406">
                <h3>Phone</h3>
                <p>01525 436 4406</p>
              </a>
            </div>

            <div>
              <a
                href="https://goo.gl/maps/98hmxuNVNGTUKh7u7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>Address</h3>
                <p> Schleswig-Holstein / Germany</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
