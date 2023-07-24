import { Outlet } from "react-router-dom"
// import FileContentComponent from "./components/blog"
import Footer from "./components/footer/footer.component"
import Navbar from "./components/navbar/navbar.component"

function App() {

  return (
    <div className="mx-20">
      <Navbar />
      <Outlet />
      <Footer />
      {/* <FileContentComponent /> */}
    </div>
  )
}

export default App
