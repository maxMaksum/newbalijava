import "../styles/globals.css";
// import '../public/index.css'
import Layout from "../components/Layout";
import { StoreProvider } from "../utils/Store";
import { getHeaderData, getCategories } from "../services/index";

function MyApp({ Component, pageProps, navigation, categoryC }) {
  return (
    <StoreProvider>
      <Layout navigation={navigation} category={categoryC}>
        <Component {...pageProps} />
      </Layout>
    </StoreProvider>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};

  const res = await getHeaderData();
  const category = await getCategories();

  const navigation = await res;
  const categoryC = await category;
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return {
    pageProps,
    navigation,
    categoryC,
  };
};
export default MyApp;
