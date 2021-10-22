
import '../styles/globals.css'
import '../public/index.css'
import store from '../redux/store'
import { Provider } from 'react-redux'
import Layout from '../components/Layout'
import { StoreProvider } from '../utils/Store';

function MyApp({ Component, pageProps }) {
  return (

    <Provider store={store}>
      <StoreProvider>
        <Layout>
          <Component {...pageProps} />
          </Layout>
        </StoreProvider>
    </Provider>
  
  );
    
}

export default MyApp
