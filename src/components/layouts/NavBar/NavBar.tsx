import { AlignJustify, ChevronRight, X } from "lucide-react";
import styles from "./NavBar.module.css";
import { useState } from "react";

const NavBar = () => {
  const [navOpen, NavListOpen] = useState(false);

  return (
    <div className={styles.NavBar}>
      <h1> Guci Ecoedutourism</h1>
      <div style={{ display: "flex" }}>
        <div className={styles.navicon} onClick={() => NavListOpen(!navOpen)}>
          {navOpen ?  <X /> : <AlignJustify style={{stroke:"white"}}/>}
        </div>
        <div className={styles.navlink}>
          <nav>
            <a href="#paket">Paket Wisata</a>
            <a href="#galeri">Galeri</a>
            <a href="#testi">Testimoni</a>
            <a href="#faq">FAQ</a>
            <a href="#kontak">Kontak</a>
          </nav>
        </div>
        {navOpen && (
          <div className={styles.navlinklist}>
            <div className={styles.overlay}>
              <nav>
                <div className={styles.navlinkContainer}>
                  <a href="#paket" onClick={() => NavListOpen(!navOpen)}>
                    Paket
                  </a>
                  <ChevronRight style={{stroke: "#72BF82", strokeWidth:"3", width:"50px"}}/>
                </div>
                <div className={styles.navlinkContainer}>
                  <a href="#galeri" onClick={() => NavListOpen(!navOpen)}>
                    Galeri
                  </a>
                  <ChevronRight style={{stroke: "#72BF82", strokeWidth:"3", width:"50px"}}/>
                </div>
                <div className={styles.navlinkContainer}>
                  <a href="#testi" onClick={() => NavListOpen(!navOpen)}>
                    Testimoni
                  </a>
                  <ChevronRight style={{stroke: "#72BF82", strokeWidth:"3", width:"50px"}}/>
                </div>
                <div className={styles.navlinkContainer}>
                  <a href="#faq" onClick={() => NavListOpen(!navOpen)} >
                    FAQ
                  </a>
                  <ChevronRight style={{stroke: "#72BF82", strokeWidth:"3", width:"50px"}}/>
                </div>
                <div className={styles.navlinkContainer} style={{ borderBottom:"3px solid #cbdbc6" }}>
                  <a href="#kontak" onClick={() => NavListOpen(!navOpen)} >
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
