import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Movie from './pages/Movie';
import Search from './pages/Search';
import Header from "./components/Header"; 
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer />
    </Router>
  )
}
