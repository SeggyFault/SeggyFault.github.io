import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Blog from "./pages/Blog.jsx"
import Home from "./pages/Home.jsx";
import Header from "./components/Header";
import BlogNav from "./components/BlogNav";
  
function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

function Layout() {
  const location = useLocation();
  return (
    <>
      {/* Show header only on Home page */}
      {location.pathname !== "/blog" && <Header />}
      
      {/* Show BlogNav on Blog page */}
      {location.pathname === "/blog" && <BlogNav />}

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
    </>
  );
}

export default App;
