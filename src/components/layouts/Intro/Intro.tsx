import Image from "next/image";
import styles from "./Intro.module.css";
import { InfoWisata } from "../../../../content_types";
import Button from "@/components/elements/Button/Button";
import Link from "next/link";

const Intro = ({ infos }: { infos: InfoWisata[] }) => {
  return (
    <div className={styles.Intro}>
      <div style={{ display: "flex", gap: "30px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            gap: "25px",
          }}
        >
          <div>
            <h2 style={{ marginBottom:"10px" }}>Yuk, wisata ke Tatamba dan Bale Gandrung!</h2>
            <p style={{ textAlign: "center" }}>
              Tatamba dan Bale Gandrung merupakan destinasi wisata di kawasan
              Gunung Slamet, Jawa Tengah yang cocok untuk menghabiskan hari
              dengan aktivitas outdoor sambil memanjakan mata dengan keindahan
              alam autentik.
            </p>
          </div>

          <div className={styles.wrapper}>
            {infos.map((item: InfoWisata, index: number) => (
              <div key={index} className={styles.lokasiContainer}>
                 <Link href={item.fields.linkMaps} key={index}
                  title={"Lokasi Maps " + item.fields.nama}
                  rel="noopener noreferrer"
                  target="_blank"
                 >
                <div className={styles.imgContainer}>
                  <Image
                    src={"https:" + item.fields.foto.fields.file.url}
                    className={styles.img}
                    alt={item.fields.nama}
                    fill
                    sizes="(max-width: 450px) 80vw, (max-width: 540px) 60vw, (max-width: 768px) 50vw, 30vw"
                  />
                </div>

                <div className={styles.contentContainer}>
                  <div>
                    <h3
                      style={{
                        display: "flex",
                        gap: "8px",
                        lineHeight: "normal",
                      }}
                    >
                      {item.fields.nama}
                    </h3>
                    <div style={{ lineHeight:"normal" }}>{item.fields.lokasi}</div>
                  </div>
                </div>
                </Link>
              </div>
            ))}
          </div>
          <div className={styles.benefitlist}>
            <div className={styles.benefit}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#72BF82"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M2 9a10 10 0 1 0 20 0" />
                <path d="M12 19a10 10 0 0 1 10 -10" />
                <path d="M2 9a10 10 0 0 1 10 10" />
                <path d="M12 4a9.7 9.7 0 0 1 2.99 7.5" />
                <path d="M9.01 11.5a9.7 9.7 0 0 1 2.99 -7.5" />
              </svg>
              Nikmati sensasi keasrian alam yang masih terjaga untuk liburan
              penuh makna. Anda bisa menghirup udara segar hutan pinus selagi
              menyusuri jalur hijau dengan jeep, atau berkemah di bawah
              bintang-bintang sambil ditemani kehangatan api unggun.
              {/* Nikmati petualangan seru menyusuri jalur alami dengan jeep adventure, sambil menghirup udara segar hutan pinus, melalui rimbunnya bambu yang menenangkan. Rasakan juga hangatnya malam dengan api unggun di bawah bintang-bintang, lalu disambut dengan sunrise indah langsung  */}
              {/* malam dengan api unggun dan bintang-bintang, Sunrise epik langsung
              dari depan tenda, hingga jeep adventure menyusuri jalur alami
              udara segar hutan pinus, rimbunnya bambu yang menenangkan, */}
              {/* Rasakan kedamaian dari relaksasi air panas di tengah hutan,
                camping di bawah bintang-bintang, hingga jeep adventure
                menyusuri jalur alami. Sunrise epik langsung dari depan tenda. ✔
                Dikelilingi keindahan hutan pinus dan bambu yang menenangkan.
                Bale Gandrung adalah tempat di mana alam, budaya, dan keramahan
                berpadu menciptakan harmoni yang sempurna. Dari udara segar
                hutan pinus, rimbunnya bambu yang menenangkan, hingga kehangatan
                masyarakat lokal, semuanya dirancang untuk menghadirkan liburan
                yang penuh makna.🌲⛺ Susuri jalur hijau penuh keindahan. 🔥
                Hangatkan malam dengan api unggun dan bintang-bintang. */}
            </div>
            <div className={styles.benefit}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#72BF82"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 15h10v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2v-4z" />
                <path d="M12 9a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3" />
                <path d="M12 11a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3" />
                <path d="M12 15l0 -6" />
              </svg>
              Penerapan sustainable ecotourism memperhatikan keseimbangan
              lingkungan, sehingga memungkinkan Anda untuk menikmati alam tanpa
              meninggalkan jejak negatif, sekaligus memberikan manfaat jangka
              panjang bagi masyarakat lokal.
              {/* kawasan hutan karbon produktif yang membantu
                menyerap emisi karbon sambil memberikan manfaat ekonomi untuk
                masyarakat sekitar. Setiap pohon yang kamu tanam membantu
                menjaga kelestarian hutan dan mendukung ekosistem lokal. Liburan
                seru, tapi tetap peduli lingkungan? Bisa banget di Guci! Semua
                aktivitas ini dirancang untuk menjaga keseimbangan lingkungan,
                sehingga Anda bisa menikmati alam tanpa meninggalkan jejak
                negatif. */}
            </div>
            <div className={styles.benefit}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#72BF82"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M16 5l3 3l-2 1l4 4l-3 1l4 4h-9" />
                <path d="M15 21l0 -3" />
                <path d="M8 13l-2 -2" />
                <path d="M8 12l2 -2" />
                <path d="M8 21v-13" />
                <path d="M5.824 16a3 3 0 0 1 -2.743 -3.69a3 3 0 0 1 .304 -4.833a3 3 0 0 1 4.615 -3.707a3 3 0 0 1 4.614 3.707a3 3 0 0 1 .305 4.833a3 3 0 0 1 -2.919 3.695h-4z" />
              </svg>
              Berbagai aktivitas edukatif yang dapat dilakukan tidak hanya akan
              memperluas wawasan Anda seputar lingkungan seperti tentang jejak
              karbon, tetapi juga membantu menumbuhkan kecintaan mendalam
              terhadap alam.
            </div>
          </div>

          <div style={{ minWidth: "300px" }}>
            <Button
              buttonlink="/about"
              buttontext="Baca Selengkapnya"
              buttontype="tertiary"
              icon="info"
            />
          </div>
        </div>
      </div>
    </div>
    // <div className={styles.Info}>

    // </div>
  );
};

export default Intro;
