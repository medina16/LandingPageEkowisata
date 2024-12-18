import { ArtikelBerita } from "../../../../content_types";
import Image from "next/image";
import styles from "./PostCardLimited.module.css";
import Button from "../Button/Button";
import { CalendarFold } from "lucide-react";
import Link from "next/link";

const PostCardTiga = ({ posts }: { posts: ArtikelBerita[] }) => {
  return (
    <div className={styles.PostCardLimited}>
      <div className={styles.cardWrapper}>
        {posts.map((item, index) => (
          <Link
            href={"/posts/" + item.fields.slug}
            className={styles.postCard}
            key={index}
          >
            <div className={styles.imgContainer}>
              <Image
                src={"http:" + item.fields.foto.fields.file.url}
                alt={item.fields.judul}
                fill
                sizes="(max-width: 1023px): 100vw, 80vw"
                style={{ borderRadius: "15px 15px 0 0 ", objectFit: "cover" }}
              />
            </div>
            <div className={styles.postInfo}>
              <h3 className={styles.judulPost}>{item.fields.judul}</h3>
              <span style={{ fontWeight: "400" }}>
                <CalendarFold
                  style={{ height: "14px", width: "15px", marginRight: "3px" }}
                />
                {new Date(item.fields.tanggalPublikasi).toLocaleDateString(
                  "id-ID",
                  {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                )}
              </span>
            </div>
          </Link>
        ))}
      </div>
      <div className={styles.buttonWrapper}>
        <Button
          buttonlink="/posts"
          buttontext="Lihat Lebih Banyak"
          buttontype="tertiary"
          icon=""
        />
      </div>
    </div>
  );
};

export default PostCardTiga;
