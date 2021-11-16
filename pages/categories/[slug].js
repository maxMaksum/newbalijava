import { useState } from "react";
import BannerCategory from "../../components/card/BannerCategory";
import Content from "../../components/card/Content";
import CardScroll from "../../components/card/CardScroll";
import Video from "../../components/video/Video";
import {
  getPosts,
  getPostDetails,
  getCategories,
  getCategory,
} from "../../services";

export async function getStaticProps({ params }) {
  const pageSlug = params.slug;
  const category = await getCategory(pageSlug);

  return {
    props: { category }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  // const posts = await getPosts();
  const posts = await getCategories();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

function page({ category }) {
  console.log(category);
  const [showPlayer, setShowPlayer] = useState(false);

  const playVideo = () => {
    setShowPlayer(!showPlayer);
  };

  return (
    <div className="">
      {!showPlayer && (
        <div>
          <BannerCategory playVideo={playVideo} url={category.thumbnails.url} />
        </div>
      )}

      {showPlayer && (
        <div className="z-50 min-h-96 absolute top-0">
          <Video playVideo={playVideo} url={category.video.url} />
        </div>
      )}

      <div className="relative my-4">
        <Content title={category.title} description={category.description} />
      </div>
      <div>
        <CardScroll />
      </div>
      {/* <FooterPage/> */}
    </div>
  );
}

export default page;
