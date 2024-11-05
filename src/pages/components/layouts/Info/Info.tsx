import Image from "next/image";
import styles from "./Info.module.css";
import { InfoWisata } from "../../../../../content_types";

const Info = ({infos}:{infos:InfoWisata[]}) => {
  return (
    <div className={styles.Info}>
      {infos?.map((item, index) => (
        <div key={index} className={styles.wrapper}>
        <div className={styles.innerWrapper}>
          <h3>{item.fields.nama}</h3>
          <p>
            {item.fields.deskripsi}
          </p>
        </div>
        <Image
          src={"http:" + item.fields.foto.fields.file.url}
          width={560}
          height={270}
          className={styles.img}
          alt=""
        />
      </div>
      ))|| <div>Data tidak tersedia</div>}
      {/* <div className={styles.wrapper}>
        <div className={styles.innerWrapper}>
          <h3>Bale Gandrung</h3>
          <p>
            Dengan luas area yang mencakup hutan dan pemandangan megah
            Gunung Slamet, Bale Gandrung menawarkan pengalaman berwisata alam
            yang autentik. Terdapat camping ground, area hortikultura, kebun
            kopi, serta Bale Utama sebagai pusat aktivitas. Terdapat juga
            saung-saung untuk bersantai, guest house untuk menginap, serta area
            multifungsi yang ideal untuk berbagai acara. Nikmati keindahan alam
            yang menyegarkan dan pengalaman budaya yang khas di Bale
            Gandrung—tempat di mana keindahan Gunung Slamet berpadu harmonis
            dengan kearifan lokal.
          </p>
        </div>
        <Image
          src="/DSC05762 (1).JPG"
          width={560}
          height={270}
          className={styles.img}
          alt=""
        />
      </div> */}
      {/* <div
        className={styles.wrapper}
        style={{ display: "flex", flexDirection: "row-reverse" }}
      >
        <div className={styles.innerWrapper}>
          <h3>Tatamba</h3>
          <p>
            Nikmati sensasi menyusuri jalur pendakian Gunung Slamet menggunakan
            jeep, melintasi hutan rindang, sungai alami, dan kawasan pertanian
            di tengah alam. Tatamba
            menjadi destinasi wisata tani rimba yang menggabungkan petualangan
            dan edukasi, di mana pengunjung dapat mengenal lebih dekat kekayaan
            hutan dan sentra sayuran yang terawat di kawasan ini.
          </p>
          <p>
             Mulailah petualangan Anda dari gapura masuk yang
            mempesona, lalu temukan sensasi berkeliling hutan dengan jeep
            melalui jalur yang asri dan alami. Nantikan pengalaman wisata alam
            yang tak terlupakan!.
          </p>
        </div>
        <Image
          src="/DSC05734.JPG"
          alt=""
          width={560}
          height={270}
          className={styles.img}
        />
      </div> */}
    </div>
  );
};

export default Info;

