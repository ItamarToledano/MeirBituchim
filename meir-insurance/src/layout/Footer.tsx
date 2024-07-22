// import "../styles/Footer.css";
import Gmail from '../assets/pictures/Gmail.png'
import Insta from '../assets/pictures/Instagram.png'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__container-column">
          <h3>ניווט מהיר</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer__container-column">
          <h3>השירותים שלנו</h3>
          <ul>
            <li>
              ביטוח חיים
            </li>
            <li>
              ביטוח בריאות
            </li>
            <li>
              ביטוח מצחיק
            </li>
          </ul>
        </div>
        <div className="footer__container-column">
          <h3>שעות פעילות</h3>
          <span>א - ה: 17:00 - 8:00</span>
          <span>ו: 14:00 - 8:00</span>
          <span>ש: סגור</span>  
        </div>
        <div className="footer__container-column">
          <h3>דברו איתנו</h3>
          <ul>
            <li>מייל: info@insurancecompany.com</li>
            <li>טלפון: +1234567890</li>
            <li>כתובת: 123 Main St, City, Country</li>
          </ul>
          <div className="footer__container-column--social-media">
            <a href="#">
              <img src={Insta} />
            </a>
            <a href="#">
              <img src={Gmail} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer--copy-text">
        <p>&copy; כל הזכויות שמורות</p>
      </div>
    </footer>
  );
};

export default Footer;
