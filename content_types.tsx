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
  index: number;
}

export interface FAQ {
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
  
  interface FotoGaleriFields {
    judul: string;
    deskripsi: string;
    foto: ContentfulAsset;
    label:string;
  }
  
 export interface FotoGaleri {
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
    fields: FotoGaleriFields;
  }

  interface ContentfulLink {
    sys: {
      type: "Link";
      linkType: string;
      id: string;
    };
  }
  
  interface TestimoniFields {
    nama: string;
    isiTestimoni: string;
  }
  
  export interface Testimoni {
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
    fields: TestimoniFields;
  }
  
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
  
  import { Document as ContentfulDocument } from "@contentful/rich-text-types";
  
  // Use Contentful's Document type
  interface PaketWisataFields {
    namaPaket: string;
    deskripsiPanjang: ContentfulDocument;
    daftarFasilitas: string[];
    linkReservasiWa: string;
    linkInstagram: string;
    fotoPaket: ContentfulAsset;
    aktivitas: string;
    deskripsiSingkat: string;
    daftarAktivitas: string[];
    kode: number;
    label: string;
  }
  
  export interface PaketWisata {
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
  
  interface InfoWisataFields {
    nama: string;
    deskripsi: string;
    foto: ContentfulAsset;
    contohAktivitas: string[];
    lokasi: string;
    linkMaps:string;

  }
  
  export interface InfoWisata {
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
    fields: InfoWisataFields;
  }


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
  
  interface SliderFields {
    headline: string;
    subtitle: string;
    kumpulanFoto: ContentfulAsset[];
  }
  
 export interface Slider {
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
    fields: SliderFields;
  }