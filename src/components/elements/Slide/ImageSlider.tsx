import { CircleDot, Circle } from "lucide-react";
import { useState, useEffect } from "react";
import styles from "./Slide.module.css";
import Button from "../Button/Button";
import Image from "next/image";
import { Slider } from "../../../../content_types";

export default function ImageSlider({ slider }: { slider: Slider }) {
  const [imageIndex, setImageIndex] = useState(0);
  const imageUrls = [...slider.fields.kumpulanFoto];

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
              aria-label={"Slide " + (index + 1)}
              key={index}
              className={styles.slidedot}
              onClick={() => setImageIndex(index)}
              style={{ marginBottom: "10px" }}
            >
              {index === imageIndex ? (
                <CircleDot style={{ stroke: "#72BF82", fill: "#72BF82" }} />
              ) : (
                <Circle style={{ fill: "#F9F9F2" }} />
              )}
            </button>
          ))}
        </div>
        <h2>{slider.fields.headline}</h2>
        <h3>{slider.fields.subtitle}</h3>
        <div className={styles.buttonWrapper}>
          <Button
            buttontext="Lihat Paket Wisata"
            buttonlink="#paket"
            icon=""
            buttontype="primary"
          />
        </div>

   
  
      </div>
      <div
        style={{
          background: "#15342a7d",
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
        {imageUrls.map((foto) => (
          <div
            className={styles.imgContainer}
            style={{ translate: `${-100 * imageIndex}%` }}
            key={foto.fields.file.url}
          >
            <Image
              alt={foto.fields.title}
              fill
              // sizes="100vw"
              sizes="(max-width: 450px) 70vw, 60vw"
              src={"http:" + foto.fields.file.url}
              className={styles.imgslides}
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
}
