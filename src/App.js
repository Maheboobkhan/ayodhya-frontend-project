import { Routes, Route } from "react-router-dom";
import "./App.css"
import './index.css';
import Home from "./pages/Home.jsx";
import Blog from "./pages/Blog/Blog.jsx";
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  )
}

export default App;