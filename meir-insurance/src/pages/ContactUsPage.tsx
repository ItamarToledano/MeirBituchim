const ContactUs: React.FC = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:itamar386@gmail.com";
  };

  const handleWhatsAppClick = () => {
    // Replace with your WhatsApp number and message
    let whatsappMessage = encodeURIComponent(
      "Hello! I'm contacting you from your website."
    );
    window.location.href = `https://wa.me/+972508665300/?text=${whatsappMessage}`;
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <p>Address: Your Address Here</p>
      <p>
        Email:{" "}
        <a onClick={handleEmailClick} href="mailto:meirbit2008@gmail.com">
          meirbit2008@gmail.com
        </a>
      </p>
      <p>
        WhatsApp:{" "}
        <a href="#" onClick={handleWhatsAppClick}>
          Send WhatsApp Message
        </a>
      </p>
    </div>
  );
};

export default ContactUs;
