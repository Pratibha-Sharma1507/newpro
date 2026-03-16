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

    const res = await fetch("/api/send-email", {
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
    <div style={styles.container}>

      <form onSubmit={handleSubmit} style={styles.form}>

        <h2 style={styles.title}>Contact Us</h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
          style={styles.input}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          onChange={handleChange}
          style={styles.input}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          onChange={handleChange}
          style={styles.textarea}
        />

        <button type="submit" style={styles.button}>
          Send Message
        </button>

      </form>

    </div>
  );
}

const styles = {

  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "linear-gradient(135deg,#667eea,#764ba2)"
  },

  form: {
    background: "white",
    padding: "40px",
    borderRadius: "10px",
    width: "100%",
    maxWidth: "400px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },

  title: {
    textAlign: "center",
    marginBottom: "10px"
  },

  input: {
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px"
  },

  textarea: {
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px",
    minHeight: "100px"
  },

  button: {
    padding: "12px",
    background: "#667eea",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer"
  }

};

export default ContactForm;