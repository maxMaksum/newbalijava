import Head from "next/head";
import Banner from "../components/card/Banner";
import Brands from "../components/video/Brands";
import Posts from "../components/posts/Posts";
import { GraphQLClient, gql } from "graphql-request";
import React, { useContext, useEffect } from "react";
import { Store } from "../utils/Store";
import { getPosts,getBannerData, getHeaderData } from "../services";

export default function Home({ posts, bannerdata, HeaderData }) {
  const { dispatch } = useContext(Store);

  const closeMenu = () => {
    dispatch({ type: "CLOSE_MENU" });
  };

  useEffect(()=>{
    dispatch({ type: 'SET_HEADERS', payload: { HeaderData } });
  },[])

  return (
    <div className=" mx-auto">
      <Head>
        <title>BALIJAVA SPIRIT</title>
      </Head>

      <main
        onMouseEnter={closeMenu}
        className="relative min-h-screen bg-gray-100"
      >
        <Banner bannerData={bannerdata}/>
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
  const bannerdata= await getBannerData()
  const HeaderData=await getHeaderData()
  return {
    props: {
      posts,
      bannerdata,
      HeaderData
      
    },
  };
}
