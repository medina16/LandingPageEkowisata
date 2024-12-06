import styles from "./posts.module.css";
import { ArtikelBerita } from "../../../content_types";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import { ArrowLeft, CalendarFold } from "lucide-react";
import Link from "next/link";

interface params {
  slug: string;
}

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_DELIVERY_API_TOKEN || "",
  // preview
  // ? process.env.CONTENTFUL_PREVIEW_API_TOKEN || ""
  // : process.env.CONTENTFUL_DELIVERY_API_TOKEN || "",
  // host: preview ? "preview.contentful.com" : "cdn.contentful.com",
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "artikelBerita",
  });

  const paths = res.items.map((item) => {
    return { params: { slug: item.fields.slug } };
  });

  return {
    paths,
    fallback: false, // halaman 404 kalo slug ga ketemu
  };
};

export async function getStaticProps({ params }: { params: params }) {
  const { items } = await client.getEntries({
    content_type: "artikelBerita",
    "fields.slug": params.slug, // Match the slug from the URL
  });

  if (!items.length) {
    return {
      notFound: true, // Return 404 if no matching post is found
    };
  }

  return {
    revalidate: 60,
    props: { post: items[0] },
  };
}

export default function Post({ post }: { post: ArtikelBerita }) {
  console.log(post);

  const date_str = post.fields.tanggalPublikasi;
  const date_object = new Date(date_str);

  return (
    <div className="main-wrapper rubik" style={{ paddingBottom: "30px" }}>
      <div className={styles.singlePost}>
        <div>
          <h2 style={{ lineHeight:"20px", marginBottom:"10px" }}>{post.fields.judul}</h2>
          <div><CalendarFold style={{height: "14px", width:"15px", marginRight:"3px"}}/> Diposting pada <b>{date_object.toLocaleDateString("id-ID", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</b></div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src={"http:" + post.fields.foto.fields.file.url}
            fill
            style={{ borderRadius: "15px", objectFit: "cover" }}
            sizes="(max-width: 1023px): 100vw, 80vw"
            alt={post.fields.judul}
          />
        </div>

        {documentToReactComponents(post.fields.teksArtikel)}
      </div>
        <Link href="/posts">
        <div style={{ display:"flex", gap:"6px", alignItems:"center" }}>
          <ArrowLeft style={{height: "18px", strokeWidth:"3px"}}/>
        Lihat Semua Artikel
        </div>
        
        </Link>
        
    </div>
  );
}
