import { createClient } from "contentful";
import { ArtikelBerita } from "../../content_types"; // Assuming this type is defined elsewhere
import { NextApiResponse } from "next";

// Server-side function to generate the sitemap
export const getServerSideProps = async ({ res }: { res: NextApiResponse  }) => {
  // Initialize the Contentful client
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_DELIVERY_API_TOKEN || "",
    host: "cdn.contentful.com",
  });

  // Fetch the Contentful entries (replace 'artikelBerita' with the correct content type)
  const resContentful = await client.getEntries({ content_type: "artikelBerita" });

  

  // Extract the items (articles) from the response
  const beritas = resContentful.items;

  // Generate the XML sitemap
  const sitemap = generateSiteMap(beritas);

  // Set the header to indicate it's an XML response
  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const generateSiteMap = (data: any) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com</loc>
    <priority>1</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/about</loc>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/posts</loc>
    <priority>0.8</priority>
  </url>
  ${data
    .map((item: ArtikelBerita) => {
      return `
    <url>
      <loc>https://yourdomain.com/posts/${item.fields.slug}</loc>
     <lastmod>${new Date().toISOString()}</lastmod>
      <priority>0.7</priority>
    </url>`;
    })
    .join("")}
</urlset>
`;
};

const SiteMap = () => {
  return null;
};

export default SiteMap;
