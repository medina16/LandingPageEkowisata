import { ChevronUp } from "lucide-react";
import styles from "./MedSos.module.css"
import Link from "next/link";

const NextPrev = () => {
    return(
    <div className={styles.MedSos}>
        <a title="Scroll ke Atas" className={styles.scrollUp} href="#"><ChevronUp style={{stroke:"white"}}/></a>
        <Link title="Kontak Kami" className={styles.kontak} href="/#kontak"><i className="fa fa-comments-o" aria-hidden="true"></i></Link>
        <Link title="Kontak WhatsApp" className={styles.sosmed} href="/#kontak"><i className="fa fa-whatsapp" aria-hidden="true"></i></Link>
        <Link title="Kontak Instagram" className={styles.sosmed} href="/#kontak"><i className="fa fa-instagram" aria-hidden="true"></i></Link>
        <Link title="Kontak Facebook" className={styles.sosmed} href="/#kontak"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
    </div>
    );
};

export default NextPrev;

