import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";


// Denne filen er en wrapper for alle sider, slik at vi slipper å skrive inn header, nav og footer på hver side.

const Layout = ({ children }) => {
    let title = "Gruppe 22"

  return (
    <div>
      <Header title={title} />
      <Nav />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;