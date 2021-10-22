
import BannerCategory from '../components/BannerCategory'
import Card from '../components/Card'
import Video from '../components/Video'
import {aboutPages} from '../components/MockData2'
function About() {
    return (
        <div className=""  >
        <BannerCategory/>
        <Video/>

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