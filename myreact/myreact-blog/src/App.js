import TopBar from './comp/topbar/TopBar';
import Home from './pages/home/Home';
import Detail from './pages/detail/Detail';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Write from './pages/form/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const user = false;
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/*" element={<Detail />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/contact/*" element={<Contact />} />
        {/* <Route path="/write/*" element={(user == 'wein') ? <Write /> : <Home />} /> */}
        <Route path="/write/*" element={<Write />} />
        <Route path="/settings" element={user ? <Home /> : <Settings />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
