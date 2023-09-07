// ./nextjs-pages/src/pages/index.tsx
import '../app/globals.css'
import { groq } from "next-sanity";
import type { SanityDocument } from "@sanity/client";
import Rivers from "@/components/Rivers";
import Header from "@/components/Header";
import Banner from '@/components/Banner';
import { client } from "../../sanity/lib/client";


export const riverssQuery = groq`*[_type == "rivers" && defined(slug.current)]{
  _id, name, slug, prompts
}`;

export const getStaticProps = async () => {
  const data = await client.fetch(riverssQuery);
    console.log(data);
  return { props: { data } };
};

export default function Home({ data }: { data: SanityDocument[] }) {
  return (
    <>
        <Header/>
        <Banner/>
        <Rivers rivers={data} />
    </>
    )
}