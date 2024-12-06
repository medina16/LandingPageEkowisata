import Image from "next/image";
import styles from "./Info.module.css";
import { InfoWisata } from "../../../../content_types";
import { MapPin } from "lucide-react";

const Info = ({ infos }: { infos: InfoWisata[] }) => {
  return (
    <div className={styles.Info}>
      <h2>Tentang Kami</h2>

      <section>
        {infos?.map((item, index) => (
          <div key={index} className={styles.wrapper}>
            {/* <a style={{ fontWeight:"500", display: "flex", gap: "5px", alignItems: "center" }}>
              <MapPin style={{ height: "17px", strokeWidth: "2.5px" }} /> Desa Guci, Tegal, Jawa Tengah
            </a> */}
            <div className={styles.contentWrapper}>
              <div className={styles.imgContainer}>
                <Image
                  src={"http:" + item.fields.foto.fields.file.url}
                  alt={item.fields.nama}
                  fill
                  sizes="(max-width: 1023px): 100vw, 80vw"
                  className={styles.img}
                />
              </div>

              <div className={styles.innerWrapper}>
                <div className={styles.tes3}>
                  <h2>{item.fields.nama}</h2>
                  <a
                    title={"Lokasi " + item.fields.nama}
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
      </section>
      
      <div>
      <h2 style={{ marginBottom: "20px" }}>Desa Sejahtera Astra (DSA) Tegal-Pemalang</h2>
      <p>
        Wisata Tatamba dan Bale Gandrung merupakan hasil integrasi dari inovasi DSA
        Pemalang-Tegal. Program ini mengusung sustainable ecotourism dalam
        mendukung perekonomian Desa Guci, Tegal dan Desa Gambuhan,
        Pemalang. 
      </p>
      </div>
      
      <div className={styles.vidWrapper}>
        <iframe
          src="https://www.youtube.com/embed/wqXI5cAhERY?si=WZwT54ybYvUEWgBI"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <section>
        <h2 style={{ marginBottom: "20px" }}>Partner Kami</h2>
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <img src="cropped-DPMA-logo.png" style={{ height: "60px" }} />
          <img src="download.svg" style={{ height: "50px" }} />
          <img src="logo jeep tatamba - guci.png" style={{ height: "70px" }} />
          <img src="logo KLHK.png" style={{ height: "70px" }} />
          <img src="logo LMDH.png" style={{ height: "80px" }} />
        </div>
      </section>

      {/* <div
        style={{
          textAlign: "center",
          fontWeight: "700",
          fontSize: "15px",
          display: "flex",
          gap: "10px",
          alignItems: "center",
          color: "#f8f7ee",
          padding: "10px 30px",
          background: "linear-gradient(265.27deg, #0000 12%, #4BCEA6 94.17%)",
          backgroundColor: "#A9DD97",
          borderRadius: "30px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <span>In partnership with :</span>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <span>
            <img src="cropped-DPMA-logo.png" style={{ height: "40px" }} />
          </span>
          <span>
            <img src="download.svg" style={{ height: "30px" }} />
          </span>
          <span>
            <img
              src="logo jeep tatamba - guci.png"
              style={{ height: "40px" }}
            />
          </span>
          <span>
            <img src="logo KLHK.png" style={{ height: "40px" }} />
          </span>
          <span>
            <img src="logo LMDH.png" style={{ height: "40px" }} />
          </span>
        </div>
      </div> */}
    </div>
  );
};

export default Info;
