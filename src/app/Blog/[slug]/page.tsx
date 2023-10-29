"use client";
import React, { useState,useEffect } from "react";
import { Articles, Hero, Loader } from "@/components";
import { getPosts, getPostDetails } from "@/services";
import { GetStaticPaths } from "next";
import { useRouter } from "next/router";
import { get } from "http";

export default function Blog({ post }: { post: any }) {
  const router = useRouter();
  const [text, setText] = useState("");

  useEffect(() => {
    getPosts().then(((res) => {
        setText(JSON.stringify(res))
    }))
  }, [])
  return (
    <div>
      {/* <Hero />
      <Articles post={post} /> */}
      {text}
    </div>
  );
}
