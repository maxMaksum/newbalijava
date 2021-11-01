import Head from 'next/head'
import FooterPage from '../../components/footer/FooterPage';
import Image from "next/image";

import {useState } from "react";
import { PlusIcon, XIcon } from "@heroicons/react/solid";

import ReactPlayer from "react-player/lazy";

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
          thumbnails {
            url
          }
          mp4 {
            url
          }
          images123{
            url
          }
        }
        }
      
      `
  
      const variables = {
        pageSlug:pageSlug
    }

   const dataG = await graphQLClient.request(query, variables)  
   const data = dataG.video
  
  
  return {
    props: {data} // will be passed to the page component as props
  }
}

function page({data}) {


  const [showPlayer, setShowPlayer] = useState(false);
    return (
      <div className=" mx-auto">
        <Head>
          <title>BALIJAVA SPIRIT</title>
        </Head>

        <section className="relative">
          <div className=" relative min-h-[calc(100vh-72px)]">
            <Image src={data.thumbnails.url} layout="fill" objectFit="cover" />
          </div>
          <div className="absolute inset-y-12 md:inset-y-auto md:bottom-10 inset-x-4 md:inset-x-12 space-y-6 z-50">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              {data.title}
            </h1>
            <div className="flex items-center space-x-3 md:space-x-5">
              <button className="text-xs md:text-base bg-[#f9f9f9] text-black flex items-center justify-center py-2.5 px-6 rounded hover:bg-[#c6c6c6]">
                <img
                  src="/images/play-icon-black.svg"
                  alt=""
                  className="h-6 md:h-8"
                />
                <span className="uppercase font-medium tracking-wide">
                  Play
                </span>
              </button>

              <button
                className="text-xs md:text-base bg-black/30 text-[#f9f9f9] border border-[#f9f9f9] flex items-center justify-center py-2.5 px-6 rounded hover:bg-[#c6c6c6]"
                onClick={() => setShowPlayer(true)}
              >
                <img
                  src="/images/play-icon-white.svg"
                  alt=""
                  className="h-6 md:h-8"
                />
                <span className="uppercase font-medium tracking-wide">
                  Trailer
                </span>
              </button>
              <div className="rounded-full border-2 border-white flex items-center justify-center w-11 h-11 cursor-pointer bg-black/60">
                <PlusIcon className="h-6" />
              </div>

              <div className="rounded-full border-2 border-white flex items-center justify-center w-11 h-11 cursor-pointer bg-black/60">
                <img src="/images/group-icon.svg" alt="" />
              </div>
            </div>
            <p className="text-xs md:text-sm">{data.title}</p>
            <h4 className="text-sm md:text-lg max-w-4xl">{data.description}</h4>
          </div>
          {/* bg-overlay */}
          {showPlayer && (
            <div className="absolute inset-0 bg-black opacity-50 h-full w-full z-50"></div>
          )}
          <div
            className={`absolute top-3 inset-x-[7%] md:inset-x-[13%] rounded overflow-hidden transition duration-1000 ${
              showPlayer ? "opacity-100 z-50" : "opacity-0"
            }`}
          >
            <div className="flex items-center justify-between bg-black text-[#f9f9f9] p-3.5">
              <span className="font-semibold">Play Trailer</span>
              <div
                className="cursor-pointer w-8 h-8 flex justify-center items-center rounded-lg opacity-50 hover:opacity-75 hover:bg-[#0F0F0F]"
                onClick={() => setShowPlayer(false)}
              >
                <XIcon className="h-5" />
              </div>
            </div>
            <div className="relative pt-[56.25%]">
              <ReactPlayer
                url={`${data.mp4.url}`}
                width="100%"
                height="100%"
                style={{ position: "absolute", top: "0", left: "0" }}
                controls={true}
                playing={showPlayer}
              />
            </div>
          </div>
        </section>
        <div className="mt-4  relative flex flex-col mx-4 p-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            {data.title}
          </h1>
          <p>{data.description}</p>

          <h1>Galeries</h1>
          <div className="flex items-center justify-center  bg-gay-700">

       
            <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-default p-2 -m-2">
            {data.images123.map((p)=>(
             
             <div key={p.id} className=" bg-gray-200 m-2 rounded">
              <div className="relative min-w-[300px] min-h-[200px] md:min-w-[330px]">
              <Image
                src={p.url}
                layout="fill"
              
                objectFit="contain"
                className="rounded-lg"
  
                className="bg-cover p-4 bg-center bg-norepeat"
              />
            </div>
    
          </div>
            ))}
              </div>
            
          </div>
        </div>
        <FooterPage/>
      </div>
    );
}

export default page
