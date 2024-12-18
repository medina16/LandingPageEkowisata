import { AlignJustify, ChevronRight, X } from "lucide-react";
import styles from "./NavBar.module.css";
import { useState } from "react";
import Link from "next/link";

const NavBar = () => {
  const [navOpen, NavListOpen] = useState(false);

  return (
    <div className={styles.NavBar}>
      <div style={{ display:"flex", alignItems: "center", gap: "10px" }}>
      <svg width="27" height="27" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="16.5" cy="16.5" r="16.5" fill="#D9D9D9"/>
<circle cx="16.5" cy="16.5" r="16.5" fill="#F8F7EE"/>
<path d="M9.4 8C11.2814 7.99968 13.0979 8.68821 14.5063 9.93558C15.9148 11.1829 16.5507 13.8323 16.7778 15.7C17.495 14.9494 18.6244 13.4227 19.5792 13.0152C20.5341 12.6077 21.5618 12.3984 22.6 12.4H25.9C26.1917 12.4 26.4715 12.5159 26.6778 12.7222C26.8841 12.9285 27 13.2083 27 13.5V14.6C27 16.6422 26.1888 18.6007 24.7447 20.0447C23.3007 21.4888 21.3422 22.3 19.3 22.3H17.1V26.7C17.1 26.9917 16.9841 27.2715 16.7778 27.4778C16.5715 27.6841 16.2917 27.8 16 27.8C15.7083 27.8 15.4285 27.6841 15.2222 27.4778C15.0159 27.2715 14.9 26.9917 14.9 26.7V19H12.7C10.6578 19 8.69931 18.1888 7.25528 16.7447C5.81125 15.3007 5 13.3422 5 11.3V9.1C5 8.80826 5.11589 8.52847 5.32218 8.32218C5.52847 8.11589 5.80826 8 6.1 8H9.4Z" fill="#72BF82"/>
<path d="M21 16C18.9694 16.9062 17.7055 18.2745 17 20" stroke="#F8F7EE" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 13C13.1818 13.9697 14.5398 15.4337 15.2979 17.28" stroke="#F8F7EE" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<h1> <span>Tatambale</span><span>Agroedutourism</span></h1>
      </div>
      
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
                    title="Beranda"
                    href="/#"
                    onClick={() => NavListOpen(!navOpen)}
                  >
                    Beranda
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
                <div className={styles.navlinkContainer}>
                  <Link
                    title="Tentang Kami"
                    href="/about"
                    onClick={() => NavListOpen(!navOpen)}
                  >
                    Tentang Kami
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
                    title="Berita"
                    href="/posts"
                    onClick={() => NavListOpen(!navOpen)}
                  >
                    Berita
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
