import { Routes, Route } from "react-router-dom";
import  Outlet from './components/Outlet/Outlet';
import Home from './components/Home/Home';
import TrackShipment from './components/TrackShipment/TrackShipment';
function App() {
  return (
    <>
<Routes>
 <Route path="/" element={<Outlet />}>
   {/* public route */}
   <Route index path="/" element={<Home />} />products
   <Route path="search/:id" element={<TrackShipment/>} />
  </Route>
 </Routes>
    </>
  );
}

export default App;
