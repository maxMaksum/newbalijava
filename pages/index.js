import Head from 'next/head'
import Banner from '../components/card/Banner'

import Brands from '../components/video/Brands'
import Posts from '../components/posts/Posts'
import { GraphQLClient, gql } from 'graphql-request'

import React, { useContext } from 'react';
import { Store } from '../utils/Store'

export default function Home({videos}) {


  const { dispatch } = useContext(Store);

  const closeMenu=()=>{
    dispatch({type:"CLOSE_MENU"})
  }

  return (
    
    <div className=" mx-auto">
      <Head>
        <title>BALIJAVA SPIRIT</title>
      </Head>

        <main onMouseEnter={closeMenu}  className="relative min-h-screen after:bg-home after:bg-center after:bg-cover after:bg-no-repeat after:bg-fixed after:absolute after:inset-0 after:z-[-1]">
          <Banner/>
          <Brands/>
        
          <Posts products={videos} title={"Cotton"}/>
          <Posts products={videos} title={"Linen"}/>
          <Posts products={videos} title={"Factory Services"}/>
          <Posts products={videos} title={"Active Wear"}/>
          <Posts products={videos} title={"Casual"}/>
         
      
        </main>
     
      
    </div>
  );
}


export async function getServerSideProps(){

  const url =process.env.ENDPOINT
  const graphQLClient = new GraphQLClient(url, {
      headers: {
        authorization: process.env.GRAPH_CMS_TOKEN
      },
    })

const query = gql`
query{
  videos{
    createdAt
    id,
    title,
    slug,
    seen,
    description,
    tags
    thumbnails {
      url
    }
   categories {
     title
   }
    mp4 {
      url
    }
  }
}
`
const dataG = await graphQLClient.request(query)
const videos = dataG.videos

 
 



  return{
      props:{
          videos,
        
     
      }
  }
}


