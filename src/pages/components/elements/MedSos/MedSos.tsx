import styles from "./MedSos.module.css"

const NextPrev = () => {
    return(
    <div className={styles.MedSos}>
        <a className={styles.sosmed} href="#kontak"><i className="fa fa-whatsapp" aria-hidden="true"></i></a>
        <a className={styles.sosmed} href="#kontak"><i className="fa fa-instagram" aria-hidden="true"></i></a>
    </div>
    );
};

export default NextPrev;