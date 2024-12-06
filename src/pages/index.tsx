import FAQItem from "../components/elements/FAQItem/FAQItem";
import Testimoni from "../components/elements/Testimoni/Testimoni";
// import Info from "../components/layouts/Info/Info";
import Galeri from "../components/elements/Galeri/Galeri";
import Paket from "../components/layouts/Paket/Paket";
import ResService from "@/components/layouts/ResService/ResService";
import Kontak from "@/components/layouts/Kontak/Kontak";
import Slide from "@/components/elements/Slide/Slide";
import { createClient } from "contentful";
import {
  Slider,
  FAQ,
  PaketWisata,
  Testimoni as TestiContent,
  FotoGaleri,
  // InfoWisata,
  ArtikelBerita,
  ResService as ResServiceContent,
} from "../../content_types";
import PostCardLimited from "@/components/elements/PostCardLimited/PostCardLimited";
import Button from "@/components/elements/Button/Button";

function compare(a: ArtikelBerita, b: ArtikelBerita) {
  if (
    new Date(a.fields.tanggalPublikasi) > new Date(b.fields.tanggalPublikasi)
  ) {
    return -1;
  }
  if (
    new Date(a.fields.tanggalPublikasi) < new Date(b.fields.tanggalPublikasi)
  ) {
    return 1;
  }
  return 0;
}

export async function getStaticProps({ preview = false }) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || "",
    accessToken: preview
      ? process.env.CONTENTFUL_PREVIEW_API_TOKEN || ""
      : process.env.CONTENTFUL_DELIVERY_API_TOKEN || "",
    host: preview ? "preview.contentful.com" : "cdn.contentful.com",
  });

  const resFAQ = await client.getEntries({ content_type: "faq" });
  const resPakWis = await client.getEntries({ content_type: "paketWisata" });
  const resTesti = await client.getEntries({ content_type: "testimoni" });
  const resGaleri = await client.getEntries({ content_type: "fotoGaleri" });
  const resInfos = await client.getEntries({ content_type: "infoWisata" });
  const resSlider = await client.getEntries({ content_type: "carousel" });
  const resResService = await client.getEntries({ content_type: "resService" });
  const resBerita = await client.getEntries({ content_type: "artikelBerita" });

  return {
    revalidate: 60,
    props: {
      faqs: resFAQ.items,
      pakets: resPakWis.items,
      testimonis: resTesti.items,
      galeri: resGaleri.items,
      infos: resInfos.items,
      slider: resSlider.items.at(0),
      resservices: resResService.items,
      beritas: resBerita.items,
      preview,
    },
  };
}

export default function Home({
  faqs,
  pakets,
  testimonis,
  galeri,
  // infos,
  slider,
  resservices,
  preview,
  beritas,
}: {
  pakets: PaketWisata[];
  faqs: FAQ[];
  testimonis: TestiContent[];
  galeri: FotoGaleri[];
  // infos: InfoWisata[];
  slider: Slider;
  resservices: ResServiceContent[];
  beritas: ArtikelBerita[];
  preview: boolean;
}) {
  beritas.sort(compare);
  beritas = beritas.slice(0, 3);

  return (
    <div className="main-wrapper rubik">
      {preview && <div className="preview-banner">Preview Mode</div>}
      <header>
        <Slide slider={slider} />
      </header>

      <div
        
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "30px",
            marginTop: "30px",
            fontSize: "35px",
          }}
        >
          Yuk, wisata ke Tatamba dan Bale Gandrung!
        </h2>
        <div style={{ display: "flex", gap: "30px" }}>
          <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}>
            <p>
              Tatamba dan Bale Gandrung merupakan tempat yang cocok untuk
              menghabiskan hari dengan aktivitas outdoor sambil memanjakan mata
              dengan keindahan alam autentik. Dengan konsep <b>agroeduwisata</b>
              , kedua destinasi wisata di kawasan Gunung Slamet, Jawa Tengah ini
              tidak hanya menawarkan <b>pengalaman seru</b>, tetapi juga
              mendukung <b>pelestarian alam</b> setempat dan menjadi sarana{" "}
              <b>edukasi</b> yang menyenangkan.
            </p>
            <br />
            <div style={{ minWidth: "300px" }}>
              <Button
                buttonlink="/about"
                buttontext="Selengkapnya"
                buttontype="tertiary"
                icon="info"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <section>Bale Gandrung dan Tatamba adalah dua destinasi wisata</section> */}
      <section id="info">{/* <Info infos={infos} /> */}</section>
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
      <section id="reservasi">
        <h2 className="sect-title">Reservasi Venue & Layanan Lainnya</h2>
        <ResService resservices={resservices} />
      </section>
      <section id="galeri">
        <h2 className="sect-title">Galeri</h2>
        <Galeri galeri={galeri} />
      </section>
      <section id="testi">
        <h2 className="sect-title">Apa Kata Mereka?</h2>
        <Testimoni testimonis={testimonis} />
      </section>
      <section>
        <h2 className="sect-title">Berita Terbaru</h2>
        <PostCardLimited posts={beritas} />
      </section>

      <section id="faq">
        <h2 className="sect-title">Pertanyaan yang Sering Diajukan</h2>
        <FAQItem faqs={faqs} />
      </section>

      <section id="kontak" style={{ paddingBottom: "0" }}>
        <h2 className="sect-title" style={{ marginBottom: "15px" }}>
          Masih punya pertanyaan?
        </h2>
        <Kontak />
      </section>

      <svg
        style={{
          width: "1200px",
          minWidth: "100vw",
          height: "auto",
          maxHeight: "200px",
          padding: "0",
        }}
        viewBox="0 0 1511 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 133.889L62.9583 116.037C125.917 98.1852 251.833 62.4815 377.75 66.9444C503.667 71.4074 629.583 116.037 755.5 111.574C881.417 107.111 1007.33 53.5556 1133.25 26.7778C1259.17 0 1385.08 0 1448.04 0H1511V241H1448.04C1385.08 241 1259.17 241 1133.25 241C1007.33 241 881.417 241 755.5 241C629.583 241 503.667 241 377.75 241C251.833 241 125.917 241 62.9583 241H0V133.889Z"
          fill="url(#paint0_linear_345_7)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_345_7"
            x1="0"
            y1="120.5"
            x2="1511"
            y2="120.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4BCEA6" />
            <stop offset="1" stopColor="#A9DD97" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
