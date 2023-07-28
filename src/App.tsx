import { Outlet } from "react-router-dom"
// import FileContentComponent from "./components/blog"
import Footer from "./components/footer/footer.component"
import Navbar from "./components/navbar/navbar.component"
import ScrollButton from "./components/scroll-button/scroll-button.component"

function App() {

  return (
    <div className="mx-20">
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollButton />
      {/* <FileContentComponent /> */}
    </div>
  )
}

export default App
