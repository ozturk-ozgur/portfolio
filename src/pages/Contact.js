import React, { useEffect, useState } from "react";

function Contact() {
  const initialForm = {
    name: "",
    email: "",
    phone: "",
    text: "",
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
    <div>
      Contact
      <form action="">
        <div>
          <label htmlFor="name">name</label>
          <input
            onChange={handleForm}
            type="text"
            name="name"
            value={form.name}
          />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input
            onChange={handleForm}
            type="email"
            name="email"
            value={form.email}
          />
        </div>
        <div>
          <label htmlFor="phone">phone number</label>
          <input
            onChange={handleForm}
            type="tel"
            name="phone"
            value={form.phone}
          />
        </div>
        <div>
          <textarea
            onChange={handleForm}
            name="text"
            cols="30"
            rows="10"
            placeholder="write your message here"
            value={form.text}
          ></textarea>
        </div>
        <button onClick={handleSubmit} type="submit">
          send
        </button>
        <button type="reset" onClick={handleReset}>
          reset
        </button>
      </form>
    </div>
  );
}

export default Contact;
