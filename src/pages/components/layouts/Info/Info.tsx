import Image from "next/image";
import styles from "./Info.module.css";

const Info = () => {
  return (
    <div className={styles.Info}>
      <div className={styles.wrapper}>
        <div className={styles.innerWrapper}>
          <h3>Susur Hutan</h3>
          <p>
            Telusuri indahnya wilayah kaki Gunung Slamet menggunakan mobil jeep.
            Anda juga berkesempatan untuk turut serta dalam penanaman bibit
            pohon seperti alpukat, kopi, durian, dan sebagainya dalam rangka
            menekan jejak karbon.
          </p>
          <p>
            Dengan konsep agroeduwisata, Anda bisa merasakan suasana hutan yang
            asri sambil mendapat edukasi langsung dari kelompok tani lokal
            mengenai kelestarian alam dan emisi karbon.
          </p>
        </div>
        <Image
          src="/DSC05762 (1).JPG"
          width={560}
          height={270}
          className={styles.img}
          alt=""
        />
      </div>
      <div
        className={styles.wrapper}
        style={{ display: "flex", flexDirection: "row-reverse" }}
      >
        <div className={styles.innerWrapper}>
          <h3>Wanawisata di Bale Gandrung</h3>
          <p>
            Rest area di ??? ini cocok bagi Anda yang ingin melepas penat sambil
            dimanjakan pemandangan pepohonan rindang. Ada banyak aktivitas
            menyenangkan yang dapat dilakukan, mulai dari games, api unggun,
            hingga camping.
          </p>
        </div>
        <Image
          src="/DSC05734.JPG"
          alt=""
          width={560}
          height={270}
          className={styles.img}
        />
      </div>
    </div>
  );
};

export default Info;
