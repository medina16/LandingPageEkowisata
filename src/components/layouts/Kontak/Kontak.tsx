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
            style={{
              width: "120px",
              height: "120px",
              backgroundColor: "#72BF82",
              borderRadius: "50%",
            }}
          >
            <Image
              src="/Bale Gandrung.jpg"
              height={120}
              width={120}
              alt="Logo Bale Gandrung"
              className={styles.logo}
            ></Image>
          </div>
          <div className={styles.kontakInfo}>
            <h3>Bale Gandrung</h3>
            <div className={styles.buttonWrapper}>
              <div style={{ display: "flex" }}>
                <a
                  title="Kontak WhatsApp"
                  className={styles.sosmed}
                  href="http://wa.me/087848581607"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-whatsapp" aria-hidden="true"></i>
                </a>
                <a
                  title="Kontak Instagram"
                  className={styles.sosmed}
                  href="https://www.instagram.com/wisataalambalegandrung___/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.kontakContainer}>
          <div
            style={{
              width: "120px",
              height: "120px",
              backgroundColor: "#72BF82",
              borderRadius: "50%",
            }}
          >
            <Image
              alt="Logo Tatamba"
              width={120}
              height={120}
              src="/Tatamba.jpg"
              className={styles.logo}
            ></Image>
          </div>

          <div className={styles.kontakInfo}>
            <h3>Tatamba</h3>
            <div className={styles.buttonWrapper}>
              <div style={{ display: "flex" }}>
                <a
                  title="Kontak WhatsApp"
                  className={styles.sosmed}
                  href="http://wa.me/085801020424"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-whatsapp" aria-hidden="true"></i>
                </a>
                <a
                  title="Kontak Instagram"
                  className={styles.sosmed}
                  href="https://www.instagram.com/jeep_tatamba"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
                <a
                  title="Kontak Facebook"
                  className={styles.sosmed}
                  href="https://www.facebook.com/profile.php?id=61550334179192"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kontak;
