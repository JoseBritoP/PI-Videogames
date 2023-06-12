import './App.css';
import  Navbar  from './components/Navbar/Navbar'
import { Home, Detail, Form, Error, Landing } from './views/index';
import { Routes, Route, useLocation } from 'react-router-dom'

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <div>
      {location.pathname !== "/" && <Navbar />}
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create" element={<Form />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;