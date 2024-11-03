import styles from "./FAQItem.module.css";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";


const FAQItem = ({faqs}:{faqs:FAQ[]}) => {


  const [askOpen, setAskOpen] = useState(-1);

  const handleClick = (index: number) => {
    setAskOpen(askOpen === index ? -1 : index);
  };

function compare( a:FAQ, b:FAQ ) {
  if ( a.fields.index < b.fields.index ){
    return -1;
  }
  if ( a.fields.index > b.fields.index ){
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
                borderBottom: askOpen === index ? "3px solid #DAE7DF" : "none",
                paddingBottom: askOpen === index ? "10px" : "0",
              }}
            >
              {item.fields.pertanyaan}
              {askOpen === index ? (
                <ChevronUp style={{ stroke: "#72BF82", strokeWidth: "3" }} />
              ) : (
                <ChevronDown style={{ stroke: "#72BF82", strokeWidth: "3" }} />
              )}
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
              <p>{item.fields.jawaban}</p>
            </div>
          </button>
        </div>
      ))}
    </div>
  );
};

export default FAQItem;



interface ContentfulLink {
  sys: {
    type: "Link";
    linkType: string;
    id: string;
  };
}

interface FAQFields {
  pertanyaan: string;
  jawaban: string;
  index:number;
}

interface FAQ {
  metadata: {
    tags: string[];
    concepts: unknown[];
  };
  sys: {
    space: ContentfulLink;
    id: string;
    type: "Entry";
    createdAt: string;
    updatedAt: string;
    environment: ContentfulLink;
    publishedVersion: number;
    revision: number;
    contentType: ContentfulLink;
    locale: string;
  };
  fields: FAQFields;
}