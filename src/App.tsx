import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import GalleryPage from "./pages/GalleryPage";
import GoalsPage from "./pages/GoalsPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/goals" element={<GoalsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default App;
