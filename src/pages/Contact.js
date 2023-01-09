import React, { useEffect, useState, useContext } from "react";
import MenuContext from "../context/MenuContext";

function Contact() {
  const { isShowMenu, setIsShowMenu } = useContext(MenuContext);
  useEffect(() => {
    setIsShowMenu(false);
  }, [setIsShowMenu]);

  const initialForm = {
    name: "",
    email: "",
    phone: "",
    subject : "",
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
      <form name="contact" method="POST" data-netlify="true"  data-netlify-recaptcha="true" className="form">
       
          <input
            onChange={handleForm}
            type="text"
            name="name"
            value={form.name}
            placeholder="Name"
            className="name"
          />
      
          <input
            onChange={handleForm}
            type="email"
            name="email"
            value={form.email}
            placeholder="Email"
            className="email"

          />
      
          <input
            onChange={handleForm}
            type="subject"
            name="phone"
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
            cols="30"
            rows="10"
            placeholder="Enter message"
            value={form.message}
            className="message"
          ></textarea>
         
      
        <button className="btn-dark" onClick={handleSubmit} type="submit">
          Send
        </button>
        <button className="btn-dark" type="reset" onClick={handleReset}>
          Reset
        </button> 
        <div data-netlify-recaptcha="true"></div>
      </form>
      </section>

      <section id="contact-b" class="bg-primary py-4">
        <div className="container">
            <div className="contact-info">
                <div>
                    <a target="_blank" href="mailto:oezguer@mein.gmx" rel="noopener noreferrer">
                    <h3>Email</h3>
                    <p>oezguer@mein.gmx</p></a>
                </div>

                <div>
                    <a href="tel:+15254364406">
                    <h3>Phone</h3>
                    <p> 01525 436 4406</p></a>
                </div>

                <div>
                    <a href="https://goo.gl/maps/98hmxuNVNGTUKh7u7" target="_blank" rel="noopener noreferrer">
                    <h3>Address</h3>
                    <p> Schleswig-Holstein / Germany</p></a>
                </div>
            </div>
        </div>
   </section>

      
    </div>
  );
}

export default Contact;
