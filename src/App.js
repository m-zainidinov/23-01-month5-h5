import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Detail from './pages/Detail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/user/:id' element={<Detail />} />
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
