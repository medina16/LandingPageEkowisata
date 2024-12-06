import { createClient } from "contentful";
import { InfoWisata } from "../../../content_types";
import Info from "@/components/layouts/Info/Info";

export async function getStaticProps({ preview = false }) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || "",
    accessToken: preview
      ? process.env.CONTENTFUL_PREVIEW_API_TOKEN || ""
      : process.env.CONTENTFUL_DELIVERY_API_TOKEN || "",
    host: preview ? "preview.contentful.com" : "cdn.contentful.com",
  });

  const res = await client.getEntries({ content_type: "infoWisata" });

  return {
    props: {
        revalidate: 60,
      infos: res.items,
      preview,
    },
  };
}

const Berita = ({ infos }: { infos: InfoWisata[] }) => {
  return (
    <div className="rubik main-wrapper" style={{ paddingTop:"30px", paddingBottom: "30px" }}>
        <Info infos={infos} />
    </div>
  );
};

export default Berita;
