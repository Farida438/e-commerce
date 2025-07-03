import React from "react";
import styles from "./FAQ.module.css";

export default function FAQ() {
  const faqs = [
    {
      question: "What materials do you use in your jewelry?",
      answer: "We use ethically sourced 14k gold, sterling silver, and precious stones. Each piece is designed to last and handcrafted with care in our studio."
    },
    {
      question: "Is your jewelry waterproof?",
      answer: "Our pieces are designed for daily wear, including occasional water exposure. However, to preserve their brilliance, we recommend removing them before swimming or showering."
    },
    {
      question: "Can I customize a piece?",
      answer: "Yes! We offer limited customization options including engraving and chain length adjustment. Please reach out to our support team for personalized requests."
    },
    {
      question: "How long will shipping take?",
      answer: "Domestic orders typically ship within 2–4 business days. International orders may take up to 10–14 business days, depending on customs."
    },
    {
      question: "What is your return policy?",
      answer: "We offer returns within 14 days of delivery for unused items in their original packaging. Custom pieces and earrings are non-returnable for hygiene reasons."
    }
  ];

  return (
    <section className={styles.faqSection}>
      <h2 className={styles.heading}>Frequently Asked Questions</h2>
      <p className={styles.subheading}>
        Everything you need to know before your jewelry finds a home with you.
      </p>
      <div className={styles.faqList}>
        {faqs.map((item, index) => (
          <div key={index} className={styles.faqItem}>
            <h3 className={styles.question}>{item.question}</h3>
            <p className={styles.answer}>{item.answer}</p>
          </div>
        ))}
      </div>



            <div className={styles.contactFormBox}>
        <h3 className={styles.contactHeading}>Still have questions?</h3>
        <p className={styles.contactText}>
          Send us a message and our team will reach out as soon as possible.
        </p>
        <form className={styles.contactForm} onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" className={styles.input} required />
          <input type="email" placeholder="Your Email" className={styles.input} required />
          <textarea placeholder="Your Question" className={styles.textarea} rows="5" required />
          <button type="submit" className={styles.submitButton}>Send Message</button>
        </form>
      </div>



            <section className={styles.storeSection}>
        <h2 className={styles.storeHeading}>Visit Our Stores</h2>
        <p className={styles.storeSubtext}>
          Come experience the beauty in person. We're happy to welcome you.
        </p>

        <div className={styles.storeGrid}>
          <div className={styles.storeMap}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.635152872198!2d-6.262249323523405!3d53.34125457230214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e9e1d17f63d%3A0x6fca8f62ab7c43d6!2s1-2%20Adam%20Court%2C%20Sraid%20Grafton%2C%20Dublin%202!5e0!3m2!1sen!2sie!4v1654540130821!5m2!1sen!2sie"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Store Map"
            ></iframe>
          </div>

          <div className={styles.storeAddresses}>
            <div className={styles.addressCard}>
              <h4>Dublin Flagship</h4>
              <p>1-2 Adam Court, Sráid Grafton, Dublin 2, Ireland</p>
              <p>📞 +353 123 456 789</p>
              <p>🕒 Mon–Sat: 10am – 7pm</p>
            </div>
            <div className={styles.addressCard}>
              <h4>Paris Boutique</h4>
              <p>48 Rue Cambon, 75001 Paris, France</p>
              <p>📞 +33 1 42 60 89 10</p>
              <p>🕒 Mon–Fri: 11am – 6pm</p>
            </div>
            <div className={styles.addressCard}>
              <h4>New York Studio</h4>
              <p>231 Mulberry St, New York, NY 10012, USA</p>
              <p>📞 +1 (212) 555-0189</p>
              <p>🕒 Daily: 11am – 8pm</p>
            </div>
          </div>
        </div>
      </section>


    </section>
  );
}
