import { BrowserRouter, Routes, Route } from 'react-router-dom';

import UserLogin from '../src/pages/UserLogin';
import UserRegister from '../src/pages/UserRegister';
import SellerLogin from '../src/pages/SellerLogin';
import SellerRegister from '../src/pages/SellerRegister';
import Home from '../src/pages/Home';
import SellerDashboard from '../src/pages/SellerDashboard';
import SellerProductCreate from '../src/pages/SellerProductCreate';
import ProductDetails from '../src/pages/ProductDetails';
import AppLayout from '../src/layouts/AppLayout';
import '../src/App.css';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        {/* Auth routes (outside layout if desired) */}
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/user/register" element={<UserRegister />} />
        <Route path="/seller/login" element={<SellerLogin />} />
        <Route path="/seller/register" element={<SellerRegister />} />

        {/* App layout with role-based nav */}
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/seller/dashboard" element={<SellerDashboard />} />
          <Route path="/seller/products/create" element={<SellerProductCreate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App