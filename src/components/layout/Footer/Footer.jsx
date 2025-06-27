import React from "react";
import styles from "./Footer.module.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { assets } from "../../../assets/assets.jsx";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <footer className={styles.footer}>
        <div className={styles.column}>
          <div className={styles.container}>
            <h2 className={styles.heading}>Company</h2>
            <div className={styles.line}></div>
            <ul className={styles.list}>
              <li className={styles.listItem}>About Us</li>
              <li className={styles.listItem}>Contact</li>
              <li className={styles.listItem}>Privacy Policy</li>
              <li className={styles.listItem}>Terms of Service</li>
            </ul>
          </div>

          <div className={styles.container}>
            <h2 className={styles.heading}>Contact</h2>
            <div className={styles.line}></div>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <FaLocationDot /> 123 Avenue, 34 street
              </li>
              <li className={styles.listItem}>
                <FaPhoneAlt /> +1 (234) 567-8900
              </li>
              <li className={styles.listItem}>
                <FaWhatsapp /> +1 (234) 567-8900
              </li>
              <li className={styles.listItem}>
                <FaEnvelope /> info@company.com
              </li>
            </ul>
          </div>

          <div className={styles.container}>
            <h2 className={styles.heading}>Get help</h2>
            <div className={styles.line}></div>
            <ul className={styles.list}>
              <li className={styles.listItem}>FAQ</li>
              <li className={styles.listItem}>Shipping</li>
              <li className={styles.listItem}>Returning</li>
              <li className={styles.listItem}>Order Status</li>
              <li className={styles.listItem}>Payment Methods</li>
            </ul>
          </div>

          <div className={styles.container}>
            <h2 className={styles.heading}>Shop With Us</h2>
            <div className={styles.line}></div>
            <ul className={styles.list}>
              <li className={styles.listItem}>New Arrivals</li>
              <li className={styles.listItem}>Best Sellers</li>
              <li className={styles.listItem}>Special Offers</li>
              <li className={styles.listItem}>Gift Cards</li>
              <li className={styles.listItem}>Store Locator</li>
            </ul>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.item}>
            <img src={assets.shello} alt="Shello Logo" className={styles.logo} />
          </div>
          <div className={styles.item}>Follow Us on Social Media:</div>
          <div className={styles.socialIcons}>
            <div className={styles.icon}><FaFacebook /></div>
            <div className={styles.icon}><FaInstagram /></div>
            <div className={styles.icon}><FaTwitter /></div>
            <div className={styles.icon}><FaPinterest /></div>
            <div className={styles.icon}><FaLinkedin /></div>
          </div>
        </div>
      </footer>

      <div className={styles.bottom}>
        <p className={styles.text}>© 2025 Farida Orucova-Catbird Team. All rights reserved. With love from Catbird.</p>
      </div>
    </div>
  );
};

export default Footer;