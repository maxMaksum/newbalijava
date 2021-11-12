import Head from "next/head";
import Banner from "../components/card/Banner";
import Brands from "../components/video/Brands";
import Posts from "../components/posts/Posts";
import { GraphQLClient, gql } from "graphql-request";
import React, { useContext } from "react";
import { Store } from "../utils/Store";
import { getPosts } from "../services";

export default function Home({ posts }) {
  const { dispatch } = useContext(Store);

  const closeMenu = () => {
    dispatch({ type: "CLOSE_MENU" });
  };

  console.log(posts);

  return (
    <div className=" mx-auto">
      <Head>
        <title>BALIJAVA SPIRIT</title>
      </Head>

      <main
        onMouseEnter={closeMenu}
        className="relative min-h-screen bg-gray-200"
      >
        <Banner />
        <Brands />

        <Posts products={posts} title={"Cotton"} />
        <Posts products={posts} title={"Linen"} />
        <Posts products={posts} title={"Factory Services"} />
        <Posts products={posts} title={"Active Wear"} />
        <Posts products={posts} title={"Casual"} />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: {
      posts,
    },
  };
}
