//import Image from "next/image";

import styles from "./Slide.module.css";
import { ImageSlider } from "./ImageSlider";

// const imgStyle = {
//   width: '100%',
//   height: 'auto',
// };

const IMAGES = [
  "/DJI_0811.JPG",
  "/DSC05718.JPG",
  "/DSC05734.JPG",
  "/DSC05762 (1).JPG",
  "/DJI_0822.JPG",
];

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
        <ImageSlider imageUrls={IMAGES} />
      </div>
    </div>
  );
};

export default Slide;

{
  /* <Image
          alt=""
          src="/DSC05718.JPG"
          width={0}
          height={0}
          unoptimized={true}
          style={imgStyle}
        />
        <Image
          alt=""
          src="/DSC05734.JPG"
          width={0}
          height={0}
          unoptimized={true}
          style={imgStyle}
        /> */
}
