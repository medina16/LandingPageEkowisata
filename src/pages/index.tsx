import FAQItem from "./components/elements/FAQItem/FAQItem";
import Testimoni from "./components/elements/Testimoni/Testimoni";
import Image from "next/image";
import Info from "./components/layouts/Info/Info";
import Galeri from "./components/elements/Galeri/Galeri";
import Button from "./components/elements/Button/Button";
import Paket from "./components/layouts/Paket/Paket";

export default function Home() {
  return (
    <div className="main-wrapper rubik">
      <section id="info">
        <Info/>
      </section>
      <section id="paket">
        <h2 className="sect-title">Paket Wisata</h2>
        <Paket/>
      </section>
      <section id="galeri">
        <h2 className="sect-title">Galeri</h2>
        <Galeri/>
      </section>
      <section id="testi">
        <h2 className="sect-title">Apa Kata Mereka?</h2>
          <Testimoni />
      </section>
      <section id="faq">
        <h2 className="sect-title">Pertanyaan yang Sering Diajukan</h2>
        <FAQItem />
      </section>
      <section style={{ paddingBottom:"0" }}>
        <h2 className="sect-title">AAAAAAAAAAAA</h2>
        <div style={{width:"300px"}}><Button buttontext="Reservasi Sekarang" buttonlink="/"/></div>
        <img src="/Vector (6).png" style={{minWidth:"1800px", maxHeight: "240px", padding:"0"}}/>
      </section>
    </div>
  );
}
