import RootFrame from "./components/layout/RootFrame";
import Custom_Form from "./pages/Form/__Form";
import Home from "./pages/Home/Home"
import Modal from "./pages/Modal/Modal";
import Table from "./pages/Table/Table";
import Login from "./pages/login/Login"
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <Routes>
        <Route path="/login" element={<Login/>}  />
        <Route path="/" element={<RootFrame/>}>
          <Route path="" element={<Home/>}  />
          <Route path="components/table" element={<Table/>}  />
          <Route path="components/modal" element={<Modal/>}  />
          <Route path="components/form" element={<Custom_Form />}  />
        </Route>
    </Routes>
  )
}
export default App;