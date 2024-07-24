
import Home from './Home';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HotelDetails from './HotelDetails';
import ViewRooms from './ViewRooms';
import Booking from './Booking';
import RoomBooks from './RoomBooks';
import AboutUs from './AboutAs';
import Display from './Display';
import ContactUs from './ContactUs';
function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <nav>
            <Link to="/"></Link>
            <Link to="/viewrooms"></Link>
            <Link to="/HotelDetails"></Link>
              <Link to="/HotelDetails"></Link>            
          </nav>
        </header>
        <main>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/viewrooms" element={<ViewRooms />} />
            { <Route path="/Booking" element={< Booking />} /> }
            { <Route path="/RoomBooks" element={< RoomBooks />} /> }
            { <Route path="/HotelDetails" element={< HotelDetails />} /> }
            { <Route path="/AboutAs" element={<AboutUs/>} /> }
            { <Route path="/Display" element={<Display/>} /> }
            { <Route path="/ContactUs" element={<ContactUs/>} /> }
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
