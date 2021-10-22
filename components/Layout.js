import Header from './Header'
import FooterSticky from './FooterSticky'
function Layout({children}) {
    return (
      <div className="relative h-full">
           <Header />
        <div className="flex flex-col">
         <div>
          {children}
          </div>
         
          <FooterSticky />
        </div>
      </div>
    );
}

export default Layout
