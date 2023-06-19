import { useState } from 'react';
import './App.css';
import  Navbar  from './components/Navbar/Navbar'
import { Home, Detail, Form, Error, Landing } from './views/index';
import { Routes, Route, useLocation } from 'react-router-dom'

function App() {
  const location = useLocation();

  const [currentPage,setCurrentPage] = useState(1)
  
  const resetPagination = () => {
    setCurrentPage(1)
  };

  return (
    <div className="App">
      {location.pathname !== "/" && <Navbar resetPagination={resetPagination}/>}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home currentPage={currentPage} setCurrentPage={setCurrentPage}/>} />
          <Route path="/create" element={<Form />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/*" element={<Error />} />
        </Routes>
    </div>
  );
}

export default App;