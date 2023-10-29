"use client";
import Image from "next/image";
import { Hero, Articles } from "@/components";
// import Blog from "./Blog/page";
import Blog from "./Blog/[slug]/page";
import { useEffect, useState } from "react";
import { getPosts } from "@/services";
import { Post } from "@/services/types";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getPosts().then((res: Post[]) => {
      setPosts(res);
    });
  }, []);
  return (
    <div>
      <Hero />
      <Articles posts={posts} />
    </div>
  );
}
