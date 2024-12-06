import { AlignJustify, ChevronRight, X } from "lucide-react";
import styles from "./NavBar.module.css";
import { useState } from "react";
import Link from "next/link";

const NavBar = () => {
  const [navOpen, NavListOpen] = useState(false);

  return (
    <div className={styles.NavBar}>
      <h1> Tatambale Agroedutourism</h1>
      <div style={{ display: "flex" }}>
        <div className={styles.navicon} onClick={() => NavListOpen(!navOpen)}>
          {navOpen ? <X /> : <AlignJustify style={{ stroke: "white" }} />}
        </div>
        <div className={styles.navlink}>
          <nav>
            <div className={styles.dropdown}>
              <button style={{ all:"unset" }}>
                {" "}
                <Link title="Beranda" href="/#">
                  Beranda
                </Link>
              </button>

              <div className={styles.dropdownContent}>
                <Link title="Paket Wisata" href="/#paket">
                  Paket Wisata
                </Link>
                <Link title="Reservasi & Layanan" href="/#reservasi">
                  Reservasi & Layanan
                </Link>
                <Link title="Galeri" href="/#galeri">
                  Galeri
                </Link>
                <Link title="Testimoni" href="/#testi">
                  Testimoni
                </Link>
                <Link title="FAQ" href="/#faq">
                  FAQ
                </Link>
              </div>
            </div>
            <Link href="/about">Tentang Kami</Link>
            <Link href="/posts">Berita</Link>
            
            {/* <Link title="Kontak" href="/#kontak">Kontak</Link> */}
          </nav>
        </div>
        {navOpen && (
          <div className={styles.navlinklist}>
            <div className={styles.overlay}>
              <nav>
                <div className={styles.navlinkContainer}>
                  <Link
                    title="Paket Wisata"
                    href="/#paket"
                    onClick={() => NavListOpen(!navOpen)}
                  >
                    Paket Wisata
                  </Link>
                  <ChevronRight
                    style={{
                      stroke: "#72BF82",
                      strokeWidth: "3",
                      width: "50px",
                    }}
                  />
                </div>
                <div className={styles.navlinkContainer}>
                  <Link
                    title="Paket Wisata"
                    href="/#reservasi"
                    onClick={() => NavListOpen(!navOpen)}
                  >
                    Reservasi & Layanan
                  </Link>
                  <ChevronRight
                    style={{
                      stroke: "#72BF82",
                      strokeWidth: "3",
                      width: "50px",
                    }}
                  />
                </div>
                <div className={styles.navlinkContainer}>
                  <Link
                    title="Galeri"
                    href="/#galeri"
                    onClick={() => NavListOpen(!navOpen)}
                  >
                    Galeri
                  </Link>
                  <ChevronRight
                    style={{
                      stroke: "#72BF82",
                      strokeWidth: "3",
                      width: "50px",
                    }}
                  />
                </div>
                <div className={styles.navlinkContainer}>
                  <Link
                    title="Testimoni"
                    href="/#testi"
                    onClick={() => NavListOpen(!navOpen)}
                  >
                    Testimoni
                  </Link>
                  <ChevronRight
                    style={{
                      stroke: "#72BF82",
                      strokeWidth: "3",
                      width: "50px",
                    }}
                  />
                </div>
                <div className={styles.navlinkContainer}>
                  <Link
                    title="FAQ"
                    href="/#faq"
                    onClick={() => NavListOpen(!navOpen)}
                  >
                    FAQ
                  </Link>
                  <ChevronRight
                    style={{
                      stroke: "#72BF82",
                      strokeWidth: "3",
                      width: "50px",
                    }}
                  />
                </div>
                {/* <div className={styles.navlinkContainer} style={{ borderBottom:"3px solid #cbdbc6" }}>
                  <Link title="Kontak"  href="#kontak" onClick={() => NavListOpen(!navOpen)} >
                    Kontak
                  </Link>
                  <ChevronRight style={{stroke: "#72BF82", strokeWidth:"3", width:"50px"}}/>
                </div> */}
              </nav>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
