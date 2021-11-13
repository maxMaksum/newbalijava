import { request, GraphQLClient, gql } from "graphql-request";

const graphqlAPI = process.env.ENDPOINT;

const url = process.env.ENDPOINT;
const graphQLClient = new GraphQLClient(url, {
  headers: {
    authorization: process.env.GRAPH_CMS_TOKEN,
  },
});

export const getBannerData = async () => {
  const query = gql`
    query MyQuery {
      banners {
        id
        slug
        title
        images {
          url
        }
      }
    }
  `;

  const dataG = await graphQLClient.request(query);
  return dataG.banners;
};

export const getHeaderData = async () => {
  const query = gql`
  query MyQuery {
    links {
      id
      title
      slug
    }
  }
  `;

  const dataG = await graphQLClient.request(query);
  return dataG.links;
};
export const getPosts = async () => {
  const query = gql`
    query {
      videos {
        createdAt
        id
        title
        slug
        description
        thumbnails {
          url
        }
        videos {
          id
          title
          slug
        }
      }
    }
  `;

  const dataG = await graphQLClient.request(query);

  return dataG.videos;
};

// export const getCategories = async () => {
//   const query = gql`
//     query GetGategories {
//       categories {
//         name
//         slug
//       }
//     }
//   `;

//   const result = await request(graphqlAPI, query);

//   return result.categories;
// };

export const getPostDetails = async (pageSlug) => {
  const query = gql`
    query ($pageSlug: String!) {
      video(where: { slug: $pageSlug }) {
        id
        title
        slug
        description
        thumbnails {
          url
        }
        mp4 {
          url
        }
        videos {
          id
          title
          slug
        }
      }
    }
  `;

  const variables = {
    pageSlug: pageSlug,
  };
  const dataG = await graphQLClient.request(query, variables);
  return dataG.video;
};

// export const getSimilarPosts = async (categories, slug) => {
//   const query = gql`
//     query GetPostDetails($slug: String!, $categories: [String!]) {
//       posts(
//         where: {
//           slug_not: $slug
//           AND: { categories_some: { slug_in: $categories } }
//         }
//         last: 3
//       ) {
//         title
//         featuredImage {
//           url
//         }
//         createdAt
//         slug
//       }
//     }
//   `;
//   const result = await request(graphqlAPI, query, { slug, categories });

//   return result.posts;
// };

// export const getAdjacentPosts = async (createdAt, slug) => {
//   const query = gql`
//     query GetAdjacentPosts($createdAt: DateTime!, $slug: String!) {
//       next: posts(
//         first: 1
//         orderBy: createdAt_ASC
//         where: { slug_not: $slug, AND: { createdAt_gte: $createdAt } }
//       ) {
//         title
//         featuredImage {
//           url
//         }
//         createdAt
//         slug
//       }
//       previous: posts(
//         first: 1
//         orderBy: createdAt_DESC
//         where: { slug_not: $slug, AND: { createdAt_lte: $createdAt } }
//       ) {
//         title
//         featuredImage {
//           url
//         }
//         createdAt
//         slug
//       }
//     }
//   `;

//   const result = await request(graphqlAPI, query, { slug, createdAt });

//   return { next: result.next[0], previous: result.previous[0] };
// };

// export const getCategoryPost = async (slug) => {
//   const query = gql`
//     query GetCategoryPost($slug: String!) {
//       postsConnection(where: { categories_some: { slug: $slug } }) {
//         edges {
//           cursor
//           node {
//             author {
//               bio
//               name
//               id
//               photo {
//                 url
//               }
//             }
//             createdAt
//             slug
//             title
//             excerpt
//             featuredImage {
//               url
//             }
//             categories {
//               name
//               slug
//             }
//           }
//         }
//       }
//     }
//   `;

//   const result = await request(graphqlAPI, query, { slug });

//   return result.postsConnection.edges;
// };

// export const getFeaturedPosts = async () => {
//   const query = gql`
//     query GetCategoryPost() {
//       posts(where: {featuredPost: true}) {
//         author {
//           name
//           photo {
//             url
//           }
//         }
//         featuredImage {
//           url
//         }
//         title
//         slug
//         createdAt
//       }
//     }
//   `;

//   const result = await request(graphqlAPI, query);

//   return result.posts;
// };

// export const submitComment = async (obj) => {
//   const result = await fetch("/api/comments", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(obj),
//   });

//   return result.json();
// };

// export const getComments = async (slug) => {
//   const query = gql`
//     query GetComments($slug: String!) {
//       comments(where: { post: { slug: $slug } }) {
//         name
//         createdAt
//         comment
//       }
//     }
//   `;

//   const result = await request(graphqlAPI, query, { slug });

//   return result.comments;
// };

// export const getRecentPosts = async () => {
//   const query = gql`
//     query GetPostDetails() {
//       posts(
//         orderBy: createdAt_ASC
//         last: 3
//       ) {
//         title
//         featuredImage {
//           url
//         }
//         createdAt
//         slug
//       }
//     }
//   `;
//   const result = await request(graphqlAPI, query);

//   return result.posts;
// };
