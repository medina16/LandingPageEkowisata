import { createClient } from "contentful";
import { ArtikelBerita } from "../../../content_types";
import PostCard from "@/components/elements/PostCard/PostCard";
import styles from "./posts.module.css";
import Pagination from "@/components/elements/Pagination/Pagination";

export async function getServerSideProps({ query }: { query: { page?: string } }) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_DELIVERY_API_TOKEN || "",
    host: "cdn.contentful.com",
  });

  const pageSize = 5; // Number of posts per page
  const currentPage = parseInt(query.page || "1", 10); // Current page from query params
  const skip = (currentPage - 1) * pageSize;

  // Fetch entries for the current page
  const resBerita = await client.getEntries({
    content_type: "artikelBerita",
    limit: pageSize,
    skip,
    order: ["-fields.tanggalPublikasi"],
    select: [
      "fields.judul",
      "fields.slug",
      "fields.ikhtisar",
      "fields.foto",
      "fields.tanggalPublikasi",
    ], 
  });

  const totalPages = Math.ceil(resBerita.total / pageSize);

  // Redirect to 404 if the currentPage exceeds totalPages or is invalid
  if (isNaN(currentPage) || currentPage < 1 || currentPage > totalPages) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      beritas: resBerita.items,
      total: resBerita.total,
      currentPage,
      pageSize,
    },
  };
}

const Berita = ({
  beritas,
  total,
  currentPage,
  pageSize,
}: {
  beritas: ArtikelBerita[];
  total: number;
  currentPage: number;
  pageSize: number;
}) => {

  return (
    <div className="rubik main-wrapper" style={{ paddingTop: "30px", paddingBottom: "30px" }}>
      <h2 style={{ fontSize: "30px", marginBottom: "20px" }}>Berita</h2>
      <div className={styles.postsWrapper}>
        <Pagination
          items={total}
          currentPage={currentPage}
          pageSize={pageSize}
    
        />
        {beritas.map((post: ArtikelBerita, index: number) => (
          <PostCard key={index} post={post} />
        ))}
        <Pagination
          items={total}
          currentPage={currentPage}
          pageSize={pageSize}
        
        />
      </div>
    </div>
  );
};

export default Berita;
