import React from "react";
import Link from "next/link";
import Image from "next/image";
// import { getPosts, getPostDetails } from "@/services";
import { request, gql } from "graphql-request";
import { Post } from "@/services/types";

export type data = {
  id: number;
  image: string;
  imageDescription: string;
  descrption: string;
  link: string;
};
type ArticlesData = {
  data: any;
};

const data = [
  {
    id: 0,
    image: "/heroimage.jpg",
    description: "Here are some things yu should know about how we work",
    link: "/workhard",
    imageDescription: "image of workhard",
  },
  {
    id: 1,
    image: "/banner.jpeg",
    description: "banner",
    link: "/banner",
    imageDescription: "image of banner",
  },
  {
    id: 2,
    image: "/cute-puppy1.jpg",
    description:
      "a cute puppy I'd love to buy, I used to call them loyal friends",
    link: "/cutepuppy",
    imageDescription: "image of cutepuppy",
  },
  {
    id: 3,
    image: "/dark-rose.png",
    description: "darkrose",
    link: "/darkrose",
    imageDescription: "image of darkrose",
  },
  {
    id: 4,
    image: "/different.png",
    description: "alwasys dare to stand out, always",
    link: "/different",
    imageDescription: "image of different",
  },
  {
    id: 5,
    image: "/dog.jpg",
    description:
      " dogs are amazing, cute and are known as loyal friends, mans's best friend they say",
    link: "/dog",
    imageDescription: "image of dog",
  },
  {
    id: 6,
    image: "/drums.jpg",
    description:
      "Drums are very col, fun and intriguing, the heart beat of every music are the drums",
    link: "/drums",
    imageDescription: "image of drums",
  },
  {
    id: 7,
    image: "/female_drummer.jpg",
    description:
      "female drummers are amazing, producing unique rhythms everyday",
    link: "/femaledrummer",
    imageDescription: "image of female drummer",
  },
  {
    id: 8,
    image: "/forgive.jpg",
    description:
      "forgiving what you can't forget an amzing book a must read for everyone",
    link: "/forgive",
    imageDescription: "image of forgive",
  },
  {
    id: 9,
    image: "/zero-code-days.jpg",
    description:
      "zero code, code everyday consistentcy is the key, no giving up",
    link: "/zerocode",
    imageDescription: "image of zero code",
  },
];

const Articles = (props: { posts: Post[] }) => {
  return (
    <div className="mx-auto">
      <h1 className="mx-auto flex justify-center font-semibold text-4xl w-full">
        All Articles
      </h1>
      <div className="flex align-middle justify-center flex-wrap mx-auto h-screen  my-10 w-[50%] p-6 ">
        <div className="grid gap-12  lg:grid-cols-2  justify-center align-middle mx-auto">
          {/* {data.map((item: any) => (
            <Link href={item.link} key={item.id}>
              <div className="">
                <div
                  className="rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-60"
                  style={{ backgroundImage: `url('${item.image}')` }}
                ></div>
                <div>
                  <p className="text-center mx-auto font-semibold my-4">
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          ))} */}
          {props.posts.map((post, id) => {
            return (
              <Link href={`/posts/${post.node.slug}`} key={id}>
                <div className="">
                  <div
                    className="rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-60"
                    style={{
                      backgroundImage: `url('${post.node.featuredImage.url}')`,
                    }}
                  ></div>
                  <div>
                    <p className="text-center mx-auto font-semibold my-4">
                      {post.node.title}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Articles;

/* 
export async function getStaticProps({ params }: { params: any }) {
  const data = await getPostDetails(params.slug);
  return {
    props: {
      post: data,
    },
  };
}

import { GetStaticPaths } from "next";
// Remove this import statement since getPosts is already imported in getStaticPaths
// import { getPosts } from '@/services';

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }: { node: { slug: string } }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}; */
