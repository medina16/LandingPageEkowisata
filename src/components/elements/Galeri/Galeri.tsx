import Image from "next/image";
import styles from "./Galeri.module.css";
import NextPrev from "../NextPrevButton/NextPrev";
import { useEffect, useState } from "react";
import { Circle, CircleDot, X } from "lucide-react";
import { FotoGaleri } from "../../../../content_types";

const Galeri = ({ galeri }: { galeri: FotoGaleri[] }) => {
  const [groupedImg, setGroupedData] = useState<FotoGaleri[][]>([]);
  const [responsiveWidth, setResponsiveWidth] = useState(0);

  // Helper function to group data based on window width
  const groupTestimonials = () => {
    const width = window.innerWidth;
    const slideGroup = [];

    if (width > 762) {
      // Group by 3 when the window width is more than 500px
      for (let i = 0; i < galeri.length; i += 2) {
        slideGroup.push(galeri.slice(i, i + 2));
        setIndex(0)
      }
    } else if (width > 540) {
      for (let i = 0; i < galeri.length; i += 4) {
        slideGroup.push(galeri.slice(i, i + 4));
        setIndex(0)
      }
    } else {
      // Group by 1 when the window width is less than or equal to 500px
      for (let i = 0; i < galeri.length; i++) {
        slideGroup.push([galeri[i]]);
        setIndex(0)
      }
    }
    setGroupedData(slideGroup); // Update the grouped data state
    setResponsiveWidth(width);
  };

  useEffect(() => {
    // Call the grouping function initially
    groupTestimonials();

    // Add resize event listener h
    const handleResize = () => {
      groupTestimonials();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []); // No dependency array, only run on mount and unmount


  
  // Tombol Next/Previous untuk ganti index slide
  const [slideIndex, setIndex] = useState(0);
  function showNext() {
    setIndex((index) => {
      if (slideIndex === groupedImg.length-3) return 0;
      return index + 1;
    });
  }
  function showPrev() {
    setIndex((index) => {
      if (slideIndex === 0) return groupedImg.length - 3;
      return index - 1;
    });
  }

  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  const [selectedImageID, openImage] = useState("");

  const imageModal = (id: string) => {
    toggleModal();
    openImage(id);
  };

  function getSelectedImage(images: FotoGaleri[]) {
    return (
      images.find((foto: FotoGaleri) => foto.sys.id === selectedImageID) ||
      notFound
    );
  }

  return (
    <div className={styles.bigTestiWrapper}>
      <div className={styles.nextprevWrapper}>
        <button style={{ all: "unset" }} onClick={showPrev}>
          <NextPrev direction={false}></NextPrev>
        </button>
      </div>

      <div className={styles.wrapper}>
        <div
          className={styles.Galeri}
          style={responsiveWidth>762? {transform:`translateX(${(-100 / 3) * slideIndex}%)`} :  {transform: `translateX(${(-100) * slideIndex}%)`}}
        >
          {groupedImg.map((group: FotoGaleri[], groupIndex: number) => (
            <div key={groupIndex} className={styles.groupTesti} style={responsiveWidth>762?{ width: "calc(100%/3)" }:{width:"100%"}}>
              {group.map((item: FotoGaleri, index: number) => (
                <div
                  key={index}
                  className={styles.itemTesti}
                  onClick={() => imageModal(item.sys.id)}
                  style={{ cursor: "pointer" }}
                >
                  {item.fields.label?
                  (<div className={styles.imgLabel}>{item.fields.label}</div>) :
                   <div></div>
                }
                  <div style={{ backgroundColor:"#72BF82" }} className={styles.img}> <Image
                    src={"http:" + item.fields.foto.fields.file.url}
                    width={560}
                    height={270}
                    alt={item.fields.judul}
                    className={styles.img}
                  /></div>
                 
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.nextprevWrapper}>
        <button style={{ all: "unset" }} onClick={showNext}>
          <NextPrev direction={true}></NextPrev>
        </button>
      </div>

      {modal && (
        <div className={styles.modal}>
          <div className={styles.overlay} onClick={toggleModal}></div>
          <div className={styles.modalContent}>
          <div className={styles.imageContainer}>
                <Image
                  src={
                    "http:" +
                    getSelectedImage(galeri).fields.foto.fields.file.url
                  } // Use the selected image
                  height={720}
                  width={1280}
                  alt=""
                  className={styles.modalContentImg}
                />
                </div>
                <div style={{ padding: "15px 20px" }}>
                  <h4>{getSelectedImage(galeri).fields.judul}</h4>
                  <p>{getSelectedImage(galeri).fields.deskripsi}</p>
                </div>

            <button className={styles.closeModal} onClick={toggleModal}>
              <X style={{stroke: "white"}}/>
            </button>
          </div>
        </div>
      )}
      <div className={styles.slideDot}>
        {groupedImg.map((_, index) => (
          <button
            key={index}
            className={styles.slidedot}
            onClick={() => setIndex(index)}
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



const notFound: FotoGaleri = {
  metadata: {
    tags: [],
    concepts: [],
  },
  fields: {
    label:"",
    foto: {
      metadata: {
        tags: [],
        concepts: [],
      },
      sys: {
        space: {
          sys: {
            type: "Link",
            linkType: "",
            id: "",
          },
        },
        type: "Asset",
        id: "",
        createdAt: "",
        updatedAt: "",
        environment: {
          sys: {
            type: "Link",
            linkType: "",
            id: "",
          },
        },
        publishedVersion: 0,
        revision: 0,
        locale: "",
      },
      fields: {
        title: "",
        file: {
          url: "",
          details: {
            size: 0,
            image: {
              width: 0,
              height: 0,
            },
          },
          fileName: "",
          contentType: "",
        },
      },
    },
    judul: "none",
    deskripsi: "",
  },
  sys: {
    space: {
      sys: {
        type: "Link",
        linkType: "",
        id: "",
      },
    },
    id: "",
    type: "Entry",
    createdAt: "",
    updatedAt: "",
    environment: {
      sys: {
        type: "Link",
        linkType: "",
        id: "",
      },
    },
    publishedVersion: 0,
    revision: 0,
    contentType: {
      sys: {
        type: "Link",
        linkType: "",
        id: "",
      },
    },
    locale: "",
  },
};
