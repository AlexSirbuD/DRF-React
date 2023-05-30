import { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import { Container } from 'react-bootstrap';
import ProductView from './components/ProductView';
import Footer from './components/Footer';
import AddProduct from './components/AddProduct';
import { useNavigate } from 'react-router-dom';
import RegisterUser from './components/RegisterUser';
import ProductUpdate from './components/ProductUpdate';
import ProductUserList from './components/ProductUserList';
import ContactsPage from './components/ContactsPage';




function App() {

  

  const [products, setProducts] = useState([])


  const token = localStorage.getItem('mytoken')

  let navigate = useNavigate();

  

  useEffect(() => {
    fetch('http://127.0.0.1:8000/products/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        
      }
    })
      .then(resp => resp.json())
      .then(result => {
        setProducts(result)
      })
      .catch(e => {
        console.log(e)
      })
  }, [])


  useEffect(() => {
    if (!token) {
      navigate('/')
      return
    }}, [token])

  
 
  return (
    <div >
      {/* <Chat /> */}
      <Navbar products={products} />
      <main style={{ 'min-height': '99vh' }}>
        <Container>
          <Routes>

            <Route path='/' element={
              <ProductList products={products}  />}></Route>

            <Route path='/user-products' element={
              <ProductUserList products={products}  />}></Route>

            <Route path='/product/:slug' element={
              <ProductView products={products} />} exact />

            <Route path='/login' element={
              <Login />}></Route>

            <Route path='/add' element={
              <AddProduct />}></Route>

            <Route path='/register' element={
              <RegisterUser />}></Route>

            <Route path='/contacts' element={
              <ContactsPage />}></Route>

            <Route path='/:slug/update' element={
              <ProductUpdate products={products}/>}></Route>
              

          </Routes>
        </Container>
      </main>
      <Footer />



    </div>
  )
}

export default App;
