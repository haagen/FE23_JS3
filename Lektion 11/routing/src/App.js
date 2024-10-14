import logo from './logo.svg';
import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './home';
import Page1 from './page1';
import Page2 from './page2';

function App() {
  return (
    <div id="mainDiv">
      <header>
        [
          <NavLink to="/" className={({ isActive }) => isActive ? 'activePageLink' : undefined }>Hem</NavLink> |&nbsp; 
          <NavLink to="/page1/" className={({ isActive }) => isActive ? 'activePageLink' : undefined }>Page 1</NavLink> |&nbsp; 
          <NavLink to="/page2/" className={({ isActive }) => isActive ? 'activePageLink' : undefined }>Page 2</NavLink>
        ]
      </header>
      <main>
        <Routes>
          <Route path="" element={ <Home /> } />
          <Route path="/page1/" element={ <Page1 ></Page1> } />
          <Route path="/page2/" element={ <Page2 /> } />
          <Route path="/page2/:id" element={ <Page2 /> } />
        </Routes>
      </main>
      <footer>
        &copy; Grit Academy 2024 - We rock!
      </footer>
    </div>
  );
}

export default App;
