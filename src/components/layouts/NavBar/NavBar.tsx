import { AlignJustify, ChevronRight, X } from "lucide-react";
import styles from "./NavBar.module.css";
import { useState } from "react";

const NavBar = () => {
  const [navOpen, NavListOpen] = useState(false);

  return (
    <div className={styles.NavBar}>
      <h1> Guci-Gambuhan Agroedutourism</h1>
      <div style={{ display: "flex" }}>
        <div className={styles.navicon} onClick={() => NavListOpen(!navOpen)}>
          {navOpen ?  <X /> : <AlignJustify style={{stroke:"white"}}/>}
        </div>
        <div className={styles.navlink}>
          <nav>
            <a title="Paket Wisata" href="#paket">Paket Wisata</a>
            <a title="Galeri" href="#galeri">Galeri</a>
            <a title="Testimoni" href="#testi">Testimoni</a>
            <a title="FAQ" href="#faq">FAQ</a>
            <a title="Kontak" href="#kontak">Kontak</a>
          </nav>
        </div>
        {navOpen && (
          <div className={styles.navlinklist}>
            <div className={styles.overlay}>
              <nav>
                <div className={styles.navlinkContainer}>
                  <a title="Paket Wisata" href="#paket" onClick={() => NavListOpen(!navOpen)}>
                    Paket Wisata
                  </a>
                  <ChevronRight style={{stroke: "#72BF82", strokeWidth:"3", width:"50px"}}/>
                </div>
                <div className={styles.navlinkContainer}>
                  <a title="Galeri" href="#galeri" onClick={() => NavListOpen(!navOpen)}>
                    Galeri
                  </a>
                  <ChevronRight style={{stroke: "#72BF82", strokeWidth:"3", width:"50px"}}/>
                </div>
                <div className={styles.navlinkContainer}>
                  <a title="Testimoni" href="#testi" onClick={() => NavListOpen(!navOpen)}>
                    Testimoni
                  </a>
                  <ChevronRight style={{stroke: "#72BF82", strokeWidth:"3", width:"50px"}}/>
                </div>
                <div className={styles.navlinkContainer}>
                  <a title="FAQ"  href="#faq" onClick={() => NavListOpen(!navOpen)} >
                    FAQ
                  </a>
                  <ChevronRight style={{stroke: "#72BF82", strokeWidth:"3", width:"50px"}}/>
                </div>
                <div className={styles.navlinkContainer} style={{ borderBottom:"3px solid #cbdbc6" }}>
                  <a title="Kontak"  href="#kontak" onClick={() => NavListOpen(!navOpen)} >
                    Kontak
                  </a>
                  <ChevronRight style={{stroke: "#72BF82", strokeWidth:"3", width:"50px"}}/>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
