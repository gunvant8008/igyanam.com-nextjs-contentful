import Header from "./Header"
import Footer from "./Footer"

type LayoutProps = {
  children: JSX.Element | JSX.Element[] | string
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="layout">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
