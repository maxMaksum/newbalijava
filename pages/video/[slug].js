import Head from 'next/head'

import {useEffect, useState} from "react"
import { GraphQLClient, gql } from 'graphql-request'

export async function getServerSideProps(pageContext) {


const url =process.env.ENDPOINT

const graphQLClient = new GraphQLClient(url, {
        headers: {
          authorization: process.env.GRAPH_CMS_TOKEN
        },
      })

const pageSlug = pageContext.query.slug

      const query = gql`
      query ($pageSlug: String!){
        video(where:{
          slug:$pageSlug
        }){
           createdAt
          id,
          title,
          slug,
          seen,
          description,
          tags
          thumnail {
            url
          }
          mp4 {
            url
          }
        }
        }
      
      `
  
      const variables = {
        pageSlug:"linen"
    }

   const dataG = await graphQLClient.request(query, variables)  
   const video = dataG.video.title
   console.log(video)
  return {
    props: {video} // will be passed to the page component as props
  }
}



function slug(video) {

    console.log(video)

   
    return (
      <div className="bg-gray-100 mx-auto">
      <Head>
        <title>BALIJAVA SPIRIT</title>
      </Head>

    
       
       
    </div>
        
    )
}

export default slug
