import Header from "./header/Header";
import FooterSticky from "./footer/FooterSticky";
import FooterPage from "./footer/FooterPage";



function Layout({ children }) {
 
  return (
    <div className="relative ">
      <Header />
      <div>
        {children}
        <FooterSticky />
      </div>

      <FooterPage />
    </div>
  );
}

export default Layout;
