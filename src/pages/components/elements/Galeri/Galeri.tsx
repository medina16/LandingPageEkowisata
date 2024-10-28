import Image from "next/image";
import styles from "./Galeri.module.css";
import NextPrev from "../NextPrevButton/NextPrev";
import { useEffect, useState } from "react";
import { Circle, CircleDot, X } from "lucide-react";

const Galeri = () => {
  const images = [
    {
      id: 1,
      filename: "/DSC05762 (1).JPG",
      judul: "aaaaa",
      tanggal: "17 Agustus 1945",
    },
    {
      id: 2,
      filename: "/DSC05718.JPG",
      judul: "aaaaa",
      tanggal: "17 Agustus 1945",
    },
    {
      id: 3,
      filename: "/DSC05734.JPG",
      judul: "aaaaa",
      tanggal: "17 Agustus 1945",
    },
    {
      id: 4,
      filename: "/DJI_0822.JPG",
      judul: "aaaaa",
      tanggal: "17 Agustus 1945",
    },
    {
      id: 5,
      filename: "/DSC05762 (1).JPG",
      judul: "aaaaa",
      tanggal: "17 Agustus 1945",
    },
    {
      id: 6,
      filename: "/DSC05762 (1).JPG",
      judul: "aaaaa",
      tanggal: "17 Agustus 1945",
    },
    {
      id: 7,
      filename: "/DSC05762 (1).JPG",
      judul: "aaaaa",
      tanggal: "17 Agustus 1945",
    },
    {
      id: 8,
      filename: "/DSC05762 (1).JPG",
      judul: "aaaaa",
      tanggal: "17 Agustus 1945",
    },
    {
      id: 9,
      filename: "/DSC05762 (1).JPG",
      judul: "aaaaa",
      tanggal: "17 Agustus 1945",
    },
    {
      id: 10,
      filename: "/DSC05762 (1).JPG",
      judul: "aaaaa",
      tanggal: "17 Agustus 1945",
    },
    {
      id: 11,
      filename: "/DSC05762 (1).JPG",
      judul: "aaaaa",
      tanggal: "17 Agustus 1945",
    },
    {
      id: 12,
      filename: "/DSC05762 (1).JPG",
      judul: "aaaaa",
      tanggal: "17 Agustus 1945",
    },
  ];

  const [tIndex, setTIndex] = useState(0);
  const [groupedImg, setGroupedData] = useState([]); // Hold the grouped data based on window size

  // Helper function to group data based on window width
  const groupTestimonials = () => {
    const width = window.innerWidth;
    const newGroupedData = [];

    if (width > 762) {
      // Group by 3 when the window width is more than 500px
      for (let i = 0; i < images.length; i += 6) {
        newGroupedData.push(images.slice(i, i + 6));
      }
    } else if (width > 540) {
      for (let i = 0; i < images.length; i += 4) {
        newGroupedData.push(images.slice(i, i + 4));
      }
    } else {
      // Group by 1 when the window width is less than or equal to 500px
      for (let i = 0; i < images.length; i++) {
        newGroupedData.push([images[i]]);
      }
    }

    setGroupedData(newGroupedData); // Update the grouped data state
  };

  useEffect(() => {
    // Call the grouping function initially
    groupTestimonials();

    // Add resize event listener
    const handleResize = () => {
      groupTestimonials();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []); // No dependency array, only run on mount and unmount

  function showNext() {
    setTIndex((index) => {
      if (tIndex === groupedImg.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrev() {
    setTIndex((index) => {
      if (tIndex === 0) return groupedImg.length - 1;
      return index - 1;
    });
  }

  // const groupedData = [];
  // for (let i = 0; i < images.length; i += 6) {
  //   groupedData.push(images.slice(i, i + 6));
  // }

  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  const [img_id, openImage] = useState(0);

  const imageModal = (id) => {
    toggleModal();
    openImage(id);
  };

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
          style={{
            transition: "transform 300ms ease-in-out",
            transform: `translateX(${-100 * tIndex}%)`,
            display: "flex", // Flex to align groups horizontally
          }}
        >
          {groupedImg.map((group, groupIndex) => (
            <div key={groupIndex} className={styles.groupTesti}>
              {group.map((item, index) => (
                <div
                  key={index}
                  className={styles.itemTesti}
                  onClick={() => imageModal(item.id)}
                  style={{ cursor: "pointer" }}
                >
                  <Image
                    src={item.filename}
                    height={190}
                    width={370}
                    alt=""
                    className={styles.img}
                  />
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
          <div className={styles.overlay}>
            <div className={styles.modalContent}>
              <div className={styles.imgContainer}>
                
              </div>
              <Image
                src={images.find((image) => image.id === img_id).filename} // Use the selected image
                height={720}
                width={1280}
                alt=""
                className={styles.modalContentImg}
              />
              <div style={{ padding: "  0px 20px 10px 20px" }}>
                <h4>{images.find((image) => image.id === img_id).judul}</h4>
                <p>{images.find((image) => image.id === img_id).tanggal}</p>
              </div>
              <button className={styles.closeModal} onClick={toggleModal}>
                <X />
              </button>
            </div>
          </div>
        </div>
      )}
      <div className={styles.slideDot}>
        {groupedImg.map((_, index) => (
          <button
            key={index}
            className={styles.slidedot}
            onClick={() => setTIndex(index)}
          >
            {index === tIndex ? (
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
