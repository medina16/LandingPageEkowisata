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
  InfoWisata,
} from "../../content_types";
import PostCardLimited from "@/components/elements/PostCardLimited/PostCardLimited";
import Intro from "@/components/layouts/Intro/Intro";

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
  infos,
  slider,
  resservices,
  preview,
  beritas,
}: {
  pakets: PaketWisata[];
  faqs: FAQ[];
  testimonis: TestiContent[];
  galeri: FotoGaleri[];
  infos: InfoWisata[];
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

     

      {/* <section>Bale Gandrung dan Tatamba adalah dua destinasi wisata</section> */}
      <section>
      <Intro infos={infos}/>
      </section>
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

      {/* <svg style={{
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100%",
      }}
      width="1760" height="567" viewBox="0 0 1760 567" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 155.925L73.3206 135.135C146.641 114.345 293.282 72.7652 439.923 77.9627C586.564 83.1602 733.206 135.135 879.847 129.938C1026.49 124.74 1173.13 62.3702 1319.77 31.1851C1466.41 0 1613.05 0 1686.37 0H1759.69V567H1686.37C1613.05 567 1475.14 567 1328.5 567C1181.86 567 1026.49 567 879.847 567C733.206 567 586.564 567 439.923 567C293.282 567 146.641 567 73.3206 567H0V155.925Z" fill="url(#paint0_linear_345_7)"/>
<defs>
<linearGradient id="paint0_linear_345_7" x1="0" y1="140.333" x2="1759.69" y2="140.333" gradientUnits="userSpaceOnUse">
<stop stop-color="#4BCEA6"/>
<stop offset="1" stop-color="#A9DD97"/>
</linearGradient>
</defs>
</svg> */}
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
