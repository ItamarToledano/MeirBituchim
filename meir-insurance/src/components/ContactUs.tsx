import React, { useState } from "react";
import "../styles/ContactUs.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const endpoint = "https://formspree.io/f/xkgwojjz"; // Replace with your Formspree endpoint

    try {
      const response = await axios.post(endpoint, formData, {
        headers: { Accept: "application/json" },
      });

      if (response.status === 200 || response.status === 201) {
        console.log("Formspree response:", response);
        toast.success("(: נשלח - כבר חוזרים אליך", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("משהו השתבש... נסה לשלוח לנו מייל", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      toast.error("משהו השתבש... נסה לשלוח לנו מייל", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:meirbit2008@gmail.com";
  };

  const handleWhatsAppClick = () => {
    let whatsappMessage = encodeURIComponent("שלום! אני פונה אליך מהאתר שלך.");
    window.open(
      `https://wa.me/+972508665300/?text=${whatsappMessage}`,
      "_blank"
    );
  };

  return (
    <div className="contact-us-container">
      <h2>צור קשר! אנחנו כאן עבורך</h2>
      <div className="contact-info">
        <p>כתובת: לוחמי השחרור 4 פתח תקווה</p>
        <p>
          <a onClick={handleEmailClick} href="mailto:meirbit2008@gmail.com">
            meirbit2008@gmail.com
          </a>
          :דוא"ל{" "}
        </p>
        <p>
          <a href="#" onClick={handleWhatsAppClick}>
            WhatsApp שלח הודעת
          </a>
          :WhatsApp{" "}
        </p>
      </div>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="שם מלא"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="דואר אלקטרוני"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="על מה אתה רוצה לדבר?"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          required
        ></textarea>
        <div className="button-container">
          <button type="submit">שלח הודעה</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ContactUs;
