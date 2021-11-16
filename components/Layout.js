import Header from "./header/Header";
import FooterSticky from "./footer/FooterSticky";
import FooterPage from "./footer/FooterPage";



function Layout({ children , navigation,category}) {
 
  return (
    <div className="relative ">
      <Header navigation={navigation} category={category}/>
      <div>
        {children}
        <FooterSticky />
      </div>

      <FooterPage />
    </div>
  );
}

export default Layout;
