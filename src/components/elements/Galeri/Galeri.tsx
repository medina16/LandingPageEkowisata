import Image from "next/image";
import styles from "./Galeri.module.css";
import NextPrev from "../NextPrevButton/NextPrev";
import { useEffect, useState, useRef } from "react";
import { Circle, CircleDot, X } from "lucide-react";
import { FotoGaleri } from "../../../../content_types";

const Galeri = ({ galeri }: { galeri: FotoGaleri[] }) => {
  const [groupedImg, setGroupedData] = useState<FotoGaleri[][]>([]);
  const [responsiveWidth, setResponsiveWidth] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);

  const [modal, setModal] = useState(false);
  const [selectedImageID, openImage] = useState("");

  const wrapperRef = useRef<HTMLDivElement>(null);

  const groupGallery = () => {
    const width = window.innerWidth;
    const slideGroup = [];

    if (width > 1190) {
      for (let i = 0; i < galeri.length; i += 2) {
        slideGroup.push(galeri.slice(i, i + 2));
      }
    } else if (width > 540) {
      for (let i = 0; i < galeri.length; i += 6) {
        slideGroup.push(galeri.slice(i, i + 6));
      }
    } else {
      for (let i = 0; i < galeri.length; i++) {
        slideGroup.push([galeri[i]]);
      }
    }
    setGroupedData(slideGroup);
    setResponsiveWidth(width);
  };

  // Handle the scroll event to update the visible slide index
  const handleScroll = () => {
    if (wrapperRef.current) {
      const { scrollLeft, offsetWidth } = wrapperRef.current;
      const newIndex = Math.round(scrollLeft / offsetWidth);
      setSlideIndex(newIndex);
    }
  };

  const scrollToIndex = (index: number) => {
    if (responsiveWidth > 1190) {
      setSlideIndex(index);
    } else if (wrapperRef.current) {
      wrapperRef.current.scrollTo({
        left: index * wrapperRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  function showNext() {
    setSlideIndex((index) => {
      if (slideIndex >= galeri.length / 6 - 1) return 0;
      return index + 1;
    });
  }
  function showPrev() {
    setSlideIndex((index) => {
      if (slideIndex === 0 || slideIndex>galeri.length / 6 - 1) return galeri.length / 6 - 1;
      return index - 1;
    });
  }

  useEffect(() => {
    groupGallery();

    // Resize event listener
    const handleResize = () => groupGallery();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [galeri]);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (wrapper) {
      wrapper.addEventListener("scroll", handleScroll);
    }
    return () => wrapper?.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleModal = () => setModal(!modal);
  const imageModal = (id: string) => {
    toggleModal();
    openImage(id);
  };

  function getSelectedImage(images: FotoGaleri[]) {
    return (
      images.find((foto: FotoGaleri) => foto.sys.id === selectedImageID) || null
    );
  }

  return (
    <div className={styles.bigGallWrapper}>
      <div className={styles.nextprevWrapper}>
        <button style={{ all: "unset" }} aria-label="Previous" onClick={showPrev}>
          <NextPrev direction={false}></NextPrev>
        </button>
      </div>

      <div className={styles.wrapper} ref={wrapperRef}>
        <div
          className={styles.Galeri}
          style={
            responsiveWidth > 1190
              ? { transform: `translateX(${-100 * slideIndex}%)` }
              : undefined
          }
        >
          {groupedImg.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className={styles.groupGall}
              style={
                responsiveWidth > 1190
                  ? { maxWidth: "calc(100%/3)", width: "100%" }
                  : { width: "100%" }
              }
            >
              {group.map((item, index) => (
                <div
                  key={index}
                  className={styles.itemGall}
                  onClick={() => imageModal(item.sys.id)}
                  style={{ cursor: "pointer" }}
                >
                  <div
                    className={styles.img}
                    style={{ backgroundColor: "#72BF82" }}
                  >
                    <div className={styles.imgContainer}>
                    {item.fields.label ? (
                    <div className={styles.imgLabel}>{item.fields.label}</div>
                  ) : (
                    <div></div>
                  )}
                      <Image
                        src={"http:" + item.fields.foto.fields.file.url}
                        alt={item.fields.judul|| "Foto Galeri"}
                        fill
                        sizes="(max-width: 450px) 80vw, (max-width: 540px) 60vw, (max-width: 768px) 50vw, 30vw"
                        className={styles.img}
                      />
                    </div>
                  </div>
                  
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.nextprevWrapper}>
        <button aria-label="Next" style={{ all: "unset" }} onClick={showNext}>
          <NextPrev direction={true}></NextPrev>
        </button>
      </div>

      {modal && (
        <div className={styles.modal}>
          <div className={styles.overlay} onClick={toggleModal}></div>
          <div className={styles.modalContent}>
            <div className={styles.imgContainerModal}>
              <Image
                src={
                  "http:" +
                  getSelectedImage(galeri)?.fields.foto.fields.file.url
                }
                alt={getSelectedImage(galeri)?.fields.judul || "Foto Galeri"}
                fill
                sizes="(max-width: 680px) 80vw, 50vw"
                className={styles.modalContentImg}
              />
            </div>
            <div style={{ padding: "15px 20px" }}>
              <h4>{getSelectedImage(galeri)?.fields.judul}</h4>
              <p>{getSelectedImage(galeri)?.fields.deskripsi}</p>
            </div>
            <button aria-label="Tutup" className={styles.closeModal} onClick={toggleModal}>
              <X style={{ stroke: "white" }} />
            </button>
          </div>
        </div>
      )}

      <div className={styles.slideDot}>
        {groupedImg.map((_, index) => (
          <button
            key={index}
            className={styles.slidedot}
            onClick={() => scrollToIndex(index)}
            aria-label={"Slide " + (index+1)}
          >
            {index === slideIndex ? (
              <CircleDot style={{ stroke: "#72BF82", fill: "#72BF82" }} />
            ) : (
              <Circle style={{ fill: "#B7DBC5", stroke: "#B7DBC5" }} />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Galeri;
