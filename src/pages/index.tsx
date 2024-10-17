import Testimoni from "./components/elements/Testimoni/Testimoni";

export default function Home() {
  return (
    <div className="main-wrapper">
      <section id="paket">
        <h2>Paket Wisata</h2>
      </section>
      <section id="galeri">
        <h2>Galeri</h2>
      </section>
      <section id="testi">
        <h2>Apa Kata Mereka?</h2>
        <div className="testi-wrapper">
          <Testimoni />
          <Testimoni />
          <Testimoni />
        </div>
      </section>
      <section id="faq">
        <h2>Pertanyaan yang Sering Diajukan</h2>
      </section>
    </div>
  );
}
