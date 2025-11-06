import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Address from "./pages/Address";
import BookingForm from "./pages/BookingForm";
import ReviewPage from "./components/ReviewPage";
import ServicesPage from "./components/ServicesPage";
import States from "./pages/States";
import StateTours from "./pages/StateTours";
import TourDetails from "./pages/TourDetails";
import TrendingTripsPage from "./components/TrendingTripsPage";
import TrendingTripDetails from "./components/TrendingTripDetails";

import AllDestinations from "./components/AllDestinations";
import DestinationDetails from "./components/DestinationDetails";
import SeasonalPlansFull from "./components/SeasonalPlansFull";
import SeasonalPlanDetails from "./components/SeasonalPlanDetails";

function App() {
  return (
    <>
    <title>Home | Shreeji Holidays</title>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<BookingForm/>} />
        <Route path="/services" element={<ServicesPage/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/address" element={<Address />} />
        <Route path="/reviews" element={<ReviewPage/>}/> 

         <Route path="/states" element={<States />} />
        <Route path="/states/:stateName" element={<StateTours />} />
        <Route path="/states/:stateName/:tourId" element={<TourDetails />} />

<Route path="/trending-trips" element={<TrendingTripsPage />} />
<Route path="/trending-trips/:id" element={<TrendingTripDetails />} />


        <Route path="/destinations" element={<AllDestinations />} />
        <Route path="/destinations/:id" element={<DestinationDetails />} />

        <Route path="/seasonal-plans" element={<SeasonalPlansFull />} />
<Route path="/seasonal-plans/:id" element={<SeasonalPlanDetails />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
