import styles from "./Paket.module.css";
import Image from "next/image";
import Button from "../../elements/Button/Button";
import { X } from "lucide-react";
import { useState } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Paket = ({ pakets }: { pakets: PaketWisata[] }) => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  const [selectedPaketID, openPaket] = useState("");

  const paketModal = (id: string) => {
    toggleModal();
    openPaket(id);
  };

  function getSelectedPaket(paketList: PaketWisata[]) {
    return (
      paketList.find(
        (paket: PaketWisata) => paket.sys.id === selectedPaketID
      ) || notFound
    );
  }

  function compare(a: PaketWisata, b: PaketWisata) {
    if (a.fields.kode < b.fields.kode) {
      return -1;
    }
    if (a.fields.kode > b.fields.kode) {
      return 1;
    }
    return 0;
  }

  pakets.sort(compare);

  return (
    <div className={styles.Paket}>
      <div className={styles.paketWrapper}>
        {modal && (
          <div className={styles.modal}>
            <div className={styles.overlay} onClick={toggleModal}></div>
            <div className={styles.modalContent}>
              <div className={styles.imageContainer}>
                <Image
                  src={
                    "https:" +
                    getSelectedPaket(pakets).fields.fotoPaket.fields.file.url
                  } // Use the selected image
                  height={720}
                  width={1280}
                  alt=""
                  className={styles.modalContentImg}
                />
              </div>

              <div
                style={{
                  padding: "  10px 20px",
                  maxHeight: "36vh",
                  overflowY: "scroll",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <h4 style={{ fontSize: "23px" }}>
                  {getSelectedPaket(pakets).fields.namaPaket}
                </h4>
                {/* <p>{getSelectedPaket(pakets)?.fields.daftarFasilitas}</p> */}
                <div className={styles.aktiFasilWrapper}>
                  <div className={styles.aktivitasList}>
                    <b>Aktivitas:</b>
                    <div style={{ 
                      display:"flex",
                      flexDirection: "column",
                       gap: "4px"
                     }}>
                      {getSelectedPaket(pakets)?.fields.daftarAktivitas?.map(
                        (aktivitas: string, index: number) => (
                          <div 
                          style={{ 
                            marginLeft:"15px",
                            display: "flex",
                            gap: "7px",
                            alignItems: "baseline",
                            lineHeight: "normal",
                           }}
                          key={index}
                          ><svg style={{ width: "17px" }} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#72BF82" stroke="#72BF82" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg> {aktivitas}</div>
                        )
                      ) || <div></div>}
                    </div>
                  </div>
                  <div className={styles.fasilitasList}>
                    <b>Fasilitas sudah mencakup:</b>

                    <div className={styles.fasilitasWrapper}>
                      {getSelectedPaket(pakets)?.fields.daftarFasilitas?.map(
                        (fasilitas: string, index: number) => (
                          <div className={styles.fasilitasLabel} key={index}>
                            {fasilitas}
                          </div>
                        )
                      ) || <div></div>}
                    </div>
                  </div>
                </div>

                <div style={{ 
                  display:"flex",
                  flexDirection:"column",
                  gap:"5px"
                 }}>
                  {documentToReactComponents(getSelectedPaket(pakets)?.fields.deskripsiPanjang)}
                </div>
              </div>
              <div style={{ 
                padding: "  10px 20px" ,
                display: "flex",
                gap: "6px",
                flexDirection: "column"
                }}>
                <Button
                  buttonlink={getSelectedPaket(pakets).fields.linkReservasiWa}
                  buttontype="primary"
                  buttontext="Reservasi Sekarang"
                  icon="wa"
                />
                <Button
                  buttontype="secondary"
                  buttonlink={getSelectedPaket(pakets).fields.linkInstagram}
                  buttontext="Kunjungi Instagram"
                  icon="ig"
                />
              </div>
              <button className={styles.closeModal} onClick={toggleModal}>
                <X />
              </button>
            </div>
          </div>
        )}

        {pakets.map((item: PaketWisata, index: number) => (
          <div key={index} className={styles.paketContainer}>
            <div className={styles.imageContainer}>
              <Image
                src={"https:" + item.fields.fotoPaket.fields.file.url}
                width={1080}
                height={720}
                className={styles.img}
                alt=""
              />
            </div>
            {/* {item.fields.label?
                  (<div className={styles.imgLabel}>{item.fields.label}</div>) :
                   <div></div>
                } */}
            <div style={{ 
              display: "flex",
              flexDirection: "column",
              height: "-webkit-fill-available",
              justifyContent: "space-between"
             }}>
            <div className={styles.paketContent}>
              <div style={{ color:"#59c08b", fontWeight:"600"  }}>{item.fields.label}</div>
              <h2 style={{ display:"flex", gap: "8px", lineHeight:"normal"}}>
                {/* <div style={{display: "flex"}} className={styles.paketIcon}><Leaf /></div> */}
                 {item.fields.namaPaket}
              </h2>
              <p style={{ lineHeight:"20px" }}>{item.fields.deskripsiSingkat}</p>
            </div>
            <div
            className={styles.buttonWrapper}
                  onClick={() => paketModal(item.sys.id)}
                >
                  <Button
                    buttontext="Lihat Detail"
                    buttonlink=""
                    buttontype="primary"
                    icon="info"
                  />
                </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Paket;

interface ContentfulLink {
  sys: {
    type: "Link";
    linkType: string;
    id: string;
  };
}

interface ContentfulAssetFile {
  url: string;
  details: {
    size: number;
    image: {
      width: number;
      height: number;
    };
  };
  fileName: string;
  contentType: string;
}

interface ContentfulAsset {
  metadata: {
    tags: string[];
    concepts: unknown[];
  };
  sys: {
    space: ContentfulLink;
    id: string;
    type: "Asset";
    createdAt: string;
    updatedAt: string;
    environment: ContentfulLink;
    publishedVersion: number;
    revision: number;
    locale: string;
  };
  fields: {
    title: string;
    file: ContentfulAssetFile;
  };
}

interface PaketWisataFields {
  namaPaket: string;
  deskripsiPanjang: Document;
  daftarFasilitas: string[];
  linkReservasiWa: string;
  linkInstagram: string;
  fotoPaket: ContentfulAsset;
  aktivitas: string;
  deskripsiSingkat: string;
  daftarAktivitas: string[];
  kode: number;
  label:string;
}

interface PaketWisata {
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
  fields: PaketWisataFields;
}

interface Document {
  data: Record<string, never>;
  content: Array<TextNode | ParagraphNode | ListNode | HeadingNode | SubscriptNode>;
  nodeType: string;
}

interface TextNode {
  data: Record<string, never>;
  marks: Mark[];
  value: string;
  nodeType: "text";
}

interface Mark {
  type: "bold" | "code" | "subscript";
}

interface ParagraphNode {
  data: Record<string, never>;
  content: TextNode[];
  nodeType: "paragraph";
}

interface HeadingNode {
  data: Record<string, never>;
  content: TextNode[];
  nodeType: "heading-2";
}

interface ListNode {
  data: Record<string, never>;
  content: ListItemNode[];
  nodeType: "unordered-list";
}

interface ListItemNode {
  data: Record<string, never>;
  content: ParagraphNode[];
  nodeType: "list-item";
}

interface SubscriptNode {
  data: Record<string, never>;
  content: TextNode[];
  nodeType: "paragraph";
}


const notFound: PaketWisata = {
  metadata: {
    tags: [],
    concepts: [],
  },
  fields: {
    linkInstagram:"",
    label:"",
    kode:-1,
    deskripsiSingkat: "",
    fotoPaket: {
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
    namaPaket: "",
    deskripsiPanjang: 
    {
      nodeType:"",
      data:{
        
      },
      content:[],
    }
    
    ,
    daftarFasilitas: [],
    linkReservasiWa: "",
    aktivitas: "",
    daftarAktivitas: [],
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
