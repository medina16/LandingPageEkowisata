import styles from "./FAQItem.module.css";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { FAQ } from "../../../../content_types";

const FAQItem = ({ faqs }: { faqs: FAQ[] }) => {
  const [askOpen, setAskOpen] = useState(Array(faqs.length).fill(false));

  const handleClick = (index: number) => {
    const newAskOpen = [...askOpen]; // create a shallow copy of the askOpen array
    newAskOpen[index] = !newAskOpen[index]; // toggle the selected item
    setAskOpen(newAskOpen); // set the new array as the state
  };
  

  function compare(a: FAQ, b: FAQ) {
    if (a.fields.index < b.fields.index) {
      return -1;
    }
    if (a.fields.index > b.fields.index) {
      return 1;
    }
    return 0;
  }

  faqs.sort(compare);

  return (
    <div className={styles.FAQItem}>
      {faqs.map((item, index) => (
        <div key={index} className={styles.item}>
          <button onClick={() => handleClick(index)} className={styles.faqitem}>
            <div
              className={styles.question}
              style={{
                borderBottom: askOpen.at(index) == true ? "3px solid #DAE7DF" : "none",
                paddingBottom: askOpen.at(index) == true ? "10px" : "0",
              }}
            >
              {item.fields.pertanyaan}
              { askOpen.at(index) == true ? (
                <ChevronUp style={{ stroke: "#72BF82", strokeWidth: "3" }} />
              ) : (
                <ChevronDown style={{ stroke: "#72BF82", strokeWidth: "3" }} />
              )}
            </div>
            <div
              className={styles.answer}
              style={{
                display: askOpen.at(index) == true ? "block" : "none",
                maxHeight: askOpen.at(index) == true ? "500px" : "0",
                transition: "max-height 0.5s ease-in-out",
                overflow: "hidden",
              }}
            >
              <p>{item.fields.jawaban}</p>
            </div>
          </button>
        </div>
      ))}
    </div>
  );
};

export default FAQItem;
