import Head from 'next/head'
import {MockData2, Category} from '../../components/MockData2'
import PageSection from '../../components/PageSection'
import BannerCategory from '../../components/BannerCategory'



export async function getStaticProps(context) {
  const {params} = context

  const pageCategory= params.category
  const data = MockData2.map((item)=>item.category) 

  const filteredData = Category.filter((item)=>item.category.toString()===params.category)

  return {
    props: {data, filteredData, pageCategory} // will be passed to the page component as props
  }
}

export async function getStaticPaths() {
  return {
    paths: MockData2.map((item)=>({
        params:{
            category:item.category.toString()
            
        }
    })),
    fallback: false // See the "fallback" section below
  };
}

function page({data, filteredData, pageCategory}) {

  const filteredDataLength = filteredData.length

  console.log(pageCategory)

    return (
      <div className="bg-gray-100 mx-auto">
      <Head>
        <title>BALIJAVA SPIRIT</title>
      </Head>

      <div>
       
        <BannerCategory pageCategory={pageCategory}/>
        
        <main className={`${filteredDataLength >= 2 ? `grid grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3 gap-2`:`flex`} `}>
        
         {filteredData.map(({ id, title, price, description, category, image })=>(
            <PageSection 
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
                filteredDataLength={filteredDataLength}
                />
                
                ))
         }
        </main>
      </div>
    </div>
        
    )
}

export default page
