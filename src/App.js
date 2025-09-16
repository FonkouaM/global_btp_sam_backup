// import logo from './logo.svg';
import Navigation from './components/routers/Navigation';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/headers/Header';
import Footer from './components/footer/Footer';
import './App.css';
import ScrollToTop from './upper/ScrollToTop';
import BackToTop from './upper/BackToTop'


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Header/>
      <Navigation/>
      <Footer/>
      <BackToTop reload={false} /> {/* reload=true si tu veux actualiser */}
    </BrowserRouter>
  );
}

export default App;
