import Link from "next/link";
import { v4 } from 'uuid';
import type { SanityDocument } from "@sanity/client";
import Head from "next/head";
export default function Rivers({ rivers = [] }: { rivers: SanityDocument[] }) {
    const title = rivers.length === 1 ? `1 River` : `${rivers.length} Rivers`
    
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main className="container mx-auto grid grid-cols-1 divide-y divide-blue-100">
        <h1 className="text-2xl p-4 font-bold">{title}</h1>
        {rivers.map((river) => (
          <Link key={river._id} href={river.slug.current} className="p-4 hover:bg-blue-50">
            <h2>{river.name}</h2>
            {river.prompts.map((p: string) => (
               <p className="text-2xl mb-5 mt-2" key={v4()}>{p}</p>
            ))}
            {/* <Prompt p={p}/> */}
          </Link>
        ))}
      </main>
    </>
  );
}



