import styles from "./FAQItem.module.css";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { FAQ } from "../../../../content_types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { INLINES, Node } from "@contentful/rich-text-types";
import { ReactNode } from "react";

const FAQItem = ({ faqs }: { faqs: FAQ[] }) => {
  const [askOpen, setAskOpen] = useState(Array(faqs.length).fill(false));

  const handleClick = (index: number) => {
    const newAskOpen = [...askOpen]; 
    newAskOpen[index] = !newAskOpen[index]; 
    setAskOpen(newAskOpen);
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

  const options = {
    renderNode: {
      [INLINES.HYPERLINK]: (node: Node, children: ReactNode) => {
        const { uri } = node.data;
        const linkTitle = `${children || uri}`;

        return (
          <a
            href={uri}
            target="_blank"
            rel="noopener noreferrer"
            title={linkTitle}
          >
            {children}
          </a>
        );
      },
    },
  };

  return (
    <div className={styles.FAQItem}>
      {faqs.map((item, index) => (
        <div key={index} className={styles.item}>
          <button onClick={() => handleClick(index)} className={styles.faqitem}>
            <div
              className={styles.question}
              style={{
                borderBottom:
                  askOpen.at(index) == true ? "3px solid #DAE7DF" : "none",
                paddingBottom: askOpen.at(index) == true ? "10px" : "0",
              }}
            >
              {item.fields.pertanyaan}
              {askOpen.at(index) == true ? (
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
              {documentToReactComponents(item.fields.jawab, options)}
            </div>
          </button>
        </div>
      ))}
    </div>
  );
};

export default FAQItem;
