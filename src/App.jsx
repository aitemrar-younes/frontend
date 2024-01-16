import Home from "./pages/Home/Home"
import Table from "./pages/Table/Table";
import Login from "./pages/login/Login"
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/login" element={<Login/>}  />
        <Route path="/components/table" element={<Table/>}  />
    </Routes>
  )
}
export default App;