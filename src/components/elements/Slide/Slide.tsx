//import Image from "next/image";

import styles from "./Slide.module.css";
import  ImageSlider  from "./ImageSlider";

// const imgStyle = {
//   width: '100%',
//   height: 'auto',
// };



const Slide = () => {
  return (
    <div className={styles.Slide}>
      <div
        className="heroimg"
        style={{
          width: "100%",
          height: " 100% ",
          margin: "0 auto",
        }}
      >
        <ImageSlider />
      </div>
    </div>
  );
};

export default Slide;