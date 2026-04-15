import react from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/header/Header';
import SingleProduct from './pages/SingleProduct';
import Products from './pages/Products';

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<SingleProduct />} />
      </Routes>
    </div>
  )
}

export default App




// <Header/>
// <StringPop text={firstName}/>
//  <StringPop lastName={lastName}/>
// <NumberState/>
// <StringState/>
// <BooleanState/>
// <InputState/>
// <ArrayState/>
// <UseState/>
//<RenderList/>
// <ObjectList/>
// <ProductList/>

//const firstName = "Anisa";
//const lastName = "Bekteshi"

// import 'bootstrap-icons/font/bootstrap-icons.css';
// import "./App.css";
// import StringPop from './components/header/stringPop';
// import NumberState from './components/NumberState';
// import StringState from './components/StringState';
// import BooleanState from './components/BooleanState';
// import InputState from './components/inputState';
// import ArrayState from './components/ArrayState';
// import UseState from './components/useState';
// import RenderList from './components/Lists-array/renderList';
// import ObjectList from './components/Lists-array/ObjectList';
// import ProductList from './components/ProductList';