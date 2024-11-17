import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Index from './views/index/Index.jsx';
import Login from './views/authentication/Login.jsx';
import Register from "./views/authentication/Register.jsx";
import ArtistOnboarding from "./views/artist/ArtistOnboarding.jsx";
import ArtistHome from "./views/artist/ArtistHome.jsx";
import ArtistEditProfile from "./views/artist/ArtistEditProfile.jsx";
import UserHome from "./views/user/UserHome.jsx";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './index.css';
import BookAppointment from "./views/user/BookAppointment.jsx";
import FindArtist from "./views/index/FindArtist.jsx";
import HowItWorks from "./views/index/HowItWorks.jsx"; // Import your custom CSS

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Index />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/onboarding"} element={<ArtistOnboarding />} />
        <Route path={'/artist-home'} element={<ArtistHome />} />
        <Route path={'/artist-edit-profile'} element={<ArtistEditProfile />} />
        <Route path={'/user-home'} element={<UserHome />} />
        <Route path={'/book-appointment'} element={<BookAppointment />} />
        <Route path={'/find-artist'} element={<FindArtist />} />
        <Route path={'/how-it-works'} element={<HowItWorks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;