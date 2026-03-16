import { useState } from "react";

function ContactForm() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const res = await fetch("/api/send-email", {   // 👈 yaha change kiya
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    const data = await res.json();

    alert(data.message);

  };

  return (

    <form onSubmit={handleSubmit}>

      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />

      <textarea
        name="message"
        placeholder="Message"
        onChange={handleChange}
      />

      <button type="submit">
        Send Email
      </button>

    </form>

  );
}

export default ContactForm;