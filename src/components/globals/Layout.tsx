import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <main className="layout">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
