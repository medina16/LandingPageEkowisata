import styles from "./Paket.module.css";
import { Check } from "lucide-react";
import Image from "next/image";
import Button from "../../elements/Button/Button";

const Paket = () => {
  return (
    <div className={styles.Paket}>
      <div className={styles.paketWrapper}>
        <div className={styles.paketContainer}>
          <Image
            src="/DSC05762 (1).JPG"
            width={560}
            height={270}
            className={styles.img}
            alt=""
          />

          <div className={styles.paketContent}>
            <h2>Guci Nature n Wellness</h2>
            <p>
              Paket ini menekankan keseimbangan antara petualangan dan
              relaksasi. Cocok bagi wisatawan yang mencari pengalaman
              menyegarkan dan menenangkan di alam, ideal untuk keluarga atau
              grup yang ingin merasakan healing dengan wisata alam.
            </p>
            <ul>
              <li>Jeep adventure</li>
              <li>Nanam bibit pohon</li>
              <li>Makan siang</li>
              <li>Relaksasi air panas</li>
              <li>Makan sore</li>
              <li>Agrowisata kebun kopi</li>
              <li>Shopping oleh-oleh</li>
            </ul>
          </div>
          <div style={{ padding: "0 15px 15px" }}><Button
            buttontext="Reservasi Sekarang"
            buttonlink="http://web.whatsapp.com"
          />
        </div>
        </div>
        <div className={styles.paketContainer}>
          <Image
            src="/DSC05734.JPG"
            width={560}
            height={270}
            className={styles.img}
            alt=""
          />

          <div className={styles.paketContent}>
            <h2>Guci Nature n Wellness</h2>
            <p>
              Paket ini menekankan keseimbangan antara petualangan dan
              relaksasi. Cocok bagi wisatawan yang mencari pengalaman
              menyegarkan dan menenangkan di alam, ideal untuk keluarga atau
              grup yang ingin merasakan healing dengan wisata alam.
            </p>
            <ul>
              <li>Jeep adventure</li>
              <li>Nanam bibit pohon</li>
              <li>Makan siang</li>
              <li>Relaksasi air panas</li>
              <li>Makan sore</li>
              <li>Agrowisata kebun kopi</li>
              <li>Shopping oleh-oleh</li>
            </ul>
          </div>
          <div style={{ padding: "0 15px 15px" }}>
            <Button
              buttontext="Reservasi Sekarang"
              buttonlink="http://web.whatsapp.com"
            />
          </div>
        </div>
      </div>
      <h3>Fasilitas sudah termasuk:</h3>
      <div className={styles.fasilWrapper}>
        <div className={styles.fasilGroup}>
          <div className={styles.fasilitas}>
            <span>
              <img src="/starburst.svg"></img>
            </span>
            Sewa peralatan camping
          </div>
          <div className={styles.fasilitas}>
            <span>
              <img src="/starburst.svg"></img>
            </span>
            Sewa peralatan camping
          </div>
          <div className={styles.fasilitas}>
            <span>
              <img src="/starburst.svg"></img>
            </span>
            Sewa peralatan camping
          </div>
        </div>
        <div className={styles.fasilGroup}>
          <div className={styles.fasilitas}>
            <span>
              <img src="/starburst.svg"></img>
            </span>
            Sewa peralatan camping
          </div>
          <div className={styles.fasilitas}>
            <span>
              <img src="/starburst.svg"></img>
            </span>
            Sewa peralatan camping
          </div>
          <div className={styles.fasilitas}>
            <span>
              <img src="/starburst.svg"></img>
            </span>
            Sewa peralatan camping
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paket;
