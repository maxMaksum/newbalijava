import ReactPlayer from "react-player/lazy";
import { useState } from "react";

// import FooterPage from "../../components/Footer/FooterPage"
import BannerCategory from "../../components/card/BannerCategory";
import Content from "../../components/card/Content";
import CardScroll from "../../components/card/CardScroll";
import Image from "next/image";
import { GraphQLClient, gql } from "graphql-request";
import Video from "../../components/video/Video";
export async function getServerSideProps(pageContext) {
  const url = process.env.ENDPOINT;

  const graphQLClient = new GraphQLClient(url, {
    headers: {
      authorization: process.env.GRAPH_CMS_TOKEN,
    },
  });

  const pageSlug = pageContext.query.slug;

  const query = gql`
    query MyQuery($pageSlug: String!) {
      category(where: { slug: $pageSlug }) {
        title
        slug
        description
        thumbnails {
          id
          url
        }
        videos {
          id
          title
          slug
          thumbnails {
            id
            url
          }
        }
        video {
          id
          url
        }
      }
    }
  `;

  const variables = {
    pageSlug: pageSlug,
  };

  const dataG = await graphQLClient.request(query, variables);
  const data = dataG.category;

  return {
    props: { data }, // will be passed to the page component as props
  };
}

const categories = ({ data }) => {
  const [showPlayer, setShowPlayer] = useState(false);

  const playVideo = () => {
    setShowPlayer(!showPlayer);
  };

  return (
    <div className="relative">
      {!showPlayer && (
        <div>
          <BannerCategory
            title={data.title}
            description={data.description}
            playVideo={playVideo}
            url={data.thumbnails.url}
          />
        </div>
      )}

      {showPlayer && (
        <div className="z-50 min-h-96">
          <Video playVideo={playVideo} url={data.video.url} />
        </div>
      )}

      <div className="relative mt-4">
        <Content title={data.title} description={data.description} />
      </div>
      <div>
        <CardScroll />
      </div>
      {/* <FooterPage/> */}
    </div>
  );
};

export default categories;
