
import '../styles/globals.css'
// import '../public/index.css'
import Layout from '../components/Layout'
import { StoreProvider } from '../utils/Store';

function MyApp({ Component, pageProps }) {
  return (

   <div>
      <StoreProvider>
        <Layout>
          <Component {...pageProps} />
          </Layout>
        </StoreProvider>
   
  </div>
  );
    
}

export default MyApp
