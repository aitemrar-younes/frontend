import Custom_Form from "./pages/Form/__Form";
import Home from "./pages/Home/Home"
import Modal from "./pages/Modal/Modal";
import Table from "./pages/Table/Table";
import Login from "./pages/login/Login"
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/login" element={<Login/>}  />
        <Route path="/components/table" element={<Table/>}  />
        <Route path="/components/modal" element={<Modal/>}  />
        <Route path="/components/form" element={<Custom_Form />}  />
    </Routes>
  )
}
export default App;