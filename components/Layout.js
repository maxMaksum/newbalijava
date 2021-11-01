import Header from './header/Header'
import FooterSticky from './footer/FooterSticky'
function Layout({children}) {
    return (
      <div className="relative ">
        <Header />
        <div>{children}</div>
        <FooterSticky />
      </div>
    );
}

export default Layout
