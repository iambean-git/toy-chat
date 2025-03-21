import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LayoutWithNavbar from "./layouts/LayoutWithNavbar";

import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Chat from "./pages/Chat";

import Login from "./pages/Login";

import Test from "./pages/Test";
function App() {

  return (
    <>
        <Router>
          <Routes>
            <Route element={<LayoutWithNavbar />}>
              <Route path="/" element={<Home />} />
              <Route path="/page1" element={<Page1 />} />
              <Route path="/page2" element={<Page2 />} />
              <Route path="/chat" element={<Chat />} />
              
              <Route path="/test" element={<Test />} />
            </Route>

            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
    </>
  )
}

export default App
