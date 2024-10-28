import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.column}>
        <h2>Hubungi Kami</h2>
      </div>
      <div>
        <h2>Media Sosial</h2>
        <div className={styles.MedSos}>
          <a className={styles.sosmed} href="https://web.whatsapp.com">
            <i className="fa fa-whatsapp" aria-hidden="true"></i>
          </a>
          <a className={styles.sosmed} href="https://instagram.com">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
