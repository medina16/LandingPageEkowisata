
import Button from "@/components/elements/Button/Button";
import styles from "./Kontak.module.css";
import Image from "next/image";

const Kontak = () => {
  return (
   <div className={styles.Kontak}>
    <p style={{ fontWeight: "500", textAlign: "center"}}>Hubungi kami lewat kontak berikut!</p>
        <div className={ styles.wrapper }>
          <div className={styles.kontakContainer}>
          <div style={{ 
              width:"120px",
              height:"120px",
              backgroundColor:"#72BF82",
              borderRadius:"50%"
             }}>
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
                <Button
                  buttontype="primary"
                  buttontext="WhatsApp"
                  buttonlink="http://web.whatsapp.com"
                  icon="wa"
                />
                <Button
                  buttontype="primary"
                  buttontext="Instagram"
                  buttonlink="https://www.instagram.com/wisataalambalegandrung___/"
                  icon="ig"
                />
              </div>
            </div>
          </div>
          <div className={styles.kontakContainer}>
            <div style={{ 
              width:"120px",
              height:"120px",
              backgroundColor:"#72BF82",
              borderRadius:"50%"
             }}>
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
                <Button
                  buttontype="primary"
                  buttontext="WhatsApp"
                  buttonlink="http://web.whatsapp.com"
                  icon="wa"
                />
                <Button
                  buttontype="primary"
                  buttontext="Instagram"
                  buttonlink="https://www.instagram.com/jeep_tatamba"
                  icon="ig"
                />
              </div>
            </div>
          </div>
        </div>
   </div>
  );
};

export default Kontak;
