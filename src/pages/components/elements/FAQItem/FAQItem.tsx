import styles from "./FAQItem.module.css";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

const FAQItem = () => {
  const [FAQitems, setFAQitems] = useState([]);

  useEffect(() => {
    fetch("/api/FAQ")
    .then((res) => res.json())
    .then((data) => {
      setFAQitems(data.data)
    });
  }, [])

  const [askOpen, setAskOpen] = useState(null);

  const handleClick = (index) => {
    setAskOpen(askOpen === index ? null : index);
  };

  return (
    <div className={styles.FAQItem}>
      {FAQitems.map((item, index) => (
        <div key={index} className={styles.item}>
          <button onClick={() => handleClick(index)} className={styles.faqitem}>
            <div
              className={styles.question}
              style={{
                borderBottom: askOpen === index ? "3px solid #DAE7DF" : "none",
                paddingBottom: askOpen === index ? "10px" : "0",
              }}
            >
              {item.pertanyaan}
              {askOpen === index ? <ChevronUp style={{stroke: "#72BF82", strokeWidth:"3"}}/> : <ChevronDown style={{stroke: "#72BF82", strokeWidth:"3"}}/>}
            </div>
            <div
              className={styles.answer}
              style={{
                display: askOpen === index ? "block" : "none",
                maxHeight: askOpen === index ? "500px" : "0",
                transition: "max-height 0.5s ease-in-out",
                overflow: "hidden",
              }}
            >
              <p>{item.jawaban}</p>
            </div>
          </button>
        </div>
      ))}
    </div>
  );
};

export default FAQItem;
