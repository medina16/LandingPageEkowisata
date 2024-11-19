// import Button from "@/components/elements/Button/Button";
import styles from "./Kontak.module.css";
import Image from "next/image";

const Kontak = () => {
  return (
    <div className={styles.Kontak}>
      <p style={{ fontWeight: "500", textAlign: "center" }}>
        Hubungi kami lewat kontak berikut!
      </p>
      <div className={styles.wrapper}>
        <div className={styles.kontakContainer}>
          <div
            className={styles.imgContainer}
          >
            <Image
              src="/Bale Gandrung.jpg"
              fill={true}
              alt="Logo Bale Gandrung"
              className={styles.logo}
            ></Image>
          </div>
          <div className={styles.kontakInfo}>
            <h3>Bale Gandrung</h3>
            <div className={styles.buttonWrapper}>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "3px" }}
              >
                <div style={{ display: "flex" }}>
                  <span className={styles.sosmed}>
                    <i className="fa fa-phone" aria-hidden="true"></i>
                  </span>
                  
                  <a
                    title="Kontak Telepon"
                    href="tel:+62-878-4858-1607"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    +62-878-4858-1607 (telp.)
                  </a>
                </div>
                <div style={{ display: "flex" }}>
                  <span className={styles.sosmed}>
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </span>
                  <a
                    title="Kontak Instagram"
                    href="https://www.instagram.com/wisataalambalegandrung___/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    wisataalambalegandrung___
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.kontakContainer}>
        <div
            className={styles.imgContainer}
          >
            <Image
              alt="Logo Tatamba"
              fill={true}
              src="/Tatamba.jpg"
              className={styles.logo}
            ></Image>
          </div>

          <div className={styles.kontakInfo}>
            <h3>Tatamba</h3>
            <div className={styles.buttonWrapper}>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "3px" }}
              >
                <div style={{ display: "flex" }}>
                  <span className={styles.sosmed}>
                    <i className="fa fa-whatsapp" aria-hidden="true"></i>
                  </span>
                  <a
                    title="Kontak WhatsApp"
                    href="http://wa.me/6285801020424"
                    rel="noopener noreferrer"
                    target="_blank"
                  > +62-858-0102-0424</a>
                 
                </div>
                <div style={{ display: "flex" }}>
                  <span className={styles.sosmed}>
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                  </span>
                  <a
                     title="Kontak Instagram"
                    href="https://www.instagram.com/jeep_tatamba"
                  rel="noopener noreferrer"
                  target="_blank"
                  >jeep_tatamba</a>
                  
                </div>
                <div style={{ display: "flex" }}>
                  <span className={styles.sosmed}>
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                  </span>
                  <a
                     title="Kontak Facebook"
           
                     href="https://www.facebook.com/profile.php?id=61550334179192"
                     rel="noopener noreferrer"
                     target="_blank"
                  >JEEP GUCI Tatamba</a>
                  
                </div>
  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kontak;
