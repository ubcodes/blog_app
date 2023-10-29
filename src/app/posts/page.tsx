"use client";
import React from "react";
import { useRouter } from "next/router";
import { getPosts, getPostDetails } from "@/services";
import { Articles, Hero, Loader } from "@/components";
// import moment from "moment";

export default function Post() {
  
  return <div>this is a post</div>;
}
// const AllPosts = ({ post }: { post: any }) => {
//   const router = useRouter();

//   // if (router.isFallback) {
//   //   return <Loader />;
//   // }

//   return <div>this is another thing</div>;
// };

// export default AllPosts;

// export async function getStaticProps({ params }: { params: any }) {
//   const data = await getPostDetails(params.slug);
//   return {
//     props: {
//       post: data,
//     },
//   };
// }

// import { GetStaticPaths } from "next";
// Remove this import statement since getPosts is already imported in getStaticPaths
// import { getPosts } from '@/services';

// export const getStaticPaths: GetStaticPaths = async () => {
//   const posts = await getPosts();
//   return {
//     paths: posts.map(({ node: { slug } }: { node: { slug: string } }) => ({
//       params: { slug },
//     })),
//     fallback: false,
//   };
// };
