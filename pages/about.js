
import BannerCategory from '../components/card/BannerCategory'
// import FooterPage from '../components/FooterPage'
import Card from '../components/card/Card'

import {aboutPages} from '../components/MockData'
function About() {
    return (
        <div className=""  >
        <BannerCategory/>
    

        <div className="md:grid grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3 gap-2">
            
        {
            aboutPages.map((p)=>(
                <Card
                title={p.title}
                category={p.category}
                description={p.description}
                />
            ))
        }
        </div>    
</div>
    );
  }
  
  export default About