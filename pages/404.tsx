import Head from "next/head";
import Image from "next/image";
import { Button, Layout } from "../components";

export default function ErrorPage() {
  return (
    <Layout>
      <Head>
        <title>ERROR 404 | upcrate</title>
        <meta property="og:title" content="ERROR 404" key="title" />
        <meta property="og:image" content="TODO:" />
        <meta property="og:description" content="TODO:" />
      </Head>
      <div className="relative">
        <div className="z-10 absolute bottom-32 max-w-4xl left-0 right-0 text-center mx-auto">
          <h1 className="font-display text-8xl text-rose">Oooops! Wrong way</h1>
          <h2 className="font-display text-red text-5xl my-10">Error</h2>
          <Button href="/" className="bg-purple text-white">
            Back to the harbor
          </Button>
        </div>
        <div className="z-0">
          <Image
            src="/404/background.png"
            objectFit="cover"
            objectPosition="center"
            width={1920}
            height={1054}
          />
        </div>
      </div>
    </Layout>
  );
}
