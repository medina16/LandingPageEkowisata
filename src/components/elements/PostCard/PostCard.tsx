import { ArtikelBerita } from "../../../../content_types";
import Image from "next/image";
import styles from "./PostCard.module.css";
import Button from "../Button/Button";
import { CalendarFold } from "lucide-react";

const PostCard = ({ post }: { post: ArtikelBerita }) => {
  return (
    <div className={styles.PostCard}>
      {/* <Link href={"/posts/" + post.fields.slug}> */}

      <div className={styles.imgContainer}>
        <Image
          src={"http:" + post.fields.foto.fields.file.url}
          fill
          sizes="(max-width: 1023px): 100vw, 80vw"
          style={{ objectFit: "cover" }}
          alt={post.fields.judul}
        />
      </div>
      <div className={styles.postInfo}>
        <h3 style={{ marginBottom: "8px" }}>{post.fields.judul}</h3>
        <div>
          <CalendarFold
            style={{ height: "15px", width: "15px", marginRight: "5px" }}
          />
          {new Date(post.fields.tanggalPublikasi).toLocaleDateString(
                  "id-ID",
                  {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                )}
        </div>
        <div className={styles.ikhtisar} style={{ 
          lineHeight: "20px" 
          }}>
          {post.fields.ikhtisar}
        </div>
        <div style={{ maxWidth: "250px", marginTop: "15px" }}>
          <Button
            buttonlink={"/posts/" + post.fields.slug}
            buttontype="primary"
            buttontext="Baca Selengkapnya"
            icon="info"
          />
        </div>
      </div>

      {/* </Link> */}
    </div>
  );
};

export default PostCard;
