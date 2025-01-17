import Head from "@/components/Head"; // Atau "next/head" jika menggunakan bawaan
import dynamic from "next/dynamic";
import AboutMe from "@/components/about/AboutMe";
import Contact from "@/components/about/Contact";
import Image from "next/image";
import MeImage from "public/me-2.jpg"; // Import gambar langsung
// import Spotify from "@/components/about/spotify";

const Blob = dynamic(() => import("@/components/about/Blob"), { ssr: false });

const AboutPage = () => {
  return (
    <div
      id="main-content"
      className="flex flex-col flex-1 h-full w-full max-w-3xl mx-auto px-2 md:px-0"
    >
      <Head title="About" />
      <div className="flex justify-center relative">
        {/* Global styles ditambahkan menggunakan <style> tanpa atribut `jsx global` */}
        <style>{`
          .me-picture {
            clip-path: url(#blob);
          }
        `}</style>
        <Image
          alt="me"
          className="me-picture noselect"
          src={MeImage}
          width={400}
          height={400}
          placeholder="blur"
          quality={100}
        />
        <Blob id="blob" />
      </div>
      <div className="prose dark:prose-dark mt-[-4rem] max-w-full z-20">
        <AboutMe />
        {/* <Spotify /> */}
        <Contact />
      </div>
    </div>
  );
};

export default AboutPage;
