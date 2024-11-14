import styles from "./Testimoni.module.css";
import NextPrev from "../NextPrevButton/NextPrev";
import { useState, useEffect, useRef } from "react";
import { Testimoni as TestiContent } from "../../../../content_types";
import { Circle, CircleDot } from "lucide-react";

const Testimoni = ({ testimonis }: { testimonis: TestiContent[] }) => {
  const [groupedTesti, setGroupedTesti] = useState<TestiContent[][]>([]);
  const [responsiveWidth, setResponsiveWidth] = useState(0);
  const [slideIndex, setIndex] = useState(0);

  const groupTestimonials = () => {
    const width = window.innerWidth;
    const newGroupedTesti = [];

    if (width > 720) {
      // Group by 3 when the window width is more than 500px
      for (let i = 0; i < testimonis.length; i += 3) {
        newGroupedTesti.push(testimonis.slice(i, i + 3));
        setIndex(0);
      }
    } else {
      // Group by 1 when the window width is less than or equal to 500px
      for (let i = 0; i < testimonis.length; i++) {
        newGroupedTesti.push([testimonis[i]]);
        setIndex(0);
      }
    }

    setGroupedTesti(newGroupedTesti); // Update the grouped data state
    setResponsiveWidth(width);
  };

  const wrapperRef = useRef<HTMLDivElement>(null);
  const handleScroll = () => {
    if (wrapperRef.current) {
      const { scrollLeft, offsetWidth } = wrapperRef.current;
      const newIndex = Math.round(scrollLeft / offsetWidth);
      setIndex(newIndex);
    }
  };

  const scrollToIndex = (index: number) => {
    if (responsiveWidth > 1190) {
      setIndex(index);
    } else if (wrapperRef.current) {
      wrapperRef.current.scrollTo({
        left: index * wrapperRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };


  useEffect(() => {
    groupTestimonials();

    const handleResize = () => {
      groupTestimonials();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [testimonis]); // Run grouping logic whenever testimonis changes

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (wrapper) {
      wrapper.addEventListener("scroll", handleScroll);
    }
    return () => wrapper?.removeEventListener("scroll", handleScroll);
  }, []);

  // Tombol Next/Previous untuk ganti index slide

  function showNext() {
    setIndex((index) => {
      if (slideIndex >= groupedTesti.length - 1) return 0;
      return index + 1;
    });
  }
  function showPrev() {
    setIndex((index) => {
      if (slideIndex === 0) return groupedTesti.length - 1;
      return index - 1;
    });
  }

  return (
    <div className={styles.bigTestiWrapper}>
      {testimonis.length > 3 && (
        <div className={styles.nextprevWrapper}>
          <button aria-label="Previous" style={{ all: "unset" }} onClick={showPrev}>
            <NextPrev direction={false} />
          </button>
        </div>
      )}

      <div className={styles.testiwrapper} ref={wrapperRef}>
        <div
          className={styles.Testimoni}
          style={
            responsiveWidth > 1190
              ? { transform: `translateX(${-100 * slideIndex}%)` }
              : undefined
          }
        >
          {groupedTesti.map((group: TestiContent[], groupIndex: number) => (
            <div key={groupIndex} className={styles.groupTesti}>
              {group.map((item, index: number) => (
                <div
                  key={index}
                  className={styles.itemTesti}
                  style={
                    responsiveWidth > 720
                      ? { width: "calc(100%/3)" }
                      : { width: "100%" }
                  }
                >
                  <div style={{ marginBottom:"10px" }}>
                    <div className={styles.label}>{item.fields.tempat}</div>
                    &quot;{item.fields.isiTestimoni}&quot;
                  </div>
                  <div style={{ textAlign: "right", color: "rgb(108 169 120)" , lineHeight:"15px"}}>
                    <b>- {item.fields.nama}</b>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {testimonis.length > 3 && (
        <div className={styles.slideDot}>
          {groupedTesti.map((_, index: number) => (
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
      )}
      {testimonis.length > 3 && (
        <div className={styles.nextprevWrapper}>
          <button aria-label="Next" style={{ all: "unset" }} onClick={showNext}>
            <NextPrev direction={true} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Testimoni;
