import { Outlet } from "react-router-dom"
import FileContentComponent from "./components/blog"
import Home from "./components/home"
import Footer from "./components/footer/footer.component"

function App() {

  return (
    <div className="mx-20">
      <Outlet />
      {/* <Footer /> */}
      {/* <FileContentComponent /> */}
    </div>
  )
}

export default App
