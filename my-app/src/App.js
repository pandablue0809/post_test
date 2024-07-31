import { BrowserRouter, Route, Routes } from "react-router-dom";
import Post from "./pages/post";
import Home from "./pages/home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>        
      <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </BrowserRouter>
  )
}
