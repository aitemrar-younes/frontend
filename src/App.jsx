import RootFrame from "./components/layout/RootFrame"
import Home from "./pages/Home/Home"
import Login from "./pages/login/Login"
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
    {/* <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/login" element={<Login/>}  />
    </Routes> */}
    <RootFrame />
    </>
  )
}

export default App
