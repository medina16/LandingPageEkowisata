import styles from "./Paket.module.css";
import Image from "next/image";
import Button from "../../elements/Button/Button";
import { X } from "lucide-react";
import { useState } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { PaketWisata } from "../../../../content_types";
import { BLOCKS } from "@contentful/rich-text-types";

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
                  className={styles.modalContentImg}
                  alt={getSelectedPaket(pakets).fields.namaPaket}
                  fill
                  sizes="(max-width: 768px) 70vw, 50vw"
                />
              </div>

              <div
                style={{
                  padding: "15px 25px",
                  maxHeight: "36vh",
                  overflowY: "scroll",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <h4 style={{ fontSize: "18px" }}>
                  {getSelectedPaket(pakets).fields.namaPaket}
                </h4>
                <b style={{ fontSize: "25px" }}>
                  {getSelectedPaket(pakets).fields.harga}
                </b>
                {/* <p>{getSelectedPaket(pakets)?.fields.daftarFasilitas}</p> */}
                <div className={styles.aktiFasilWrapper}>
                  <div className={styles.aktivitasList}>
                    <b>Aktivitas:</b>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "4px",
                      }}
                    >
                      {getSelectedPaket(pakets)?.fields.daftarAktivitas?.map(
                        (aktivitas: string, index: number) => (
                          <div
                            style={{
                              marginLeft: "5px",
                              display: "flex",
                              gap: "7px",
                              alignItems: "baseline",
                              lineHeight: "normal",
                            }}
                            key={index}
                          >
                            <svg
                              style={{ width: "17px" }}
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="#72BF82"
                              stroke="#72BF82"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-star"
                            >
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                            </svg>{" "}
                            {aktivitas}
                          </div>
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

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                  }}
                >
                  {documentToReactComponents(
                    getSelectedPaket(pakets)?.fields.deskripsiPanjang
                  )}
                </div>
              </div>
              <div
                style={{
                  padding: "  15px 20px",
                  display: "flex",
                  gap: "6px",
                  flexDirection: "column",
                }}
              >
                {getSelectedPaket(pakets).fields.linkReservasiWa ? (
                  <Button
                    buttonlink={getSelectedPaket(pakets).fields.linkReservasiWa}
                    buttontype="primary"
                    buttontext="Reservasi WhatsApp"
                    icon="wa"
                  />
                ) : (
                  <Button
                    buttonlink={
                      "tel:" + getSelectedPaket(pakets).fields.nomorTelepon
                    }
                    buttontype="primary"
                    buttontext={
                      "Reservasi Telepon/(" +
                      getSelectedPaket(pakets).fields.nomorTelepon +
                      ")"
                    }
                    icon="telp"
                  />
                )}

                <Button
                  buttontype="secondary"
                  buttonlink={getSelectedPaket(pakets).fields.linkInstagram}
                  buttontext="Kunjungi Instagram"
                  icon="ig"
                />
                {getSelectedPaket(pakets).fields.linkFacebook ? (
                  <Button
                    buttontype="secondary"
                    buttonlink={getSelectedPaket(pakets).fields.linkFacebook}
                    buttontext="Kunjungi Facebook"
                    icon="fb"
                  />
                ) : undefined}
              </div>
              <button className={styles.closeModal} onClick={toggleModal}>
                <X style={{ stroke: "white" }} />
              </button>
            </div>
          </div>
        )}

        {pakets.map((item: PaketWisata, index: number) => (
          <div key={index} className={styles.paketContainer}>
            <div className={styles.imgContainer}>
              <Image
                src={"https:" + item.fields.fotoPaket.fields.file.url}
                className={styles.img}
                alt={item.fields.namaPaket}
                fill
                sizes="(max-width: 450px) 80vw, (max-width: 540px) 60vw, (max-width: 768px) 50vw, 30vw"
              />
            </div>

            <div className={styles.contentButtonContainer}>
              <div>
                <div style={{ fontWeight: "600" }}>{item.fields.label}</div>
                <h3
                  style={{ display: "flex", gap: "8px", lineHeight: "normal" }}
                >
                  {item.fields.namaPaket}
                </h3>
                <p style={{ lineHeight: "20px" }}>
                  {item.fields.deskripsiSingkat}
                </p>
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

// Define content node interfaces using specific BLOCKS types

const notFound: PaketWisata = {
  metadata: {
    tags: [],
    concepts: [],
  },
  fields: {
    nomorTelepon: "",
    harga: "",
    linkFacebook: "",
    linkInstagram: "",
    label: "",
    kode: -1,
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
    deskripsiPanjang: {
      nodeType: BLOCKS.DOCUMENT,
      data: {},
      content: [],
    },

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
