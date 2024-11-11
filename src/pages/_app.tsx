import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AppShell from "../components/layouts/AppShell";
import Head from "next/head";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
            <link rel="canonical" href="https://your-website.com" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <title>Judul Website</title>
        <meta
          name="description"
          content="Temukan pengalaman wisata yang edukatif dan penuh petualangan di Bale Gandrung dan Tatamba,  destinasi wisata agroeduwisata di kawasan Gunung Slamet, Jawa Tengah."
        />
        <meta property="og:title" content="Add title here" />
        <meta property="og:description" content="Temukan pengalaman wisata yang edukatif dan penuh petualangan di Bale Gandrung dan Tatamba,  destinasi wisata agroeduwisata di kawasan Gunung Slamet, Jawa Tengah." />
        <meta
          property="og:image"
          content="https://images.ctfassets.net/4wpmwscnwvd0/YFU9NeL7rDDPWH9diIdY6/7c58545c40e7f99e68a50a47af6a5cf1/DJI_0822.JPG"
        />
        <meta property="og:url" content="https://your-website.com" />
        <meta name="twitter:title" content="Add title here" />
        <meta name="twitter:description" content="Temukan pengalaman wisata yang edukatif dan penuh petualangan di Bale Gandrung dan Tatamba,  destinasi wisata agroeduwisata di kawasan Gunung Slamet, Jawa Tengah." />
        <meta
          name="twitter:url"
          content="https://images.ctfassets.net/4wpmwscnwvd0/YFU9NeL7rDDPWH9diIdY6/7c58545c40e7f99e68a50a47af6a5cf1/DJI_0822.JPG"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <AppShell>
        <Component {...pageProps} />
      </AppShell>
    </>
  );
}
