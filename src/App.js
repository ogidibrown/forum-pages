import Hero from "./pages/Hero";
import {Route, Routes} from 'react-router-dom';
import Posts from './pages/Posts';
import About from './pages/About';
import Followers from './pages/Followers';
import Mentions from './pages/Mentions';
import Photos from './pages/Photos';
import Videos from './pages/Videos';
import Live from "./pages/Live";
import Music from "./pages/Music";
import Questions from "./pages/Questions";
import CheckIns from "./pages/CheckIns";
import Sports from "./pages/Sports";
import Films from "./pages/Films";
import TvProgramms from "./pages/TvProgramms";
import Books from "./pages/Books";
import Likes from "./pages/Likes";
import ReviewsGiven from "./pages/ReviewsGiven";



function App() {


  return (
    <>
    <Hero />
    <div>
      <Routes>
        <Route path="/" element={<Posts/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/followers" element={<Followers/>} />
        <Route path="/mentions" element={<Mentions/>} />
        <Route path="/photos" element={<Photos/>} />
        <Route path="/videos" element={<Videos/>} />
        <Route path="/live" element={<Live/>} />
        <Route path="/music" element={<Music/>} />
        <Route path="/questions" element={<Questions/>} />
        <Route path="/checkins" element={<CheckIns/>} />
        <Route path="/sports" element={<Sports/>} />
        <Route path="/films" element={<Films/>} />
        <Route path="/tv" element={<TvProgramms/>} />
        <Route path="/books" element={<Books/>} />
        <Route path="/likes" element={<Likes/>} />
        <Route path="/reviews" element={<ReviewsGiven/>} />
      </Routes>
    </div>
    </>
  );
}

export default App;
