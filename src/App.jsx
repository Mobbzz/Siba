import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import { Navbar } from './components/Navbar'
import About from './Pages/About'
import Shop from './pages/Shop'
import NotFound from './pages/NotFound'
import { ShoppingCartPage } from './Pages/ShoppingCartPage'
import  Footer  from './Components/Footer'

import ProductDetails from './pages/ProductDetails' 
import Home from './Pages/Home'

function App() {
  return (
    <Router> 
      <Navbar />


      <div className="container">

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/details/:id' element={<ProductDetails /> } />  
          <Route path='/About' element={<About /> } />
          <Route path='/ShoppingCart' element={<ShoppingCartPage />} />
          
          <Route path='*' element={ <NotFound />} />
        </Routes> 
        

      </div>
        
      
    <Footer /> 
    </Router>
    
  )
}
export default App