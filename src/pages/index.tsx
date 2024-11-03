import FAQItem from "./components/elements/FAQItem/FAQItem";
import Testimoni from "./components/elements/Testimoni/Testimoni";
import Info from "./components/layouts/Info/Info";
import Galeri from "./components/elements/Galeri/Galeri";
import Button from "./components/elements/Button/Button";
import Paket from "./components/layouts/Paket/Paket";
import { createClient } from "contentful";

export async function getStaticProps(){
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID||"",
    accessToken: process.env.CONTENTFUL_DELIVERY_API_TOKEN||""
  })
  const resFAQ = await client.getEntries({content_type: 'faq'})
  const resPakWis = await client.getEntries({content_type: 'paketWisata'})
  const resTesti = await client.getEntries({content_type: 'testimoni'})
  const resGaleri = await client.getEntries({content_type: "fotoGaleri"})
  const resInfos = await client.getEntries({content_type: "infoWisata"})

  return{
    props:{
      faqs: resFAQ.items,
      pakets: resPakWis.items,
      testimonis: resTesti.items,
      galeri: resGaleri.items,
      infos: resInfos.items
    }
  }
}

export default function Home({faqs, pakets, testimonis, galeri, infos}) {
  console.log(faqs)
  console.log(pakets)
  console.log(testimonis)
  return (
    <div className="main-wrapper rubik">
      <section id="info">
        <Info infos={infos}/>
      </section>
      <section id="paket">
        <h2 className="sect-title">Paket Wisata</h2>
        <Paket pakets={pakets}/>
      </section>
      <section id="galeri">
        <h2 className="sect-title">Galeri</h2>
        <Galeri galeri={galeri}/>
      </section>
      <section id="testi">
        <h2 className="sect-title">Apa Kata Mereka?</h2>
          <Testimoni testimonis={testimonis}/>
      </section>
      <section id="faq">
        <h2 className="sect-title">Pertanyaan yang Sering Diajukan</h2>
        <FAQItem faqs={faqs}/>
      </section>
      <section style={{ paddingBottom:"0" }}>
        <h2 className="sect-title">Masih punya pertanyaan?</h2>
        <div style={{width:"300px"}}><Button buttontype="secondary" buttontext="Hubungi Kami" buttonlink=""/></div>
        <img src="/Vector (6).png" alt="" style={{minWidth:"1800px", maxHeight: "240px", padding:"0"}}/>
      </section>
    </div>
  );
}
