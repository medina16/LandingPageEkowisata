import styles from "./Info.module.css";
import { ResService as ResServiceContent } from "../../../../content_types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const ResService = ({ resservices }: { resservices: ResServiceContent[] }) => {
  const [askOpen, setAskOpen] = useState(Array(resservices.length).fill(false));

  const handleClick = (index: number) => {
    const newAskOpen = [...askOpen];
    newAskOpen[index] = !newAskOpen[index];
    setAskOpen(newAskOpen);
  };

  return (
    <div className={styles.ResService}>
      {resservices?.map((item, index) => (
        <button
          key={index}
          onClick={() => handleClick(index)}
          className={styles.faqitem}
        >
          <div className={styles.serviceBlock}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <h3>{item.fields.jenisReservasilayanan}</h3>
              {askOpen.at(index) == true ? (
                <ChevronUp style={{ stroke: "#72BF82", strokeWidth: "3" }} />
              ) : (
                <ChevronDown style={{ stroke: "#72BF82", strokeWidth: "3" }} />
              )}
            </div>

            <p>{item.fields.deskripsiSingkat}</p>
            <div
              style={{
                display: askOpen.at(index) == true ? "block" : "none",
                maxHeight: askOpen.at(index) == true ? "500px" : "0",
                transition: "max-height 0.5s ease-in-out",
                overflow: "hidden",
                paddingTop:"10px"
              }}
            >
              {documentToReactComponents(item.fields.keterangan)}
            </div>
          </div>
        </button>
      )) || <div>Data tidak tersedia</div>}
    </div>
  );
};

export default ResService;
