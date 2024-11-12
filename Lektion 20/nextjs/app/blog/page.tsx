"use client";

import { useSearchParams } from "next/navigation";
import Link from 'next/link';

// /blog
// /blog/123  (få ut 123 så används useParams)
// /blog?id=123 (får ut 123 så anvds useSearchParams)
// /blog/?namn=Tobbe

const Blog = () => {

    const searchParams = useSearchParams();
    const namn = searchParams.get("namn");

    return(
        <>
            <h1>Min Blog</h1>
            <p>Hej { namn }, välkommen till min blog! Den är bra!</p>
            <p><Link href="/about">Läs mer om oss!</Link></p>        
        </>
    );

}

export default Blog;