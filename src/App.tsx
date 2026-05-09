<<<<<<< HEAD
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header'; 
import LandingPage from './pages/LandingPage';
import SalesRoutePlanner from './pages/SalesRoutePlanner';
import Services from './pages/Services';
import Features from './pages/Features'; 
import { RoutePlannerFAQ } from './pages/RoutePlannerFAQ';
import TerritoryOptimization from './pages/TerritoryOptimization';
import TerritoryAdvantages from './pages/TerritoryAdvantages'; 
import { TerritoryCostSavings } from './pages/TerritoryCostSavings'; 
import { TerritoryFaq } from './pages/TerritoryFaq'; 
import { Pricing } from './pages/Pricing';
import { RoiCalculator } from './pages/RoiCalculator';
import { Integrations } from './pages/Integrations';
import { Customers } from './pages/Customers';
import { Contact } from './pages/Contact';
import { Blog } from './pages/Blog';
import { BlogPost1 } from './pages/BlogPost1';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/sales-route-planner" element={<SalesRoutePlanner />} />
            <Route path="/services" element={<Services />} />
            <Route path="/features" element={<Features />} />
            <Route path="/route-planner/faq" element={<RoutePlannerFAQ />} />
            <Route path="/territory-optimization" element={<TerritoryOptimization />} />
            <Route path="/territory-optimization/comparison" element={<TerritoryAdvantages />} />
            <Route path="/territory-optimization/cost-savings" element={<TerritoryCostSavings />} />
            <Route path="/territory-optimization/faq" element={<TerritoryFaq />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/roi" element={<RoiCalculator />} />
            <Route path="/return-on-investment/en" element={<RoiCalculator />} />
            <Route path="/integrations" element={<Integrations />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/successful-sales-reporting-in-the-field-with-portatour" element={<BlogPost1 />} />
            <Route path="/blog/article" element={<BlogPost1 />} /> {/* مسار احتياطي للبطاقات السفلية */}
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
=======
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
      <main className="flex-grow pt-0">
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
>>>>>>> upstream/main
