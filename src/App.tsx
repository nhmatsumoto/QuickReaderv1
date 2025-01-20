import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
// import { QuickReader } from "./pages/QuickReader";
import { Footer } from "./components/Footer";
import { ReadingStats } from "./pages/ReadingStats";
import { ReadingStatsProvider } from "./context/ReadingStatsContext";

import Playground from "./pages/Playground";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ReadingStatsProvider>
        <Router>
          <div className="min-h-screen bg-gray-200">
            <Navbar />
            <main className="flex-grow">
              <div className="container mx-auto p-4">
                <Routes>
                  <Route path="/" element={<Playground />} />
                  <Route path="/about" element={<About />} />
                  {/* <Route path="/stats" element={<ReadingStats />} /> */}
                </Routes>
              </div>
            </main>
            <Footer />
          </div>
        </Router>
      </ReadingStatsProvider>
    </div>
  );
};

export default App;