import React from 'react'
// import productSection from './components/productSection'
import { Route,Routes,Navigate} from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Page404 from './pages/Page404'
import NavigationBar from './components/NavigationBar'
import FooterSection from './components/FooterSection'

export default function App(){
  const [user,setUser] = useState(false);
  return (
   <>
   <NavigationBar />

   {
     user
      ? 
      (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<Page404/>} />
      </Routes>
      ) 
      : 
      (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" replace={true} />} />
      </Routes>
      )
   }
   <FooterSection/>
   </>
  )
}

