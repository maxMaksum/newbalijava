import Head from 'next/head'
import Banner from '../components/Banner'
import FooterPage from '../components/FooterPage'
import ContentWelcome from '../components/ContentWelcome'
import Posts from '../components/Posts'
import {Category} from '../components/MockData2'

import React, { useContext } from 'react';
import { Store } from '../utils/Store'

export default function Home({data}) {

  const { state, dispatch } = useContext(Store);
  console.log(state.menuItem)

  const changeMenu=()=>{
    dispatch({type:"CHANGE_MENU"})
  }

  const closeMenu=()=>{
    dispatch({type:"CLOSE_MENU"})
  }

  return (
    
    <div className="bg-gray-100 mx-auto ">
      <Head>
        <title>BALIJAVA SPIRIT</title>
      </Head>

      <div className="mx-auto "> 
     
        <main onMouseEnter={closeMenu}  className=" h-screen w-100 ">
          <Banner/>
          <ContentWelcome/>
          <Posts products={data}/>
          <FooterPage/>
        </main>
     
        
      </div>
    </div>
  );
}


export async function getServerSideProps(){

   const useDummyData = true
   let res =""
   res = useDummyData? Category : await fetch(`https://fakestoreapi.com/products`).then(res=>res.json())

  const data =res

  return{
      props:{
          data,
     
      }
  }
}


