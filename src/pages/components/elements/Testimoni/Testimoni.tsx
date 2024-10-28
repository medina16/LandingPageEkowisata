import styles from "./Testimoni.module.css";
import NextPrev from "../NextPrevButton/NextPrev";
import { useState, useEffect } from "react";
import { Circle, CircleDot } from "lucide-react";

const Testimoni = () => {
  const data = [
    { nama: "orang 1", testi: "Lorem ipsum..." },
    { nama: "orang 2", testi: "Lorem ipsum..." },
    { nama: "orang 3", testi: "Lorem ipsum..." },
    { nama: "orang 4", testi: "Lorem ipsum..." },
    { nama: "orang 5", testi: "Lorem ipsum..." },
    { nama: "orang 6", testi: "Lorem ipsum..." },
  ];

  const [tIndex, setTIndex] = useState(0);
  const [groupedData, setGroupedData] = useState([]); // Hold the grouped data based on window size

  // Helper function to group data based on window width
  const groupTestimonials = () => {
    const width = window.innerWidth;
    const newGroupedData = [];

    if (width > 720) {
      // Group by 3 when the window width is more than 500px
      for (let i = 0; i < data.length; i += 3) {
        newGroupedData.push(data.slice(i, i + 3));
      }
    } else {
      // Group by 1 when the window width is less than or equal to 500px
      for (let i = 0; i < data.length; i++) {
        newGroupedData.push([data[i]]);
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
      if (tIndex === groupedData.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrev() {
    setTIndex((index) => {
      if (tIndex === 0) return groupedData.length - 1;
      return index - 1;
    });
  }

  return (
    <div className={styles.bigTestiWrapper}
    >
      <div className={styles.nextprevWrapper}>
        <button style={{ all: "unset" }} onClick={showPrev}>
          <NextPrev direction={false} />
        </button>
      </div>

      <div className={styles.testiwrapper}>
        <div
          className={styles.Testimoni}
          style={{
            transition: "transform 300ms ease-in-out",
            transform: `translateX(${-100 * tIndex}%)`,
            display: "flex",
            flexDirection: "row",
          }}
        >
          {groupedData.map((group, groupIndex) => (
            <div key={groupIndex} className={styles.groupTesti}>
              {group.map((item, index) => (
                <div key={index} className={styles.itemTesti}>
                  <div>"{item.testi}"</div>
                  <div style={{ textAlign: "right", color: "#72BF82" }}>
                    <b>- {item.nama}</b>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.slideDot}>
        {data.map((_, index) => (
          <button
            key={index}
            className={styles.slidedot}
            onClick={() => setTIndex(index)}
          >
            {index === tIndex ? (
              <CircleDot style={{ stroke: "#72BF82", fill: "#72BF82" }} />
            ) : (
              <Circle style={{ fill: "#B7DBC5", stroke:"#B7DBC5" }} />
            )}
          </button>
        ))}
      </div>

      <div className={styles.nextprevWrapper}>
        <button style={{ all: "unset" }} onClick={showNext}>
          <NextPrev direction={true} />
        </button>
      </div>
    </div>
  );
};

export default Testimoni;
