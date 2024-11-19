import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AppShell from "../components/layouts/AppShell";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://tatambale.id" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <title>Tatambale Agroedutourism - Wisata Alam Seru & Edukatif</title>
        <meta
          name="description"
          content="Temukan pengalaman wisata yang edukatif dan penuh petualangan di Bale Gandrung dan Tatamba,  destinasi wisata agroeduwisata di kawasan Gunung Slamet."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tatambale.id/" />
        <meta
          property="og:title"
          content="Tatambale Agroedutourism - Wisata Alam Seru & Edukatif"
        />
        <meta
          property="og:description"
          content="Temukan pengalaman wisata yang edukatif dan penuh petualangan di Bale Gandrung dan Tatamba,  destinasi wisata agroeduwisata di kawasan Gunung Slamet."
        />
        <meta
          property="og:image"
          content="https://images.ctfassets.net/4wpmwscnwvd0/bytO75UvT8TUu24gTS5HQ/35201c83e922123d8faab284f3e792d1/_DSC9177.jpg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://tatambale.id/" />
        <meta
          property="twitter:title"
          content="Tatambale Agroedutourism - Wisata Alam Seru & Edukatif"
        />
        <meta
          property="twitter:description"
          content="Temukan pengalaman wisata yang edukatif dan penuh petualangan di Bale Gandrung dan Tatamba,  destinasi wisata agroeduwisata di kawasan Gunung Slamet."
        />
        <meta
          property="twitter:image"
          content="https://images.ctfassets.net/4wpmwscnwvd0/bytO75UvT8TUu24gTS5HQ/35201c83e922123d8faab284f3e792d1/_DSC9177.jpg"
        />
      </Head>
      <AppShell>
        <Component {...pageProps} />
      </AppShell>
    </>
  );
}
