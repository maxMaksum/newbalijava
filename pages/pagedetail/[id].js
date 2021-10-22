import Head from 'next/head'

import {MockData2} from '../../components/MockData2'
import Description from '../../components/Description'

import BannerCategory from '../../components/BannerCategory'

import FooterPage from '../../components/FooterPage'

export async function getStaticProps(context) {
  const {params} = context

  const data = MockData2.find((item)=>item.id.toString()===params.id) 
  return {
    props: {data} // will be passed to the page component as props
  }
}

export async function getStaticPaths() {
  return {
    paths: MockData2.map((item)=>({
        params:{
            id:item.id.toString()
            
        }
    })),
    fallback: false // See the "fallback" section below
  };
}

function page({data}) {

  console.log(data)

    return (
      <div className="bg-gray-100 mx-auto">
      <Head>
        <title>BALIJAVA SPIRIT</title>
      </Head>

      <div>
        <main className=" mx-auto">
          <BannerCategory/>
         
            <Description
           
            id={data.id}
            title={data.title}
            category={data.category}
            description={data.description}
            price={data.price}
            image={data.image}
            
            />
            <FooterPage/>
        </main>
      </div>
    </div>
        
    )
}

export default page
