//import Image from "next/image";

import styles from "./Slide.module.css";
import  ImageSlider  from "./ImageSlider";
import { Slider } from "../../../../content_types";

// const imgStyle = {
//   width: '100%',
//   height: 'auto',
// };



const Slide = ({slider}: {slider: Slider}) => {
  return (
    <div className={styles.Slide}>
      <div
        className="heroimg"
        style={{
          width: "100vw",
          height: " 100% ",
          margin: "0 auto",
        }}
      >
        <ImageSlider slider={slider}/>
        
      </div>
    </div>
  );
};

export default Slide;