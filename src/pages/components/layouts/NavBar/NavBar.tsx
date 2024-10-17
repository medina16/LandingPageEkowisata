import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.NavBar}>
      <h1> Ekowisata Gambuhan-Guci</h1>
      <nav>
        <a href="#paket">Paket Wisata</a>
        <a href="#galeri">Galeri</a>
        <a href="#testi">Testimoni</a>
        <a href="#faq">FAQ</a>
      </nav>
    </div>
  );
};

export default NavBar;
