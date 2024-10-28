import { CircleDot, Circle } from "lucide-react";
import { useState, useEffect } from "react";
import styles from "./Slide.module.css";
import Button from "../Button/Button";
import Image from "next/image";

type ImageSliderProps = {
  imageUrls: string[];
};

export function ImageSlider({ imageUrls }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex((index) => {
      if (index === imageUrls.length - 1) return 0;
      return index + 1;
    });
  }

  // Handle automatic sliding with proper cleanup
  useEffect(() => {
    const timeOut = setTimeout(() => {
      showNextImage();
    }, 4000); // Auto slide every 4 seconds

    // Cleanup timeout on re-render to prevent multiple timeouts
    return () => clearTimeout(timeOut);
  }, [imageIndex]); // Re-run effect only when imageIndex changes

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      
        <div className={styles.herotext}>
          <div
            style={{
              display: "flex",
              gap: ".25rem",
            }}
          >
            {imageUrls.map((_, index) => (
              <button
                key={index}
                className={styles.slidedot}
                onClick={() => setImageIndex(index)}
              >
                {index === imageIndex ? (
                  <CircleDot style={{ stroke: "#72BF82", fill: "#72BF82" }} />
                ) : (
                  <Circle style={{ fill: "#F9F9F2" }} />
                )}
              </button>
            ))}
          </div>
          <h2>Nikmati Pesona Kearifan Lokal</h2>
          <h3>Kasih tulisan keren apa gitu di sini.</h3>
          <div style={{width:"300px"}}><Button buttontext="Lihat Paket Wisata" buttonlink="#paket"/></div>
          
        </div>
        <div
        style={{
          background:
            "linear-gradient(90deg, rgba(9,26,48,0.7336182336182336) 0%, rgba(38,38,82,0.3328467153284671) 42%, rgba(0,111,255,0.10072992700729932) 100%)",
          display: "block",
          width: "100%",
          height: "100%",
          zIndex: "1",
          position: "absolute",
        }}
      ></div>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
        }}
      >
        {imageUrls.map((url) => (
          <Image
          width={1920}
          height={1280}
            key={url}
            alt=""
            src={url}
            className={styles.imgslides}
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>
    </div>
  );
}
