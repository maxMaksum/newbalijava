import Head from "next/head";
import FooterPage from "../../components/footer/FooterPage";

import { useState } from "react";
import BannerCategory from "../../components/card/BannerCategory";
import Content from "../../components/card/Content";
import CardScroll from "../../components/card/CardScroll";
import Video from "../../components/video/Video";
import { getPosts, getPostDetails } from "../../services";

export async function getStaticProps({ params }) {
  const pageSlug = params.slug;
  const post = await getPostDetails(pageSlug);

  return {
    props: { post }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

function page({ post }) {
  const [showPlayer, setShowPlayer] = useState(false);

  const playVideo = () => {
    setShowPlayer(!showPlayer);
  };
  console.log(post);
  return (
    <div className="">
      {!showPlayer && (
        <div>
          <BannerCategory playVideo={playVideo} url={post.thumbnails.url} />
        </div>
      )}

      {showPlayer && (
        <div className="z-50 min-h-96 absolute top-0">
          <Video playVideo={playVideo} url={post.mp4.url} />
        </div>
      )}

      <div className="relative my-4">
        <Content title={post.title} description={post.description} />
      </div>
      <div>
        <CardScroll />
      </div>
      {/* <FooterPage/> */}
    </div>
  );
}

export default page;
