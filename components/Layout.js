import Header from './Header'
import FooterSticky from './FooterSticky'
function Layout({children}) {
    return (
      <div className="relative ">
       
          <Header />
          {children}
          <FooterSticky />
      
      </div>
    );
}

export default Layout
