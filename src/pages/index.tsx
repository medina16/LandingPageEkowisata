import FAQItem from "../components/elements/FAQItem/FAQItem";
import Testimoni from "../components/elements/Testimoni/Testimoni";
import Info from "../components/layouts/Info/Info";
import Galeri from "../components/elements/Galeri/Galeri";
import Paket from "../components/layouts/Paket/Paket";
import { createClient } from "contentful";
import { Slider, FAQ, PaketWisata, Testimoni as TestiContent, FotoGaleri, InfoWisata } from '../../content_types';
import Kontak from "@/components/layouts/Kontak/Kontak";
import Slide from "@/components/elements/Slide/Slide";



export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_DELIVERY_API_TOKEN || "",
  });
  const resFAQ = await client.getEntries({ content_type: "faq" });
  const resPakWis = await client.getEntries({ content_type: "paketWisata" });
  const resTesti = await client.getEntries({ content_type: "testimoni" });
  const resGaleri = await client.getEntries({ content_type: "fotoGaleri" });
  const resInfos = await client.getEntries({ content_type: "infoWisata" });
  const resSlider = await client.getEntries({ content_type: "carousel" });

  return {
    props: {
      faqs: resFAQ.items,
      pakets: resPakWis.items,
      testimonis: resTesti.items,
      galeri: resGaleri.items,
      infos: resInfos.items,
      slider: resSlider.items.at(0),
    },
  };
}

export default function Home({ faqs, pakets, testimonis, galeri, infos, slider } : { pakets: PaketWisata[], faqs: FAQ[], testimonis: TestiContent[], galeri: FotoGaleri[], infos: InfoWisata[], slider: Slider }) {
  return (
    
    <div className="main-wrapper rubik">
      <header>
            <Slide slider={slider}/>
            
          </header>
      {/* <section>Bale Gandrung dan Tatamba adalah dua destinasi wisata</section> */}
      <section id="info">
        <Info infos={infos} />
      </section>
      {/* <section id="lokasi">
        <h2 className="sect-title">Lokasi</h2>
        <div
          style={{
            display: "flex",
            gap: "25px",
            width: "100%",
            flexDirection: "column",
          }}
        >
          <div className="mapswrapper">
            <iframe
              style={{ border: "2px solid white", borderRadius: "12px" }}
              width="100%"
              height="300"
              loading="lazy"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Wisata%20Alam%20Bale%20Gandrung&zoom=10&maptype=roadmap"
            ></iframe>
            <div style={{ display: "flex", gap: "8px" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-map-pin"
              >
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div>
                <h3>Bale Gandrung</h3>
                <p>
                  Jl. Raya Karangsari-Guci, Desa Gambuhan, Kec. Pulosari, Kab.
                  Pemalang, Jawa Tengah 52355
                </p>
              </div>
            </div>
          </div>
          <div className="mapswrapper">
            <iframe
              style={{ border: "2px solid white", borderRadius: "12px" }}
              width="100%"
              height="300"
              loading="lazy"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Jeep%20Guci%20Tatamba&zoom=10&maptype=roadmap"
            ></iframe>
            <div style={{ display: "flex", gap: "8px" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-map-pin"
              >
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div>
                <h3>Tatamba</h3>
                <p>
                  Jl. Lingkar Barat Obyek Wisata Guci No. 01 (Blok Makam Kyai
                  Klitik), Kab. Tegal, Jawa Tengah 52466
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section id="paket">
        <h2 className="sect-title">Paket Wisata</h2>
        <Paket pakets={pakets} />
      </section>

      <section id="galeri">
        <h2 className="sect-title">Galeri</h2>
        <Galeri galeri={galeri} />
      </section>
      <section id="testi">
        <h2 className="sect-title">Apa Kata Mereka?</h2>
        <Testimoni testimonis={testimonis} />
      </section>
      <section id="faq">
        <h2 className="sect-title">Pertanyaan yang Sering Diajukan</h2>
        <FAQItem faqs={faqs} />
      </section>
      <section id="kontak" style={{ paddingBottom: "0" }}>
        <h2 className="sect-title" style={{ marginBottom:"15px"}}>Masih punya pertanyaan?</h2>
        <Kontak/>

        <img
          src="/Vector (6).png"
          alt=""
          style={{ width: "100vw", maxHeight: "150px", padding: "0", marginTop: "30px"}}
        />
      </section>
    </div>
  );
}
