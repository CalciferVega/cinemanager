import './App.css';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home'
import VenuesMenu from './pages/Menu';
import Movie from './pages/PaymentProcess/Movie';
import Tickets from './pages/PaymentProcess/Tickets';
import Seats from './pages/PaymentProcess/Seats';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/menu" element={<VenuesMenu/>}/>
        <Route path="/movie/:id" element={<Movie/>}/>
        <Route path="/selecttotal" element={<Tickets/>}/>
        <Route path="/selectseats" element={<Seats/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
