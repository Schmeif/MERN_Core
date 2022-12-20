import './App.css';
import Main from './views/Main';
import Product from './components/Product'; 
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import UpdateForm from './components/UpdateForm';

function App() {
  return (
    <div className="App">
      {/* <Form/>  */}
      {/* <List/> */}
      {/* <Product/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/api/getOneProduct/:id' element={<Product />} />
          <Route path='/api/updateProduct/:id' element={<UpdateForm/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;