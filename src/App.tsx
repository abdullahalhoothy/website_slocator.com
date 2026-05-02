import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'

import Article from './pages/Article'
import Solution from './pages/Solution'

import SLocatorPage from './pages/SLocatorPage'

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#100324]">
      <Navbar />
      <main className="flex-grow pt-[80px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />

          {/* المسارات الديناميكية الاحترافية */}
          <Route path="/article/:slug" element={<Article />} />
          <Route path="/solutions/:slug" element={<Solution />} />
        </Route>

        <Route path="/territory-planning" element={<SLocatorPage />} />
      </Routes>
    </Router>
  )
}

export default App