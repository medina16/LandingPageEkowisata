import Image from "next/image";
import styles from "./Info.module.css";
import { InfoWisata } from "../../../../content_types";
import { MapPin } from "lucide-react";

const Info = ({ infos }: { infos: InfoWisata[] }) => {
  return (
    <div className={styles.Info}>
      <div>
        <h1 style={{ textAlign: "center", marginBottom: "10px" }}>
          Yuk, main ke Bale Gandrung dan Tatamba!
        </h1>
        <p>
          Bale Gandrung dan Tatamba merupakan tempat yang cocok untuk
          menghabiskan hari dengan aktivitas outdoor sambil memanjakan
          mata dengan keindahan alam autentik. Dengan konsep <b>agroeduwisata</b>,
          kedua destinasi wisata di kawasan Gunung Slamet, Jawa Tengah ini tidak
          hanya menawarkan <b>pengalaman seru</b>, tetapi juga mendukung{" "}
          <b>pelestarian alam</b> setempat dan menjadi sarana <b>edukasi</b>{" "}
          yang menyenangkan.
        </p>
      </div>

      {infos?.map((item, index) => (
        <div key={index} className={styles.wrapper}>
          {/* <a style={{ fontWeight:"500", display: "flex", gap: "5px", alignItems: "center" }}>
              <MapPin style={{ height: "17px", strokeWidth: "2.5px" }} /> Desa Guci, Tegal, Jawa Tengah
            </a> */}
          <div className={styles.contentWrapper}>
            <Image
              src={"http:" + item.fields.foto.fields.file.url}
              width={1120}
              height={540}
              className={styles.img}
              alt=""
            />
            <div className={styles.innerWrapper}>
              <div className={styles.tes3}>
                <h3>{item.fields.nama}</h3>
                <a
                rel="noopener noreferrer"
                  target="_blank"
                  href={item.fields.linkMaps}
                  className={styles.location}
                >
                  <MapPin
                    style={{
                      height: "18px",
                      flexShrink: "0",
                      strokeWidth: "2.2px",
                    }}
                  />{" "}
                  {item.fields.lokasi}
                </a>
              </div>
              <p>{item.fields.deskripsi} </p>
              <p>
                <b>Aktivitas yang dapat dilakukan di antaranya:</b>
              </p>
              <div className={styles.tes2}>
                {item.fields.contohAktivitas?.map((aktivitas) => (
                  <div key={aktivitas} className={styles.tes}>
                    <svg
                      style={{ width: "18px", flexShrink: "0" }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="#72BF82"
                      stroke="#72BF82"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-star"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>
                    {aktivitas}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )) || <div>Data tidak tersedia</div>}
    </div>
  );
};

export default Info;
