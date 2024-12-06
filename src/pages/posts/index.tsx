import { createClient } from "contentful";
import { ArtikelBerita } from "../../../content_types";
import PostCard from "@/components/elements/PostCard/PostCard";
import styles from "./posts.module.css";


export async function getStaticProps({ preview = false }) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || "",
    accessToken: preview
      ? process.env.CONTENTFUL_PREVIEW_API_TOKEN || ""
      : process.env.CONTENTFUL_DELIVERY_API_TOKEN || "",
    host: preview ? "preview.contentful.com" : "cdn.contentful.com",
  });

  const resBerita = await client.getEntries({ content_type: "artikelBerita" });

  return {
    props: {
      revalidate: 60,
      beritas: resBerita.items,
      preview,
    },
  };
}

function compare(a: ArtikelBerita, b: ArtikelBerita) {
  if (new Date(a.fields.tanggalPublikasi) > new Date(b.fields.tanggalPublikasi)) {
    return -1;
  }
  if (new Date(a.fields.tanggalPublikasi) < new Date(b.fields.tanggalPublikasi)) {
    return 1;
  }
  return 0;
}


const Berita = ({ beritas }: { beritas: ArtikelBerita[] }) => {

  beritas.sort(compare);


  return (
    <div className="rubik main-wrapper" style={{ paddingTop:"30px", paddingBottom: "30px" }}>
      <h2>Berita</h2>
      <div className={styles.postsWrapper}>
        {beritas.map((post, index) => (
          <PostCard key={index} post={post}/>
        ))}
      </div>
    </div>
  );
};

export default Berita;
